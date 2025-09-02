import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-card p-4 sm:p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group">
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <div className="p-2 sm:p-3 bg-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;