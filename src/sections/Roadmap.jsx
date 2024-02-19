import React from "react";
import RoadImg from "/src/assets/images/roadmap-bg.png";
import Map1 from "/src/assets/images/map_01.png";
import Map2 from "/src/assets/images/map_02.png";
import Map3 from "/src/assets/images/map_03.png";

const Roadmap = () => {
  return (
    <div className="w-full px-[15%] py-[15%] md:py-[5%]" id='roadmap'>
      <div className="w-full">
        <div className=" text-center md:text-start chibold font-normal stroke2 green-shadow text-[7vw] md:text-[4vw] text-white hover:text-[#4A8102] transition-all duration-500">
          BOBO
        </div>
        <div className=" text-center md:text-start chibold font-normal stroke2 green-shadow text-[7vw] md:text-[4vw] text-white hover:text-[#4A8102] transition-all duration-500">
          ROADMAP
        </div>
      </div>
      <div className="w-full pt-[20vw] md:pt-[10vw] relative">
        <img src={RoadImg} alt="" className="h-[110vw] md:h-auto" />
        <img
          src={Map1}
          alt=""
          className="w-[25%] absolute top-[15vw] right-[-1.5vw] md:w-[23%]  md:top-[1.6vw] md:right-0"
        />
        <img
          src={Map2}
          alt=""
          className="w-[25%] absolute top-[64vw] right-[27vw] md:w-[20%]  md:top-[35.5vw]  -z-10"
        />
        <img
          src={Map3}
          alt=""
          className="w-[23%] absolute bottom-[17vw] left-0 md:w-[17%]  md:bottom-[10.8vw] -z-10"
        />

        <div className="absolute top-[11vw] left-[13vw] md:top-[9vw] md:left-[25vw]">
          <div className="demo1 text-[#FFBC25] text-[4.5vw] md:text-[2.5vw]">
            Phase 1
          </div>
          <ul className="pl-[1.2vw] list-disc text-white text-[2vw] md:text-[1.3vw] demo opacity-80">
            <li className="mb-[3px]">Launch</li>
            <li className="mb-[3px]">
              CoinGecko & Coinmarketcap <br />
              Listing
            </li>
            <li className="mb-[3px]">1,000+ Holders</li>
            <li className="mb-[3px]">Get $Bobo Trending</li>
          </ul>
        </div>


        <div className="absolute top-[60vw] left-[-10vw] md:top-[33vw] md:left-0">
          <div className="demo1 text-[#FFBC25] text-[4.5vw] md:text-[2.5vw]">
            Phase 2
          </div>
          <ul className="pl-[1.2vw] list-disc text-white text-[2vw] md:text-[1.3vw] demo opacity-80">
            <li className="mb-[3px]">Community Partnerships</li>
            <li className="mb-[3px]">Cex Listings</li>
            <li className="mb-[3px]">6,900+ Holders</li>
          </ul>
        </div>
        
        
        <div className="absolute top-[98vw] right-[-11vw] md:top-[53vw] md:right-0">
          <div className="demo1 text-[#FFBC25] text-[4.5vw] md:text-[2.5vw]">
            Phase 3
          </div>
          <ul className="pl-[1.2vw] list-disc text-white text-[2vw] md:text-[1.3vw] demo opacity-80">
            <li className="mb-[3px]">Bobo Merch</li>
            <li className="mb-[3px]">Bobo Apps</li>
            <li className="mb-[3px]">50,000+ Holders</li>
          </ul>
        </div>
        
        <div className="absolute left-[20vw]">
          <div className="demo1 text-[#FFBC25] text-[4.5vw] md:text-[2.5vw]">
            Phase 4
          </div>
          <ul className="pl-[1.2vw] list-disc text-white text-[2vw] md:text-[1.3vw] demo opacity-80">
            <li className="mb-[3px]">100,000+ Holders</li>
            <li className="mb-[3px]">Our own forest</li>
            <li className="mb-[3px]">Endless jars of honey</li>
            <li className="mb-[3px]">No bulls to tell us how to live. </li>
            <li className="mb-[3px]">Complete Bobo takeover of the meme market.</li>
            <li className="mb-[3px]">Bobo Utopia.</li>
          </ul>
        </div>

       
      </div>
    </div>
  );
};

export default Roadmap;
