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
    <div className="bg-gradient-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-105">
      {/* Client Image */}
      <div className="mb-4">
        <img 
          src={image} 
          alt={`${clientName} business`}
          className="w-full h-48 object-cover rounded-lg shadow-card"
        />
      </div>
      
      {/* Client Info */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-deep-brown">{clientName}</h4>
        <p className="text-deep-brown/70 text-sm">{industry}</p>
      </div>
      
      {/* Results */}
      <div className="mb-4 p-3 bg-forest-green/10 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-xs text-deep-brown/60 uppercase tracking-wide">Before</p>
            <p className="text-lg font-bold text-deep-brown">{beforeRevenue}</p>
          </div>
          <div className="text-forest-green font-bold text-xl">→</div>
          <div className="text-center">
            <p className="text-xs text-deep-brown/60 uppercase tracking-wide">After</p>
            <p className="text-lg font-bold text-forest-green">{afterRevenue}</p>
          </div>
        </div>
        <p className="text-center text-xs text-deep-brown/60 mt-2">in {timeframe}</p>
      </div>
      
      {/* Story */}
      <p className="text-deep-brown/80 text-sm leading-relaxed">{story}</p>
    </div>
  );
};

export default CaseStudyCard;