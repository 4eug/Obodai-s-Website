/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";

const AboutHead = () => {
  return (
    <div name="home" className="w-full h-full flex flex-col justify-between ">
      <div className="grid md:grid-cols-1 max-w-auto ml-2 md:ml-32 mt-16 md:mt-24">
        <div
          className="flex flex-col justify-center md:items-start 2xl:pl-24 2xl:mb-28 w-full px-2 py-8 "
        >
          <h1 className="text-xl md:text-xl font-bold">
          ABOUT
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
          For bold, forward-
          </h1>    
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
          thinking businesses.
          </h1>
        </div>
      </div>
      <hr className="my-2 mx-4 border-gray-700 sm:mx-auto lg:my-4 lg:mx-32"/>
    </div>
  );
};

export default AboutHead;
