import { optionGetServer } from "@/lib/helper/option";
import BentoTvShowsSection from "./clientcomp/BentoTvShowsSection";

export const getTvShows = async () => {
  try {
    const url =
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";

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

const TvShowSection = async () => {
  try {
    const data = await getTvShows();

    // Check if the response is okay (status 200-299)
    if (data.results.length <= 0) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }

    console.log(data);

    return (
      <div className="grid gap-6 mt-8  " id="TV">
        <div className="leading-tight">
          <div className="text-4xl  font-extrabold  leading-tight text-topic_color ">
            Tv shows
          </div>
          <div className="text-muted_color">popular TV Shows of this week</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 p-4 bg-primary_color text-sub_topic_color">
          {data.results.slice(0, 7).map((e: any, index: number) => (
            <BentoTvShowsSection key={index} e={e} index={index} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};

export default TvShowSection;
