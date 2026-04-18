import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="h-26 bg-ele_bg border border-header_bg  flex gap-8 justify-around text-sub_topic_color items-center">
      <div className="capitalize flex gap-4 text-sm sm:text-md hover:cursor-pointer hover:text-blue-600">
        <a
          href="https://www.bhaskarthakulla.com.np"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Bhaskar Thakulla{" "}
        </a>
      </div>

      <div className="flex gap-6 items-center">
        <a
          href="https://www.linkedin.com/in/bhaskar-thakulla-baaab8279/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin
            className="hover:cursor-pointer hover:scale-110 scale-100 transition-all duration-300"
            size={19}
          />{" "}
        </a>

        <a
          href="https://github.com/ohhthatguy"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub
            className="hover:cursor-pointer hover:scale-110 scale-100 transition-all duration-300"
            size={19}
          />
        </a>
        <a
          href="mailto:thakullabhaskar456@gmail.com?subject=Connection from portfolio "
          target="_blank"
          rel="noreferrer"
        >
          <CgMail
            className="hover:cursor-pointer hover:scale-110 scale-100 transition-all duration-300"
            size={27}
          />
        </a>
        <a
          href="https://www.instagram.com/oyebhaskarr/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram
            className="hover:cursor-pointer hover:scale-110 scale-100 transition-all duration-300"
            size={19}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
