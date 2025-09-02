interface TestimonialCardProps {
  image: string;
  name: string;
  business: string;
  testimonial: string;
  result?: string;
}

const TestimonialCard = ({ image, name, business, testimonial, result }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300">
      <div className="flex flex-col space-y-4">
        {/* Client Info */}
        <div className="flex items-center space-x-4">
          <img 
            src={image} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
          />
          <div>
            <h4 className="font-semibold text-card-foreground">{name}</h4>
            <p className="text-muted-foreground text-sm">{business}</p>
            {result && (
              <p className="text-primary font-semibold text-sm mt-1">{result}</p>
            )}
          </div>
        </div>
        
        {/* Testimonial */}
        <blockquote className="text-muted-foreground italic leading-relaxed">
          "{testimonial}"
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;