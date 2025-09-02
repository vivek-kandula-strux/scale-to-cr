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
    <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300">
      {/* Client Image */}
      <div className="mb-4">
        <img 
          src={image} 
          alt={`${clientName} business`}
          className="w-full h-48 object-cover rounded-lg border border-primary/20"
        />
      </div>
      
      {/* Client Info */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-card-foreground">{clientName}</h4>
        <p className="text-muted-foreground text-sm">{industry}</p>
      </div>
      
      {/* Results */}
      <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Before</p>
            <p className="text-lg font-bold text-card-foreground">{beforeRevenue}</p>
          </div>
          <div className="text-primary font-bold text-xl">→</div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">After</p>
            <p className="text-lg font-bold text-primary">{afterRevenue}</p>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">in {timeframe}</p>
      </div>
      
      {/* Story */}
      <p className="text-muted-foreground text-sm leading-relaxed">{story}</p>
    </div>
  );
};

export default CaseStudyCard;