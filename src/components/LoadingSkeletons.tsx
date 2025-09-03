import { Skeleton } from "@/components/ui/skeleton";

export const TestimonialSkeleton = () => (
  <div className="glass-card p-4 sm:p-6 rounded-xl border border-white/10">
    <div className="flex flex-col space-y-3 sm:space-y-4">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <Skeleton className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  </div>
);

export const CaseStudySkeleton = () => (
  <div className="glass-card p-4 sm:p-6 rounded-xl border border-white/10">
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="flex justify-between items-center bg-gradient-primary/20 p-4 rounded-lg">
        <div className="text-center space-y-1">
          <Skeleton className="h-6 w-16 mx-auto" />
          <Skeleton className="h-3 w-12 mx-auto" />
        </div>
        <div className="text-center space-y-1">
          <Skeleton className="h-6 w-16 mx-auto" />
          <Skeleton className="h-3 w-12 mx-auto" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  </div>
);

export const ChallengeSkeleton = () => (
  <div className="glass-card p-6 rounded-xl border border-white/10">
    <div className="flex items-start space-x-4">
      <Skeleton className="w-10 h-10 rounded-xl" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  </div>
);

export const FAQSkeleton = () => (
  <div className="space-y-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="glass-card p-4 rounded-xl border border-white/10">
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    ))}
  </div>
);