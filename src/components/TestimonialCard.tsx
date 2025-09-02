interface TestimonialCardProps {
  image: string;
  name: string;
  business: string;
  testimonial: string;
  result?: string;
}

const TestimonialCard = ({ image, name, business, testimonial, result }: TestimonialCardProps) => {
  return (
    <div className="bg-gradient-glass backdrop-blur-glass p-6 rounded-lg shadow-glass hover:shadow-neon transition-all duration-300 border border-glass-white/20 hover:border-bright-mint/50">
      <div className="flex flex-col space-y-4">
        {/* Client Info */}
        <div className="flex items-center space-x-4">
          <img 
            src={image} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover shadow-glass border-2 border-electric-cyan/30"
          />
          <div>
            <h4 className="font-semibold text-space-dark">{name}</h4>
            <p className="text-space-dark/70 text-sm">{business}</p>
            {result && (
              <p className="text-electric-cyan font-bold text-sm mt-1">{result}</p>
            )}
          </div>
        </div>
        
        {/* Testimonial */}
        <blockquote className="text-space-dark/80 italic leading-relaxed">
          "{testimonial}"
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;