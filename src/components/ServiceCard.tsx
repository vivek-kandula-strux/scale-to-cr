import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-gradient-glass backdrop-blur-glass p-6 rounded-lg shadow-glass hover:shadow-neon transition-all duration-300 transform hover:scale-105 animate-fade-in border border-glass-white/20 hover:border-electric-cyan/50 group">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-gradient-neon rounded-full group-hover:animate-glow-pulse">
          <Icon className="w-8 h-8 text-space-dark" />
        </div>
        <h3 className="text-card-title font-bold text-space-dark">{title}</h3>
        <p className="text-space-dark/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;