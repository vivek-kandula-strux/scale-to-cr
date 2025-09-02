interface TestimonialCardProps {
  image: string;
  name: string;
  business: string;
  testimonial: string;
  result?: string;
}

const TestimonialCard = ({ image, name, business, testimonial, result }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-4 sm:p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300">
      <div className="flex flex-col space-y-3 sm:space-y-4">
        {/* Client Info */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <img 
            src={image} 
            alt={name}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-card-foreground text-sm sm:text-base">{name}</h4>
            <p className="text-muted-foreground text-xs sm:text-sm truncate">{business}</p>
            {result && (
              <p className="text-primary font-semibold text-xs sm:text-sm mt-1">{result}</p>
            )}
          </div>
        </div>
        
        {/* Testimonial */}
        <blockquote className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
          "{testimonial}"
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;