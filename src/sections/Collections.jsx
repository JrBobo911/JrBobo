import React from "react";
import BtnImg1 from "/src/assets/images/hero_btn1.png";
import ImgSlider from "../components/ImgSlider";
import ImgSliderReverse from "../components/ImgSliderReverse";

const Collections = () => {
  return (
    <div
      className="flex flex-col item-center gap-[5vw] md:gap-[1vw] py-[15%] md:py-0"
      id="collection"
    >
      <div className=" text-center chibold font-normal stroke2 green-shadow text-[7vw] md:text-[4vw] text-white hover:text-[#4A8102] transition-all duration-500">
        NFT COLLECTION
      </div>
      <div className="text-center opacity-60 text-[#ffffffb3] text-[3.5vw] md:text-[1.4vw]">
        Official Bobo Council NFT Collection.
      </div>
      <div className="text-center opacity-60 text-[#ffffffb3] text-[3.5vw] md:text-[1.4vw]">
        Supply total 2,222.
      </div>
      <div className="w-full flex  justify-center items-center ">
        <a className="w-[150px] md:w-[17.5vw] flex  justify-center items-center relative">
          <img src={BtnImg1} alt="" />
          <span className="chibold text-[4.5vw] md:text-[2vw]  text-[#D1FFC8] font-[500] transition-all duration-300 text-center stroke1 spacing-[0.1vw] mt-[-4.5vw] absolute top-[7.5vw] md:top-[6.2vw]">
            COMING SOON
          </span>
        </a>
      </div>
      <div className="w-full">
          <ImgSlider />
          <ImgSliderReverse/>
      </div>
    </div>
  );
};

export default Collections;
