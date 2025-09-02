import { LucideIcon } from "lucide-react";

interface ChallengeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ChallengeCard = ({ icon: Icon, title, description }: ChallengeCardProps) => {
  return (
    <div className="bg-gradient-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 border-l-4 border-forest-green">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-forest-green/10 rounded-lg">
          <Icon className="w-6 h-6 text-forest-green" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-deep-brown mb-2">{title}</h4>
          <p className="text-deep-brown/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;