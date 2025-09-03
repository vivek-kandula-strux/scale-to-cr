import { Button } from "@/components/ui/button";

interface StickyNavbarProps {
  onCtaClick: () => void;
}

const StickyNavbar = ({ onCtaClick }: StickyNavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-xl font-display font-bold text-foreground">
              Strux <span className="gradient-text">Digital</span>
            </h2>
          </div>
          
          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="lg"
            onClick={onCtaClick}
            className="hidden sm:flex min-h-[44px]"
          >
            Get Growth Plan
          </Button>
          
          {/* Mobile CTA */}
          <Button 
            variant="cta" 
            size="sm"
            onClick={onCtaClick}
            className="sm:hidden min-h-[44px]"
          >
            Get Growth Plan
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;