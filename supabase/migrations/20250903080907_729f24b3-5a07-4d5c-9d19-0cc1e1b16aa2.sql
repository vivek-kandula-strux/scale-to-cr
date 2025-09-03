-- CRITICAL SECURITY FIX: Remove insecure policy that allows all authenticated users to view lead submissions
-- This immediately fixes the security vulnerability

-- Step 1: Drop the dangerous policy that allows any authenticated user to view all leads
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON public.lead_submissions;

-- Step 2: For now, only allow admin level access through a simpler approach
-- Create a function that checks if user is authorized (you'll need to manually grant this)
CREATE OR REPLACE FUNCTION public.is_authorized_user(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  -- This function returns false by default, requiring explicit authorization
  -- You'll need to modify this or use INSERT statements to grant access to specific users
  SELECT false;
$$;

-- Step 3: Create restrictive policy - NO ONE can view leads by default
-- This immediately secures the data until proper role assignments are made
CREATE POLICY "Authorized users only can view lead submissions" 
ON public.lead_submissions 
FOR SELECT 
TO authenticated
USING (public.is_authorized_user(auth.uid()));

-- Step 4: Allow admins to manage leads (update/delete) - also requires authorization
CREATE POLICY "Authorized users can update lead submissions" 
ON public.lead_submissions 
FOR UPDATE
TO authenticated
USING (public.is_authorized_user(auth.uid()));

CREATE POLICY "Authorized users can delete lead submissions" 
ON public.lead_submissions 
FOR DELETE
TO authenticated
USING (public.is_authorized_user(auth.uid()));