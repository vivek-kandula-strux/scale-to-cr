import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface ClientLogo {
  id: string;
  name: string;
  business: string | null;
  image_url: string;
}

export const useClientLogos = () => {
  return useQuery({
    queryKey: ['client-logos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('client_logos')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        throw error;
      }

      return data as ClientLogo[];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};