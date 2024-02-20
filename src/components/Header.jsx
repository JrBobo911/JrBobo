import React from 'react'
import TwitterImg from '/src/assets/images/twitter.png'
import TelegramImg from '/src/assets/images/telegram.png'

const Header = () => {
  return (
    <div className='pt-[1.5vw] pb-[0.5vw] px-[5vw] flex justify-between items-center headerTop mt-[-5px]'>
        <a href="/" className='chibold text-theme hover:text-[#2e7d32] strokehead md:text-stroke-black-1-5 text-[5vw] md:text-[3vw] leading-[-1.76px] transition-all duration-1000 tracking-[-1px]  '>BOBO THE BEAR Jr</a> 

        <div className='flex justify-end items-center'>
            <a href='https://twitter.com/BoboJr_SOL' target='_blank' className='bounceDown'>
                <img src={TwitterImg} alt='Twitter' className='w-[50px]'/>
            </a>
            <a href='https://t.me/BoboJr_SOL' target='_blank' className='bounceDown'>
                <img src={TelegramImg} alt='Telegram' className='w-[50px]'/>
            </a>
        </div>
    </div>
  )
}

export default Header



