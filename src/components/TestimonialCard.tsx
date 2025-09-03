interface TestimonialCardProps {
  image: string;
  name: string;
  business: string;
  testimonial: string;
  result?: string;
}

const TestimonialCard = ({ image, name, business, testimonial, result }: TestimonialCardProps) => {
  return (
    <div className="glass-card p-4 sm:p-6 rounded-xl border border-white/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 group animate-slide-up">
      <div className="flex flex-col space-y-3 sm:space-y-4">
        {/* Client Info */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="relative">
            <img 
              src={image} 
              alt={name}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary/50 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-display font-bold text-card-foreground text-sm sm:text-base group-hover:gradient-text transition-all duration-300">{name}</h4>
            <p className="text-muted-foreground text-xs sm:text-sm truncate">{business}</p>
            {result && (
              <p className="text-accent-secondary font-bold text-xs sm:text-sm mt-1 animate-glow-pulse">{result}</p>
            )}
          </div>
        </div>
        
        {/* Testimonial */}
        <blockquote className="text-sm sm:text-base text-muted-foreground italic leading-relaxed relative pl-4 border-l-2 border-gradient-primary group-hover:text-text-light transition-colors duration-300">
          <span className="text-accent-primary text-2xl absolute -left-1 -top-1">"</span>
          {testimonial}
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;