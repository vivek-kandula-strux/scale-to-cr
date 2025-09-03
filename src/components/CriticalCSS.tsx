import { useEffect } from 'react';

// Critical CSS for above-the-fold content
const criticalStyles = `
  /* Critical styles for hero section */
  .hero-section {
    padding-top: 5rem;
    padding-bottom: 4rem;
    position: relative;
    overflow: hidden;
  }
  
  /* Critical typography */
  .hero-title {
    font-size: clamp(1.5rem, 4vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }
  
  /* Critical button styles */
  .hero-button {
    min-height: 56px;
    padding: 0.75rem 2rem;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: all 0.2s;
  }
  
  /* Critical gradients */
  .gradient-text {
    background: linear-gradient(135deg, hsl(var(--accent-primary)), hsl(var(--accent-secondary)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const CriticalCSS = () => {
  useEffect(() => {
    // Create style element for critical CSS
    const styleElement = document.createElement('style');
    styleElement.innerHTML = criticalStyles;
    styleElement.setAttribute('data-critical', 'true');
    
    // Insert at the beginning of head for highest priority
    document.head.insertBefore(styleElement, document.head.firstChild);
    
    return () => {
      // Cleanup on unmount
      const criticalStyle = document.querySelector('style[data-critical="true"]');
      if (criticalStyle) {
        criticalStyle.remove();
      }
    };
  }, []);

  return null;
};

export default CriticalCSS;