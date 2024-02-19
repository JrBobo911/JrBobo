import React from 'react'
import TwitterImg from '/src/assets/images/twitter.png'
import TelegramImg from '/src/assets/images/telegram.png'

const Header = () => {
  return (
    <div className='pt-[1.5vw] pb-[0.5vw] px-[5vw] flex justify-between items-center'>
        <div className='chibold text-theme stroke1 md:text-stroke-black-1-5 text-[5vw] md:text-[3vw] leading-[-1.76px] transition-all duration-1000'>BOBO THE BEAR Jr</div> 

        <div className='flex justify-end items-center'>
            <a href='https://twitter.com/BoboJr_SOL' target='_blank'>
                <img src={TwitterImg} alt='Twitter' className='w-[40px]'/>
            </a>
            <a href='https://t.me/BoboJr_SOL' target='_blank'>
                <img src={TelegramImg} alt='Telegram' className='w-[40px]'/>
            </a>
        </div>
    </div>
  )
}

export default Header


