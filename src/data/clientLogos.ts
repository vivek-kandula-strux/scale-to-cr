// Static client logos data - No API calls needed for performance
export interface ClientLogo {
  id: string;
  name: string;
  business: string | null;
  image_url: string;
}

export const staticClientLogos: ClientLogo[] = [
  {
    id: "1",
    name: "Lokesh Lalwani",
    business: "Data Analytics & Excel Coach",
    image_url: "/placeholder.svg"
  },
  {
    id: "2", 
    name: "Rajni Singh",
    business: "India's Top Autism Coach",
    image_url: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Gaurav Arora", 
    business: "India's Top Coach for CAs",
    image_url: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Sudhir Kove",
    business: "Watch & Logo Analysis Coach", 
    image_url: "/placeholder.svg"
  },
  {
    id: "5",
    name: "Jatan Shah",
    business: "Skill Nation - Top EdTech Platform",
    image_url: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Rohini Sri",
    business: "Montessori & Parenting Coach",
    image_url: "/placeholder.svg"
  }
];

// Helper function to get client image URL by name - now static
export const getClientImageUrl = (name: string): string => {
  const client = staticClientLogos.find(logo => logo.name === name);
  return client?.image_url || '/placeholder.svg';
};