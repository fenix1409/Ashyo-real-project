import Image from 'next/image'
import React from 'react'
import HeroImage from '../../../public/images/hero-img.png'

const Hero = () => {
  return (
    <div className='px-[130px] bg-[#F3F0F0] flex items-center justify-between'>
        <div className="w-[594px]">
            <h1 className='text-[44px] leading-[52px] mb-[6px] font-black text-[#0A1729]'>Siz kutgan Xiaomi 12 Mi Laite</h1>
            <p className='text-[16px] leading-[18px] text-[#545D6A] mb-[22px]'>Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
            <button className='w-[161px] px-[16px] py-[18px] inline-block bg-[#0F4A97] rounded-md text-[16px] leading-[19px] text-white'>Batafsil</button>
        </div>
        <Image src={HeroImage} alt='Image' width={755} height={731} priority/>
    </div>
  )
}

export default Hero