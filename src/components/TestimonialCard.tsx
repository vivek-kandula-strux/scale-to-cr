interface TestimonialCardProps {
  image: string;
  name: string;
  business: string;
  testimonial: string;
  result?: string;
}

const TestimonialCard = ({ image, name, business, testimonial, result }: TestimonialCardProps) => {
  return (
    <div className="bg-gradient-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300">
      <div className="flex flex-col space-y-4">
        {/* Client Info */}
        <div className="flex items-center space-x-4">
          <img 
            src={image} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover shadow-card"
          />
          <div>
            <h4 className="font-semibold text-deep-brown">{name}</h4>
            <p className="text-deep-brown/70 text-sm">{business}</p>
            {result && (
              <p className="text-forest-green font-bold text-sm mt-1">{result}</p>
            )}
          </div>
        </div>
        
        {/* Testimonial */}
        <blockquote className="text-deep-brown/80 italic leading-relaxed">
          "{testimonial}"
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;