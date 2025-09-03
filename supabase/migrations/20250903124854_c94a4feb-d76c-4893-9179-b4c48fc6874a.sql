-- Create client_logos table
CREATE TABLE public.client_logos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  business TEXT,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.client_logos ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (since this is for public testimonials)
CREATE POLICY "Client logos are publicly readable" 
ON public.client_logos 
FOR SELECT 
USING (true);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_client_logos_updated_at
BEFORE UPDATE ON public.client_logos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert client data
INSERT INTO public.client_logos (name, business, image_url) VALUES
('Lokesh Lalwani', 'Business Owner', 'https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/Client%20Logos/Lokesh%20Lalwani-min.webp'),
('Rajni Singh', 'CEO', 'https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/Client%20Logos/rajni.webp'),
('Gaurav Arora', 'Founder', 'https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/Client%20Logos/gaurav-arorajpg_1574668914.webp'),
('Sudhir Kove', 'Director', 'https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/Client%20Logos/Sudhir%20Kove.webp'),
('Jatan Shah', 'CEO', 'https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/Client%20Logos/jatan%20shah.webp'),
('Rohini Sri', 'Business Owner', 'https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/Client%20Logos/rohini.webp');