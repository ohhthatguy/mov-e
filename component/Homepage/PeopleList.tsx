import { FaAd, FaClock, FaFire, FaStar } from "react-icons/fa";

export const features = [
  {
    title: "Ad-free browsing experience",
    icon: FaAd,
  },
  {
    title: "Trending & popular content",
    icon: FaFire,
  },
  {
    title: "Latest releases updated regularly",
    icon: FaClock,
  },

  {
    title: "Ratings & detailed info",
    icon: FaStar,
  },
];

const PeopleList = async () => {
  return (
    <div className="grid sm:grid-rows-2 sm:grid-cols-2 my-8  gap-8 p-8">
      {features?.map((e: any, index: number) => {
        const Icon = e.icon;

        return (
          <div
            key={index}
            className={`p-4 rounded-md grid place-content-center   h-56 border bg-white  hover:bg-sub_topic_color hover:cursor-pointer transition-all duration-500 scale-100 hover:scale-105 hover:text-black`}
          >
            <div className="flex justify-center mb-4 items-center ">
              <Icon
                size={56}
                className={`p-2 rounded-md ${e.bgColor} ${e.color} `}
              />
            </div>

            <div>
              <div>{e.title}</div>
            </div>
          </div>
        );
      })}
    </div>
    // <div className="flex justify-between gap-6 text-topic_color border h-52">
    //   {features.map((e: any, index: number) => {
    //     const Icon = e.icon;
    //     return (
    //       <div key={index}>
    //         <div>
    //           <Icon />
    //         </div>
    //         <div>{e.title}</div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};
export default PeopleList;
