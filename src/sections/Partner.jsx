import React from 'react'
import MEXCImg from '/src/assets/images/full-mexc-logo.png'
// import OpenSeaImg from '/src/assets/images/full-opensea-logo.png'
// import LBankImg from '/src/assets/images/full-lbank-logo.png'
import BlurImg from '/src/assets/images/blurlogo.png'
import Pinksale from '/src/assets/images/pinksale.png'
import DexView from '/src/assets/images/dexview.webp'

const Partner = () => {
  return (
    <div className='w-full text-center px-[15%]'>
        <div className=" text-center chibold font-normal stroke2 green-shadow text-[7vw] md:text-[4vw] text-white hover:text-[#4A8102] transition-all duration-500">
        PARTNERED WITH
      </div>
        <div className='w-full flex justify-between items-center flex-wrap'>
            <div className='w-[25%] mt-[4vw] p-[1%]'><img src={MEXCImg} alt="MEXC"/></div>
            <div className='w-[25%] mt-[4vw] p-[1%]'><img src={Pinksale} alt="OpenSea"/></div>
            <div className='w-[25%] mt-[4vw] p-[1%]'><img src={DexView} alt="DexView"/></div>
            <div className='w-[25%] mt-[4vw] p-[1%]'><img src={BlurImg} alt="Blur"/></div>
        </div>
    </div>
  )
}

export default Partner