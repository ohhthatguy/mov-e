import { optionGetServer } from "@/lib/helper/option";

export const getPeopleList = async () => {
  try {
    const url =
      "https://api.themoviedb.org/3/trending/person/day?language=en-US";

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

const PeopleList = async () => {
  try {
    const data = await getPeopleList();
    // Check if the response is okay (status 200-299)
    if (data.results.length <= 0) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }

    console.log(data);

    return (
      <div className="grid gap-6">
        <div className="text-4xl  font-extrabold  leading-tight text-topic_color ">
          Most popular Celebrities
        </div>

        <div className="  relative bg-primary_color text-sub_topic_color  ">
          {/* <CelebList data={data} /> */}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);

    throw new Error("Something wrong occur in fetching data from api");
  }
};
export default PeopleList;
