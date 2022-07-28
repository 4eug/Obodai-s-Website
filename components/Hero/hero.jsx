/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from "next/link"




const Hero = ({heading}) => {
    return (
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[-0rem]'>
          <h1 className='text-center text-4xl'>{heading}</h1>
          <img className="w-full " src="/Logo 2.png" alt="/" />
        </div>

        
      </div>
    );
  };
  
  export default Hero;
