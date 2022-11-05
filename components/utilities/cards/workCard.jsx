/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/future/image'

function WorkCard(props) {
  return (
    <div className="mt-32">
      <div
        className={`flex ${
          props.flexDirection ?? "flex-col"
        } w-full bg-slate-40 justify-center gap-8
      lg:gap-24 
      lg:h-portfolio-px-300
      ${props.lgFlexDirection ?? "lg:flex-row"}
      
      `}
      >
        <div className="w-full hidden md:flex items-center">
          <div>
            <h2 className="mt-5 font-semibold text-2xl">{props.title}</h2>
            <p className="mt-1 md:w-[513px] w-[321px] font-normal text-lg">{props.description}</p>
            <h2 className="mt-5 text-xl font-semibold">{props.cap}</h2>
            <ol className="flex">{props.type1}</ol>
            <ol className="flex">{props.type2}</ol>
            <ol className="flex">{props.type3}</ol>
            <ol className="flex">{props.type4}</ol>
            <ol className="flex">{props.type5}</ol>
            <ol className="flex">{props.type}</ol>
          </div>
        </div>

        <div className="w-full">
          <div className="h-full w-full relative">
            <Image
            src={props.src}
            width={1000}
            height={300}
            priority
            />
          </div>
        </div>

        <div className="w-full flex items-center md:hidden ">
          <div>
            <h2 className="mt-5 font-semibold text-2xl">{props.title}</h2>
            <p className="mt-1 md:w-[513px] w-[321px] font-normal text-lg">{props.description}</p>
            <h2 className="mt-5 text-xl font-semibold">{props.cap}</h2>
            <ol className="flex">{props.type1}</ol>
            <ol className="flex">{props.type2}</ol>
            <ol className="flex">{props.type3}</ol>
            <ol className="flex">{props.type4}</ol>
            <ol className="flex">{props.type5}</ol>
            <ol className="flex">{props.type}</ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;