import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-gradient-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-105 animate-fade-in">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-forest-green rounded-full">
          <Icon className="w-8 h-8 text-soft-peach" />
        </div>
        <h3 className="text-card-title font-bold text-deep-brown">{title}</h3>
        <p className="text-deep-brown/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;