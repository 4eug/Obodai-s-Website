/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import Image from 'next/image';

const Brands = (props) => {
  return (
    <div name="home" id="#capabilities" className="w-full h-full flex flex-col justify-between ">
      <div className="grid md:grid-cols-1 max-w-auto ml-2 md:ml-16 mt-8 md:mt-10">
        <div
          className="flex flex-col justify-center md:items-start 2xl:pl-4 2xl:mb-2 mb:mb-12 w-full px-2 "
        >
          <h1 className="text-2xl md:text-3xl font-bold ">
          These folks trust us.
          </h1>    
          <h1 className="text-2xl md:text-3xl font-bold">
          You also can.
          </h1>
        </div>
      </div>
      <div className="ml-4 mr-4 md:ml-40 md:mr-40 h-52 xsm:h-72 sm:h-80 md:h-96 lg:h-screen xl:h-screen relative">
        <Image layout='fill' objectFit='contain' src='/Our Clients.png' alt='' />
      </div>
    </div>
  );
};

export default Brands;
