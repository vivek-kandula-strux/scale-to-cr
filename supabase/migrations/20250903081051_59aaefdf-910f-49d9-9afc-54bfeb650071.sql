-- Create authorized users table for lead access management
CREATE TABLE IF NOT EXISTS public.authorized_lead_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    role TEXT NOT NULL DEFAULT 'manager' CHECK (role IN ('admin', 'manager')),
    granted_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS (safe to run multiple times)
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