import React, { useState } from "react";
import Plus from "/src/assets/images/plus.png";
import Min from "/src/assets/images/min.png";


const FAQs = () => {
  const [item1, setitem1] = useState(false);
  const [item2, setitem2] = useState(false);
  const [item3, setitem3] = useState(false);

  const toggleItem1 = () => {
    setitem1(!item1);
  };
  const toggleItem2 = () => {
    setitem2(!item2);
  };
  const toggleItem3 = () => {
    setitem3(!item3);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center px-[10%] md:px-[20%] pt-[20%] pb-[10%]" id='faq'>
      
      <div className=" text-center chibold font-normal stroke2 green-shadow text-[7vw] md:text-[4vw] text-white hover:text-[#4A8102] transition-all duration-500">
        FREQUENTLY ASKED
      </div>
      <div className=" text-center chibold font-normal stroke2 green-shadow text-[7vw] md:text-[4vw] text-white hover:text-[#4A8102] transition-all duration-500 mb-[10vw] md:mb-[5vw]">
        QUESTIONS
      </div>

      {/* ------- FAQ 1---------- */}
      <div className="w-full flex justify-between items-center border-b border-[#ffffff1a] py-[3vw] md:py-[1vw]">
        <div className="w-[80%] flex flex-col items-start justify-start">
          <div className="text-center  text-[#fff] text-[3vw] md:text-[2vw]">
            What‘s so special about Bobo the Bear?
          </div>
          <div>
            {item1 && (
              <div className="text-start opacity-60 text-[#ffffffb3] text-[2.5vw] md:text-[1.5vw]">
                Bobo the Bear is great liberator of the financial markets. When
                times get rough, Bobo shines the brightest. Bobo memes make us
                laugh in the darkest of times.
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end items-start" onClick={toggleItem1}>
          <img
            src={item1 ? Min : Plus}
            alt="Toggle"
            className="w-[25px] md:w-[30px]"
          />
        </div>
      </div>

      {/* ------- FAQ 2---------- */}
      <div className="w-full flex justify-between items-center border-b border-[#ffffff1a] py-[3vw] md:py-[1vw]">
        <div className="w-[80%] flex flex-col items-start justify-start">
          <div className="text-center  text-[#fff] text-[3vw] md:text-[2vw]">
            How long has Bobo been around?
          </div>
          <div>
            {item2 && (
              <div className="text-start opacity-60 text-[#ffffffb3] text-[2.5vw] md:text-[1.5vw]">
                Lore dates back to 2018. Names like “Bernard“ were thrown around
                until the 4chan community finally decided on the name Bobo. Bobo
                is a derivative of Pepe the Frog with bear features. Drawn by
                community members around the world. Our dev was secretly
                responsible for a large portion of Bobo content.
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end items-start" onClick={toggleItem2}>
          <img
            src={item2 ? Min : Plus}
            alt="Toggle"
            className="w-[25px] md:w-[30px]"
          />
        </div>
      </div>

      {/* ------- FAQ 3---------- */}
      <div className="w-full flex justify-between items-center border-b border-[#ffffff1a] py-[3vw] md:py-[1vw]">
        <div className="w-[80%] flex flex-col items-start justify-start">
          <div className="text-center  text-[#fff] text-[3vw] md:text-[2vw]">
            Wen Moon?
          </div>
          <div>
            {item3 && (
              <div className="text-start opacity-60 text-[#ffffffb3] text-[2.5vw] md:text-[1.5vw]">
                Soon.
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end items-start" onClick={toggleItem3}>
          <img
            src={item3 ? Min : Plus}
            alt="Toggle"
            className="w-[25px] md:w-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
