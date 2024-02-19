import React from "react";
import ButtonBack from "/src/assets/images/tax box.png";
import CircleImg from "/src/assets/images/token_circle.png";

const Tokenomics = () => {
  return (
    <div className="w-full py-[15%] px-[15%] md:py-[5%] md:px-[15%] flex flex-col-reverse md:flex-row justify-between items-center" id='TOKENOMICS'>
      <div className="w-full md:w-[50%] flex flex-col items-center md:items-start gap-[4vw] md:gap-[2vw]">
        <div className=" text-center chibold font-normal stroke2 green-shadow text-[7vw] md:text-[4vw] text-white hover:text-[#4A8102] transition-all duration-500">
          TOKENOMICS
        </div>
        <div className="text-[#FFBC25] text-[4vw] md:text-[2vw] font-normal">
          69,000,000,000,000 - Total Supply
        </div>

        <div className="flex justify-center items-center flex-col md:flex-row">
          <a className="w-[150px] md:w-[17.5vw] flex  justify-center items-center relative">
            <img src={ButtonBack} alt="" />
            <div className="demo1 text-[5.5vw] md:text-[3vw]  text-[#D1FFC8] font-[500] transition-all duration-300 text-center stroke1 mt-[-4.5vw] absolute top-[6vw] md:top-[5.2vw]">
              0% TAX
            </div>
          </a>
        </div>

        <ul className="mt-[2vw] list-disc">
          <li className="text-white text-[3.5vw] md:text-[1.5vw] demo2 text-center md:text-start green-shadow">
            LIQUIDITY BURNED
          </li>
          <li className="text-white text-[3.5vw] md:text-[1.5vw] demo2 text-center md:text-start green-shadow">
            CONTRACT RENOUNCED
          </li>
        </ul>
      </div>
      <div className="demo1 w-full md:w-[50%] relative">
        <img src={CircleImg} alt="" />
        <div className="flex flex-col justify-center items-start absolute top-[25px] md:top-[30px] right-[55%] md:right-[53%] font-normal">
          <div className="text-[#112818] text-[3.5vw] spacing-[-0.24px] md:text-[2vw]">
            8%
          </div>
          <div className="text-[#112818] text-[3.5vw] spacing-[-0.24px] md:text-[2vw]">
            CEX Listing
          </div>
        </div>
        <div className="flex flex-col justify-center items-start absolute bottom-[38%] left-[69%] font-normal">
          <div className="text-[#112818] text-[3.5vw] spacing-[-0.24px] md:text-[2vw]">
            92%
          </div>
          <div className="text-[#112818] text-[3.5vw] spacing-[-0.24px] md:text-[2vw]">
            COMMUNITY
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Tokenomics;
