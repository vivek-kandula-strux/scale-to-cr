-- Fix critical security issue: Implement role-based access control for lead submissions
-- Step 1: Create role enum for the application
CREATE TYPE public.app_role AS ENUM ('admin', 'manager', 'user');

-- Step 2: Create user_roles table to manage who can access sensitive data
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_by UUID REFERENCES auth.users(id),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Step 3: Create security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Step 4: Create function to check if user has admin or manager role
CREATE OR REPLACE FUNCTION public.can_access_leads(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'manager')
  )
$$;

-- Step 5: Update RLS policies on user_roles table
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all user roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage user roles" 
ON public.user_roles 
FOR ALL 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Step 6: Drop the insecure policy on lead_submissions
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON public.lead_submissions;

-- Step 7: Create secure policy - only admins and managers can view leads
CREATE POLICY "Only admins and managers can view lead submissions" 
ON public.lead_submissions 
FOR SELECT 
TO authenticated
USING (public.can_access_leads(auth.uid()));

-- Step 8: Add policy for admins to manage lead data
CREATE POLICY "Admins can manage lead submissions" 
ON public.lead_submissions 
FOR ALL 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Step 9: Add trigger for user_roles updated_at (for consistency)
CREATE TRIGGER update_user_roles_updated_at
    BEFORE UPDATE ON public.user_roles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();