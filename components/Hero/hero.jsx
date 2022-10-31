/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from "next/link"
import Image from 'next/future/image'

const ButtonItem = (props) => (
  
    <Link href={`#${props.href}`} passHref>
    <svg width="18" height="50" className='animate-rebound' viewBox="0 0 24 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9393 65.0607C11.5251 65.6464 12.4749 65.6464 13.0607 65.0607L22.6066 55.5147C23.1924 54.9289 23.1924 53.9792 22.6066 53.3934C22.0208 52.8076 21.0711 52.8076 20.4853 53.3934L12 61.8787L3.51472 53.3934C2.92893 52.8076 1.97919 52.8076 1.3934 53.3934C0.807611 53.9792 0.807611 54.9289 1.3934 55.5147L10.9393 65.0607ZM10.5 0L10.5 64H13.5L13.5 0L10.5 0Z" fill="white"/>
        </svg>
    </Link>
  
);

const Hero = ({heading}) => {
    return (
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[-0rem]'>
          <h1 className='mt-[200px] text-center text-4xl mb-[30px]'>{heading}</h1>
          <Image
        src="/Logo 2.png"
        alt="logo"
        width={700}
        height={700}
        priority
      />
          <div className="mt-32 container px-4 mx-auto text-center">
         <a className="relative inline-flex items-center justify-center w-32 h-32  hover:text-gray-700" href="">
         <ButtonItem href="#message"></ButtonItem>
    </a>
  </div>
        </div>
       
      </div>
    );
  };
  
  export default Hero;
