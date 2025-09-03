import { LucideIcon } from "lucide-react";

interface ChallengeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ChallengeCard = ({ icon: Icon, title, description }: ChallengeCardProps) => {
  return (
    <div className="glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-500 border-l-4 border-accent-secondary group animate-slide-up">
      <div className="flex items-start space-x-4">
        <div className="p-2.5 bg-accent-secondary/20 rounded-xl group-hover:bg-accent-secondary/30 transition-all duration-300 backdrop-blur-sm">
          <Icon className="w-6 h-6 text-accent-secondary group-hover:animate-float" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-display font-bold text-card-foreground mb-2 group-hover:gradient-text transition-all duration-300">{title}</h4>
          <p className="text-muted-foreground leading-relaxed group-hover:text-text-light transition-colors duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;