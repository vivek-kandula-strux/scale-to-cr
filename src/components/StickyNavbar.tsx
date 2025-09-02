import { Button } from "@/components/ui/button";

interface StickyNavbarProps {
  onCtaClick: () => void;
}

const StickyNavbar = ({ onCtaClick }: StickyNavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-dark/90 backdrop-blur-glass border-b border-electric-cyan/20 shadow-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-xl font-bold text-neutral-light">
              Strux <span className="text-electric-cyan">Digital</span>
            </h2>
          </div>
          
          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="lg"
            onClick={onCtaClick}
            className="hidden sm:flex"
          >
            Get My Growth Plan
          </Button>
          
          {/* Mobile CTA */}
          <Button 
            variant="cta" 
            size="sm"
            onClick={onCtaClick}
            className="sm:hidden"
          >
            Start Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;