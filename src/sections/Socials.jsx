import React from "react";
import BgImage from "/src/assets/images/footer_bush.png";
import MidImage from "/src/assets/images/footer_mid.png";
import BtnImg1 from "/src/assets/images/hero_btn1.png";

const Socials = () => {
  return (
    <div className=" w-full flex justify-center items-center relative">
      <img src={BgImage} alt="" className="w-full" />
      <img
        src={MidImage}
        alt=""
        className="w-[65vw] mt-[-30] md:w-[50vw] absolute"
      />
      <div className=" w-[65vw] mt-[-30] md:w-[50vw] absolute">
        <div className="w-full  chibold  text-[5vw] md:text-[4vw] text-white stroke2 hover:text-[#4A8102]  font-[500] transition-all duration-1000 green-shadow  md:stroke3 text-center">
          JOIN OUR
        </div>
        <div className="w-full  chibold  text-[5vw] md:text-[4vw] text-white stroke2 hover:text-[#4A8102]  font-[500] transition-all duration-1000 green-shadow  md:stroke3 text-center">
          SOCIAL TO STAY
        </div>
        <div className="w-full  chibold  text-[5vw] md:text-[4vw] text-white stroke2 hover:text-[#4A8102]  font-[500] transition-all duration-1000 green-shadow  md:stroke3 text-center">
          UPDATED
        </div>
      </div>
      <div className="absolute bottom-0 md:bottom-[7vw]">
        <a className="w-[150px] md:w-[17.5vw] flex  justify-center items-center relative">
          <img src={BtnImg1} alt="" />
          <span className="chibold text-[4.5vw] md:text-[2vw]  text-[#D1FFC8] font-[500] transition-all duration-300 text-center stroke1 spacing-[0.1vw] mt-[-4.5vw] absolute top-[7.5vw] md:top-[6.2vw]">
            BUY NOW
          </span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
