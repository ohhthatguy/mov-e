import Link from "next/link";
const Header = () => {
  return (
    <div className="h-18 bg-header_bg flex justify-around text-sub_topic_color items-center">
      <Link href={"/"} className="hover:cursor-pointer">
        mov-e
      </Link>

      <div className="capitalize flex gap-4 ">
        <a href="#movie" className="nav_items">
          movie
        </a>
        <a href="#TV" className="nav_items">
          TV
        </a>
      </div>

      <div>Theme</div>
    </div>
  );
};

export default Header;
