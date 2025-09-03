-- Step 2: Create a simple authorized users table for lead access management
CREATE TABLE IF NOT EXISTS public.authorized_lead_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    role TEXT NOT NULL DEFAULT 'manager' CHECK (role IN ('admin', 'manager')),
    granted_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.authorized_lead_users ENABLE ROW LEVEL SECURITY;

-- Update the authorization function to check the authorized users table
CREATE OR REPLACE FUNCTION public.is_authorized_user(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.authorized_lead_users
    WHERE user_id = _user_id
  );
$$;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin_user(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.authorized_lead_users
    WHERE user_id = _user_id AND role = 'admin'
  );
$$;

-- Create RLS policies for authorized_lead_users table
CREATE POLICY "Users can view their own authorization" 
ON public.authorized_lead_users 
FOR SELECT 
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all authorizations" 
ON public.authorized_lead_users 
FOR SELECT 
TO authenticated
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can manage authorizations" 
ON public.authorized_lead_users 
FOR ALL 
TO authenticated
USING (public.is_admin_user(auth.uid()));

-- Add trigger for updated_at
CREATE TRIGGER update_authorized_lead_users_updated_at
    BEFORE UPDATE ON public.authorized_lead_users
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();