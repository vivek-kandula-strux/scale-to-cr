import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-gradient-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-forest-green rounded-lg group-hover:bg-bright-green transition-colors duration-300">
          <Icon className="w-6 h-6 text-soft-peach" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-deep-brown mb-2">{title}</h4>
          <p className="text-deep-brown/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;