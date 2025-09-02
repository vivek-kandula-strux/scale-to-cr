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
    <div className="bg-gradient-glass backdrop-blur-glass p-6 rounded-lg shadow-glass hover:shadow-purple transition-all duration-300 transform hover:scale-105 border border-glass-white/20 hover:border-neon-purple/50">
      {/* Client Image */}
      <div className="mb-4">
        <img 
          src={image} 
          alt={`${clientName} business`}
          className="w-full h-48 object-cover rounded-lg shadow-glass border border-electric-cyan/20"
        />
      </div>
      
      {/* Client Info */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-space-dark">{clientName}</h4>
        <p className="text-space-dark/70 text-sm">{industry}</p>
      </div>
      
      {/* Results */}
      <div className="mb-4 p-3 bg-gradient-neon/10 rounded-lg border border-electric-cyan/20">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-xs text-space-dark/60 uppercase tracking-wide">Before</p>
            <p className="text-lg font-bold text-space-dark">{beforeRevenue}</p>
          </div>
          <div className="text-electric-cyan font-bold text-xl animate-pulse">→</div>
          <div className="text-center">
            <p className="text-xs text-space-dark/60 uppercase tracking-wide">After</p>
            <p className="text-lg font-bold text-electric-cyan">{afterRevenue}</p>
          </div>
        </div>
        <p className="text-center text-xs text-space-dark/60 mt-2">in {timeframe}</p>
      </div>
      
      {/* Story */}
      <p className="text-space-dark/80 text-sm leading-relaxed">{story}</p>
    </div>
  );
};

export default CaseStudyCard;