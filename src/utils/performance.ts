// Performance monitoring utilities

export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input' && 'processingStart' in entry) {
          const fidEntry = entry as PerformanceEventTiming;
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
        }
      });
    });
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    } catch (error) {
      console.log('Performance Observer not supported');
    }
  }
};

export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload critical images
    const heroImage = new Image();
    heroImage.src = "https://okoooexnwtkdebpkfsku.supabase.co/storage/v1/object/public/Client%20Logos/Hero%20Client%20Logo%20Collage.png";
    
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Sora:wght@600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
  }
};

// Intersection Observer for lazy loading
export const createLazyLoadObserver = (callback: IntersectionObserverCallback) => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
  }
  return null;
};