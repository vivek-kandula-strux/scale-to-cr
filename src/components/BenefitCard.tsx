import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-gradient-glass backdrop-blur-glass p-6 rounded-lg shadow-glass hover:shadow-purple transition-all duration-300 group border border-glass-white/20 hover:border-neon-purple/50">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-gradient-purple rounded-lg group-hover:animate-float">
          <Icon className="w-6 h-6 text-neutral-light" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-space-dark mb-2">{title}</h4>
          <p className="text-space-dark/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;