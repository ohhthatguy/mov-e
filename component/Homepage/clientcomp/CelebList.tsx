"use client";
import Image from "next/image";

export default function CelebList({ e, index }: any) {
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div
      className={`${spanClass} relative group overflow-hidden rounded-3xl hover:cursor-pointer border border-white/10 bg-header_bg/20 shadow-xl`}
    >
      {/* Background Image */}
      <Image
        src={`${posterBaseUrl}${e.backdrop_path || e.poster_path}`}
        alt={e.name || e.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
      />

      {/* Gradient Scrim (UI Creativity) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white line-clamp-1">{e.name}</h3>

        {/* Only show overview on the larger cards to keep it clean */}
        {(index === 0 || index === 1) && (
          <p className="text-sm text-gray-300 line-clamp-2 mt-2 font-light">
            {e.overview}
          </p>
        )}
      </div>
    </div>
  );
}
