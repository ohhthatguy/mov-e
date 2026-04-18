import { optionGetServer } from "@/lib/helper/option";
import Image from "next/image";
import Link from "next/link";

export const getTvShowDetail = async (id: string) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;

    const response = await fetch(url, optionGetServer);
    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};

export const getTvShowVideo = async (id: string) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;

    const response = await fetch(url, optionGetServer);
    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};

export const getTvShowCredit = async (id: string) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`;

    const response = await fetch(url, optionGetServer);
    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};

export const getTvShowImages = async (id: string) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}/images`;

    const response = await fetch(url, optionGetServer);
    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};

export const getSeriesReview = async (id: string) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&page=1`;

    const response = await fetch(url, optionGetServer);
    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};

export const getMovieRecomendation = async (id: string) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`;

    const response = await fetch(url, optionGetServer);
    console.log(response);
    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  try {
    const { id } = await params;

    console.log(id);
    const data = await getTvShowDetail(id);
    const videoData = await getTvShowVideo(id);
    const movieCredit = await getTvShowCredit(id);
    const movieImagesApi = await getTvShowImages(id);
    // const seriesReview = await getSeriesReview(id);
    const movieRecommend = await getMovieRecomendation(id);

    console.log(videoData);
    // Check if the response is okay (status 200-299)
    let videoUrl;
    if (videoData.results.length <= 0) {
      videoUrl = "asdasds";
    } else {
      videoUrl = videoData.results[0].key;
    }

    console.log(data);
    console.log(videoData);
    const posterBaseUrl = "https://image.tmdb.org/t/p/original";

    return (
      <div className="grid gap-6 text-topic_color px-4">
        <div className="relative ">
          <div className="relative group h-[60vh] w-full hover:cursor-pointer overflow-hidden rounded-xl  shadow-2xl">
            <Image
              src={`${posterBaseUrl}${data.backdrop_path}`}
              alt={data.title}
              fill
              className="object-cover  transition-all duration-1000 
               group-hover:scale-105 group-hover:blur-sm"
              priority // Helps with loading the first image fast
            />
            <div
              className="absolute inset-0 flex items-center justify-center 
                  bg-black/40 opacity-0 transition-opacity duration-500 
                  group-hover:opacity-100"
            >
              <Link
                href={`https://www.youtube.com/${videoUrl}`}
                target="_blank"
                className="translate-y-4 transform rounded-full bg-white px-6 py-2 
                 font-bold text-black transition-transform duration-500 
                 group-hover:translate-y-0 hover:bg-gray-200 flex gap-2 items-center"
              >
                Link to Trailer
              </Link>
            </div>
          </div>

          <div className="  absolute sm:h-66 sm:w-48 sm:top-2/5 h-46 w-30 top-3/5 ">
            <Image
              src={`${posterBaseUrl}${data.poster_path}`}
              alt={data.name}
              fill
              className="rounded-lg shadow-lg object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="mt-6  text-center">
          <div className="text-4xl mt-4 font-bold">{data.name}</div>
          <div className="italic text-muted_color ">{data.tagline}</div>
        </div>

        <div className="my-4 grid gap-6">
          <div className="flex flex-col gap-6 sm:flex-row justify-between items-center">
            <div className="flex gap-4 items-center text-sub_topic_color italic">
              <span>{data.first_air_date}</span> |{" "}
              <span>{data.number_of_seasons} Seasons</span> |{" "}
              <span>{data.spoken_languages[0].english_name}</span>
            </div>
            <div className="flex flex-wrap gap-6">
              {data.genres.map((e: any, index: number) => (
                <div key={index} className="secondary_btn">
                  {e.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <div className="text-4xl font-bold">Overview</div>
            <div className="text-sub_topic_color text-lg">{data.overview}</div>
          </div>

          <div className="grid gap-4">
            <div className="text-4xl font-bold">Cast</div>

            <div className="grid grid-cols-3 place-items-center gap-10">
              {movieCredit.cast.slice(0, 10).map((e: any, index: number) => (
                <div
                  className="flex gap-4 hover:cursor-pointer hover:bg-ele_bg transition-all duration-500 p-2 hover:scale-105 scale-100 w-full  rounded-md   items-center"
                  key={index}
                >
                  <div className={`relative  rounded-full h-32 w-32 `}>
                    <Image
                      src={`${posterBaseUrl}${e.profile_path}`}
                      alt={e.name}
                      fill
                      className="object-cover  transition-opacity duration-500 rounded-full"
                      priority
                    />
                  </div>

                  <div className=" grid">
                    <span className="font-bold text-topic_color">{e.name}</span>{" "}
                    <span className=" text-sub_topic_color ">
                      {e.character}
                    </span>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="text-4xl font-bold">Images</div>
            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 p-4 bg-primary_color text-sub_topic_color">
              {movieImagesApi.backdrops
                .slice(0, 15)
                .map((e: any, index: number) => {
                  const spanClass =
                    index === 0
                      ? "md:col-span-2 md:row-span-2" // Big Feature Card
                      : index === 1
                        ? "md:col-span-2 md:row-span-1" // Wide Card
                        : index === 4
                          ? "md:col-span-2 md:row-span-1" // Bottom Wide Card
                          : "md:col-span-1 md:row-span-1"; // Standard Small Cards
                  return (
                    <div
                      key={index}
                      className={`${spanClass} relative group overflow-hidden rounded-3xl hover:cursor-pointer border hover:bg-header_bg border-white/10 bg-header_bg/20 shadow-xl`}
                    >
                      {/* Background Image */}
                      <Image
                        src={`${posterBaseUrl}${e.file_path}`}
                        alt={e.name || e.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110  hover:opacity-60"
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="grid gap-2">
            <div>
              <div className="text-4xl font-bold">Similar</div>
              <div>You would also like</div>
            </div>

            <div className="flex w-full overflow-auto p-4 gap-8 scrollbar-custom">
              {movieRecommend.results
                .splice(0, 6)
                .map((e: any, index: number) => (
                  <Link
                    href={`/movie-detail/${e.id}`}
                    key={index}
                    className="bg-ele_bg rounded-md  h-88 w-56 shrink-0 hover:cursor-pointer hover:scale-105 scale-100 transition-all duration-300"
                  >
                    <div className="h-9/12 w-full relative">
                      <Image
                        alt={e.title}
                        src={`${posterBaseUrl}${e.poster_path}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110  hover:opacity-60"
                      />
                    </div>

                    <div className="font-bold px-2 ">{e.name}</div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};

export default page;
