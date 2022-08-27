/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";

const AboutHead = (props) => {
  return (
    <div name="home" className="w-full h-full flex flex-col justify-between ">
      <div className="grid md:grid-cols-1 max-w-auto ml-2 md:ml-32 mt-16 md:mt-24">
        <div
          className="flex flex-col justify-center md:items-start 2xl:pl-2 2xl:mb-2 w-full px-2 py-8 "
        >
          <h1 className="text-xl md:text-xl font-bold">
          {props.heading}
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
          {props.title}
          </h1>    
          <h1 className="text-4xl md:text-6xl font-bold">
          {props.title2}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;
