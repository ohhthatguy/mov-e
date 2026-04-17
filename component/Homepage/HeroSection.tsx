import HeroBtns from "./clientcomp/HeroBtns";
const HeroSection = async () => {
  return (
    <div className="h-[calc(100vh)]  flex flex-col justify-center items-center relative bg-primary_color text-sub_topic_color bg-[url('/homepage.png')]  bg-contain">
      {/* <div className="absolute inset-0 border border-red-500 bg-header_bg opacity-60"></div> */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-header_bg/80 to-primary_color"></div>

      <div className="grid place-items-center z-10 gap-8">
        <div className="text-[clamp(1.4rem,4vw+0.4rem,5rem)] font-extrabold text-center leading-tight text-topic_color ">
          Movies, series and more.
          <br /> Curated for you
        </div>

        <div className="text-xs sm:text-sm  text-center  text-sub_topic_color ">
          Join <span>mov-e</span> for taking a new step into the world of
          entertainment. A world of excitement. <br />
          Your satisfaction, our guarentee.
        </div>

        <HeroBtns />
      </div>
    </div>
  );
};

export default HeroSection;
