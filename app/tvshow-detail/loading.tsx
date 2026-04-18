export default function Loading() {
  return (
    <div className="min-h-screen bg-primary_color p-8 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
        <div className="aspect-[2/3] w-full bg-gray-700 rounded-2xl" />{" "}
        {/* Poster */}
        <div className="space-y-6">
          <div className="h-12 w-3/4 bg-gray-700 rounded-lg" />
          <div className="flex gap-4">
            <div className="h-6 w-20 bg-gray-700 rounded-full" />
            <div className="h-6 w-20 bg-gray-700 rounded-full" />
          </div>
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-800 rounded" />
            <div className="h-4 w-full bg-gray-800 rounded" />
            <div className="h-4 w-2/3 bg-gray-800 rounded" />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-4 gap-4 auto-rows-[150px]">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800/50 rounded-3xl border border-white/5"
          />
        ))}
      </div>
    </div>
  );
}
