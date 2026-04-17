import HeroSection from "@/component/Homepage/HeroSection";
import PopularSection from "@/component/Homepage/PopularSection";
import TvShowSection from "@/component/Homepage/TvShowSection";

export default function Home() {
  return (
    <div className="px-4 ">
      <HeroSection />
      <PopularSection />
      <TvShowSection />
    </div>
  );
}
