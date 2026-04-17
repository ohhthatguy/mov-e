import { optionGetServer } from "@/lib/helper/option";
import CaroselPopularSection from "./clientcomp/CaroselPopularSection";

export const getPopularMovie = async () => {
  try {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

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

const PopularSection = async () => {
  try {
    const data = await getPopularMovie();
    // Check if the response is okay (status 200-299)
    if (data.results.length <= 0) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }

    console.log(data);

    return (
      <div className="grid gap-6" id="movie">
        <div className="leading-tight">
          <div className="text-4xl  font-extrabold  leading-tight text-topic_color ">
            Popular Movies
          </div>
          <div className="text-muted_color">
            Catch the popular movies of this week
          </div>
        </div>

        <div className="h-[calc(80vh)]  relative bg-primary_color text-sub_topic_color  ">
          <CaroselPopularSection data={data} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};

export default PopularSection;
