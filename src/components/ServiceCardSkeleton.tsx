const ServiceCardSkeleton = () => {
  return (
    <div className="glass-card p-4 sm:p-6 rounded-xl border border-white/10 animate-pulse">
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <div className="p-3 sm:p-4 bg-muted rounded-xl w-16 h-16 sm:w-20 sm:h-20"></div>
        <div className="h-6 bg-muted rounded w-32"></div>
        <div className="space-y-2 w-full">
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;