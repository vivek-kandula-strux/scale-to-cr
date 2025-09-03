-- Create lead_submissions table for form data
CREATE TABLE public.lead_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  business_type TEXT,
  current_revenue TEXT,
  desired_revenue TEXT,
  challenge TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for form submissions)
CREATE POLICY "Anyone can submit leads" 
ON public.lead_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin access (authenticated users can view all)
CREATE POLICY "Authenticated users can view all submissions" 
ON public.lead_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_lead_submissions_updated_at
  BEFORE UPDATE ON public.lead_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Make the Client Logos bucket public for image serving
UPDATE storage.buckets 
SET public = true 
WHERE id = 'Client Logos';

-- Create landing-page-assets bucket for other images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('landing-page-assets', 'landing-page-assets', true);

-- Create RLS policies for public access to images
CREATE POLICY "Public access to Client Logos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'Client Logos');

CREATE POLICY "Public access to landing page assets" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'landing-page-assets');

-- Create indexes for performance
CREATE INDEX idx_lead_submissions_created_at ON public.lead_submissions(created_at DESC);
CREATE INDEX idx_lead_submissions_email ON public.lead_submissions(email);