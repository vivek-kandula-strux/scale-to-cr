import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glass-card p-4 sm:p-6 rounded-xl border border-white/10 hover:border-primary/50 hover:shadow-glow transition-all duration-500 group animate-fade-in hover:scale-105">
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <div className="p-3 sm:p-4 bg-gradient-primary rounded-xl group-hover:shadow-glow group-hover:animate-glow-pulse transition-all duration-500 relative overflow-hidden">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </div>
        <h3 className="text-lg sm:text-xl font-display font-bold text-card-foreground group-hover:gradient-text transition-all duration-300">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-text-light transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;