"use client";
import Link from "next/link";
import { RiMovie2Line } from "react-icons/ri";

import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <div
      className={`h-18 bg-header_bg flex  ${pathname === "/" ? "justify-around " : "px-56"}   text-sub_topic_color items-center`}
    >
      <Link
        href={"/"}
        className="hover:cursor-pointer flex gap-2 items-center  hover:text-blue-600 transition-colors duration-500"
      >
        <RiMovie2Line className="hover:cursor-pointer" size={28} /> mov-e
      </Link>

      <div
        className={` ${pathname === "/" ? "block" : "hidden"} capitalize flex gap-4 `}
      >
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
