import Link from "next/link";
import { RiMovie2Line } from "react-icons/ri";
const Header = () => {
  return (
    <div className="h-18 bg-header_bg flex justify-around text-sub_topic_color items-center">
      <Link
        href={"/"}
        className="hover:cursor-pointer flex gap-2 items-center  hover:text-blue-600 transition-colors duration-500"
      >
        <RiMovie2Line className="hover:cursor-pointer" size={28} /> mov-e
      </Link>

      <div className="capitalize flex gap-4 ">
        <a href="#movie" className="nav_items">
          movie
        </a>
        <a href="#TV" className="nav_items">
          TV
        </a>
      </div>
    </div>
  );
};

export default Header;
