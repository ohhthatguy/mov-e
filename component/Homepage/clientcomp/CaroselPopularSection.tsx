"use client"; // Required for useState in Next.js App Router
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CaroselPopularSection({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const movies = data.results;
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  const nextSlide = () => {
    // If at the end, go back to 0, otherwise add 1
    setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    // If at the beginning, go to the last item, otherwise subtract 1
    setCurrentIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  // Get the current movie data
  const currentMovie = movies[currentIndex];

  return (
    <div className="flex  flex-col items-center gap-4  h-full">
      <div className="relative h-full w-full  overflow-hidden rounded-xl  shadow-2xl">
        <Image
          src={`${posterBaseUrl}${currentMovie.backdrop_path}`}
          alt={currentMovie.title}
          fill
          className="object-cover transition-opacity duration-500"
          priority // Helps with loading the first image fast
        />

        {/* Gradient Overlay for UI Creativity */}
        <div className="absolute inset-0 bg-linear-to-t  from-black/80 to-transparent flex items-end p-6">
          <div className=" w-full  flex gap-8 flex-2">
            <div className="h-32 w-16 sm:h-66 sm:w-48  relative ">
              <Image
                src={`${posterBaseUrl}${currentMovie.poster_path}`}
                alt={currentMovie.title}
                fill
                className="rounded-lg shadow-lg object-cover object-center"
                priority
              />
            </div>

            <div className="flex flex-col justify-end flex-1 gap-2 bg-ele_bg/10 ">
              <h2 className="text-white text-md sm:text-xl font-bold">
                {currentMovie.title}
              </h2>

              <div className="text-sm text-sub_topic_color hidden sm:block">
                {currentMovie.overview}
              </div>

              <Link
                href={`/movie-detail/${currentMovie.id}`}
                className="secondary_btn inline-block w-fit"
              >
                MORE
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-2/5 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-2/5 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
        >
          →
        </button>
      </div>

      {/* Indicator dots for extra UI points */}
      <div className="flex gap-2 absolute bottom-4">
        {movies.map((_: any, i: number) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${i === currentIndex ? "bg-blue-500 w-4" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
