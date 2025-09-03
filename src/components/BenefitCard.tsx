import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="glass-card p-4 sm:p-6 rounded-xl border border-white/10 hover:border-accent-secondary/50 hover:shadow-glow transition-all duration-500 group animate-scale-in">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="p-2.5 bg-gradient-primary rounded-xl group-hover:shadow-glow group-hover:animate-float transition-all duration-500 flex-shrink-0 relative overflow-hidden">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="flex-1">
          <h4 className="text-base sm:text-lg font-display font-bold text-card-foreground mb-2 group-hover:gradient-text transition-all duration-300">{title}</h4>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-text-light transition-colors duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;