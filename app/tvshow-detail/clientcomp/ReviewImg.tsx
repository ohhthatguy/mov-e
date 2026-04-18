"use client";

import Image from "next/image";
import { useState } from "react";

const ReviewImg = ({ seriesReview }: any) => {
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  console.log(seriesReview);
  console.log("im here");
  console.log(seriesReview?.results?.length);

  console.log(seriesReview?.results);

  const [imgSrc, setImgSrc] = useState("");
  return (
    <div className="text-sub_topic_color grid gap-4 text-lg ">
      {seriesReview?.results?.length > 0 ? (
        seriesReview.results.splice(0, 5).map((e: any, index: number) => {
          const img = `${posterBaseUrl}${e.author_details.avatar_path}`;
          setImgSrc(img);
          return (
            <div key={index}>
              <div className="flex gap-2">
                <div className="h-20 w-20 relative">
                  <Image
                    src={imgSrc}
                    alt={e.author || e.author_details.name}
                    fill
                    onError={() => setImgSrc("/homepage.png")}
                    className="object-cover transition-transform duration-700 group-hover:scale-110  hover:opacity-60"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <div>{e.author || e.author_details.name}</div>
                    <div>{e.author_details.rating}</div>
                  </div>
                  <div>
                    {e.created_at?.split("T")?.[0] || "Date unavailable"}
                  </div>
                </div>
              </div>

              <div>{e.content}</div>
            </div>
          );
        })
      ) : (
        <div className="text-3xl text-center font-bold italic bg-ele_bg rounded-md h-48 grid place-items-center">
          sorry, no reviews found!
        </div>
      )}
    </div>
  );
};

export default ReviewImg;
