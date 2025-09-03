interface CaseStudyCardProps {
  image: string;
  clientName: string;
  industry: string;
  beforeRevenue: string;
  afterRevenue: string;
  timeframe: string;
  story: string;
}

const CaseStudyCard = ({ 
  image, 
  clientName, 
  industry, 
  beforeRevenue, 
  afterRevenue, 
  timeframe, 
  story 
}: CaseStudyCardProps) => {
  return (
    <div className="glass-card p-6 rounded-xl border border-white/10 hover:border-accent-tertiary/50 hover:shadow-glow transition-all duration-500 group animate-fade-in">
      {/* Client Image */}
      <div className="mb-4 relative overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={`${clientName} business`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      </div>
      
      {/* Client Info */}
      <div className="mb-4">
        <h4 className="text-lg font-display font-bold text-card-foreground group-hover:gradient-text transition-all duration-300">{clientName}</h4>
        <p className="text-muted-foreground text-sm">{industry}</p>
      </div>
      
      {/* Results - Enhanced with glass morphism */}
      <div className="mb-4 p-4 bg-gradient-primary/10 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors duration-300 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Before</p>
            <p className="text-lg font-display font-bold text-card-foreground">{beforeRevenue}</p>
          </div>
          <div className="text-accent-secondary font-bold text-2xl animate-float">→</div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">After</p>
            <p className="text-lg font-display font-bold gradient-text">{afterRevenue}</p>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2 font-medium">in {timeframe}</p>
      </div>
      
      {/* Story */}
      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-text-light transition-colors duration-300">{story}</p>
    </div>
  );
};

export default CaseStudyCard;