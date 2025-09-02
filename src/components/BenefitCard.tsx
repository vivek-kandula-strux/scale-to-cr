import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-card p-4 sm:p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="p-2 bg-primary rounded-lg group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h4 className="text-base sm:text-lg font-semibold text-card-foreground mb-2">{title}</h4>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;