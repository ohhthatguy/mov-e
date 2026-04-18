export default function Loading() {
  return (
    <div className="min-h-screen bg-primary_color p-6 space-y-12">
      {/* 1. Large Hero / Feature Skeleton */}
      {/* Added justify-center and items-center to center the content area */}
      <div className="relative w-full h-[100vh] rounded-3xl overflow-hidden bg-gray-900 border border-white/5 flex flex-col justify-center items-center p-8 md:p-16">
        {/* The "Shimmering" Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />

        {/* Content Area */}
        {/* Removed justify-end and kept place-items-center for the text/button alignment */}
        <div className="relative z-20 space-y-6 max-w-2xl w-full grid place-items-center">
          {/* Movie Title Skeleton */}
          <div className="h-12 w-3/4 bg-gray-700 rounded-lg animate-pulse" />

          {/* Description Text Skeletons */}
          <div className="w-full space-y-3 grid place-items-center">
            <div className="h-4 w-full bg-gray-700/60 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-700/60 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-700/60 rounded animate-pulse" />
          </div>

          {/* CTA Button Skeleton */}
          <div className="h-14 w-44 bg-blue-600/50 rounded-full animate-pulse mt-4" />
        </div>
      </div>
    </div>
  );
}
