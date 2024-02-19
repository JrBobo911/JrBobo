import React from "react";
import { Link } from "react-scroll";
import TwitterImg from "/src/assets/images/twitter.png";
import TelegramImg from "/src/assets/images/telegram.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center md:flex-row md:justify-center md:items-center border-b md:border-b-2 border-[#ffffff1a] p-[2vw] pt-[15vw] md:pt-[5vw] md:pb-[1vw] w-full">
      <div className="w-full flex flex-col justify-center items-center md:flex-row md:items-center md:justify-start md:gap-2">
        <div className="chibold text-theme stroke1 md:text-stroke-black-1-5 text-[5vw] md:text-[3vw] leading-[-1.76px] transition-all duration-1000">
          BOBO THE BEAR Jr
        </div>

        {/* ------ Navigation ----- */}
        <div className="text-center  text-[#fff] flex text-[3vw] demo py-[2vw] px-[1.5vw] transition-all duration-300 md:py-[0.5vw] md:px-[0.7vw] md:text-[1.3vw]  justify-start items-center gap-2 footerLinks">
          <Link
            to="about"
            smooth={true}
            offset={200}
            duration={1000}
            className="text-center  text-[#fff] flex text-[3vw] demo py-[2vw] px-[1.5vw] transition-all duration-300 md:py-[0.5vw] md:px-[0.7vw] md:text-[1.3vw] tg"
          >
            ABOUT
          </Link>
          <Link
            to="TOKENOMICS"
            smooth={true}
            offset={200}
            duration={1000}
            className="text-center  text-[#fff] flex text-[3vw] demo py-[2vw] px-[1.5vw] transition-all duration-300 md:py-[0.5vw] md:px-[0.7vw] md:text-[1.3vw] tg"
          >
            TOKENOMICS
          </Link>
          <Link
            to="collection"
            smooth={true}
            offset={200}
            duration={1000}
            className="text-center  text-[#fff] flex text-[3vw] demo py-[2vw] px-[1.5vw] transition-all duration-300 md:py-[0.5vw] md:px-[0.7vw] md:text-[1.3vw] tg"
          >
            NFTs
          </Link>
          <Link
            to="roadmap"
            smooth={true}
            offset={200}
            duration={1000}
            className="text-center  text-[#fff] flex text-[3vw] demo py-[2vw] px-[1.5vw] transition-all duration-300 md:py-[0.5vw] md:px-[0.7vw] md:text-[1.3vw] tg "
          >
            ROADMAP
          </Link>
          <Link
            to="faq"
            smooth={true}
            offset={200}
            duration={1000}
            className="text-center  text-[#fff] flex text-[3vw] demo py-[2vw] px-[1.5vw] transition-all duration-300 md:py-[0.5vw] md:px-[0.7vw] md:text-[1.3vw] tg"
          >
            FAQ
          </Link>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <a href="https://twitter.com/BoboJr_SOL" target="_blank">
          <img
            src={TwitterImg}
            alt="Twitter"
            className="w-[40px] md:w-[55px]"
          />
        </a>
        <a href="https://t.me/BoboJr_SOL" target="_blank">
          <img
            src={TelegramImg}
            alt="Telegram"
            className="w-[40px] md:w-[55px]"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
