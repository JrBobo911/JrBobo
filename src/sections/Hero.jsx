import React from "react";
import Header from "../components/Header";
import  BtnImg1 from '/src/assets/images/hero_btn1.png'
import  BtnImg2 from '/src/assets/images/hero_btn2.png'

const Hero = () => {
  return (
    <div className="bg-hero-image w-full bg-cover bg-center bg-no-repeat h-[62vw] bg-scroll">
      <Header />
      <div className="pt-[10vw] w-full flex justify-center items-center flex-col mt-[-20px]">
        <div className="w-full  chibold  text-[8vw] md:text-[5vw] text-white stroke2 hover:text-[#4A8102]  font-[500] transition-all duration-1000 green-shadow  md:stroke2 text-center h1Animation tracking-[-1px]">
          LET`S GET THIS 
        </div>    
        <div className="w-full  chibold  text-[8vw] md:text-[5vw] text-white stroke2 hover:text-[#4A8102]  font-[500] transition-all duration-1000 green-shadow  md:stroke2 text-center h1Animation mt-[-40px]">
           HONEY
        </div>    
        <div className="flex justify-center items-center flex-col md:flex-row">
          <a href="https://birdeye.so/token/9oCjjEa7wgMnkh5kMMLKExPmDe4Sr5iW8gDCBuNDwCNR?chain=solana" target="_blank" className="w-[150px] md:w-[17.5vw] flex  justify-center items-center relative">
            <img src={BtnImg1} alt=""/>
            <span className="chibold text-[4.5vw] md:text-[2vw]  text-[#D1FFC8] font-[500] transition-all duration-300 text-center stroke1 spacing-[0.1vw] mt-[-4.5vw] absolute top-[7.5vw] md:top-[6.2vw]">CHART</span>
          </a>
          <a href="https://beta.pinksale.finance/solana/launchpad/DWGSJDdDnLdhWsBUFiKSt7DvGwBPuSxrkk2zUJZbdgEY" target="_blank" className="w-[150px] md:w-[17.5vw] flex  justify-center items-center relative">
            <img src={BtnImg2} alt=""/>
            <span className="chibold text-[4.5vw] md:text-[2vw]  text-[#BFFF3A] font-[500] transition-all duration-300 text-center stroke1 spacing-[0.1vw] mt-[-4.5vw] absolute top-[7.5vw] md:top-[6.2vw]">BUY NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;


