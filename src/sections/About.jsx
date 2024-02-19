import React from "react";


const About = () => {
  return (
    <div className="w-full py-[15%] px-[10%] md:py-[5%] md:px-[25%] flex flex-col justify-center items-center gap-[6vw] md:gap-[2vw]" id='about'>
      <div className=" text-center chibold font-normal stroke2 green-shadow text-[7vw] md:text-[4vw] text-white hover:text-[#4A8102] transition-all duration-500">
        ABOUT US
      </div>
      <div className="text-center opacity-100 md:opacity-60 text-[#ffffffb3] text-[3.5vw] md:text-[1.4vw]">
        Bobo the Bear Jr. is a meme character associated with bear markets. The
        design of Bobo is based on Apu Apustaja, and sometimes Pepe the Frog.
        The name “Bobo“ was chosen in June 2018, and has become the official
        name for the character. Bobo is posted worldwide on Twitter, 4chan, but
        particularly on the /biz board (4chan). Bobo NFTs (Bobo Council) have
        been created. Bobo is used to satirize poor investment choices, and
        express pessimism in financial markets. Bobo is run by “rekt_teka$h“ an
        OG Bobo Meme artist, who has been creating Bobo content since its
        inception in 2018.
      </div>
    </div>
  );
};

export default About;

