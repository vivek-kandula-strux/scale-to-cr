import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;