import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-brown">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 text-forest-green">404</h1>
        <p className="text-xl text-soft-peach mb-6">Oops! Page not found</p>
        <p className="text-soft-peach/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3 bg-forest-green text-soft-peach font-semibold rounded-lg hover:bg-bright-green transition-colors duration-300 shadow-cta"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
