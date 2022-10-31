/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/future/image'

function WorkCard(props) {
  const capablityType = [
    {
      type1:"/Creative Strategy",
      type2:"/Messaging",
      type3:"/Identity Design",
      type4:"/Packaging",
      type5:"/Communication Design",
      id:0
    },
    {
      type1:"/Brand Discovery",
      type2:"/Identity Design",
      type3:"/Creative Strategy",
      id:1
    },
  ]
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
        <div className="w-full flex items-center">
          <div>
            <h2 className="mt-5 font-semibold text-2xl">{props.title}</h2>
            <p className="mt-1 md:w-[513px] w-[321px] font-normal text-lg">{props.description}</p>
            <h2 className="mt-5 text-xl font-semibold">Capabilities</h2>
            {/* <ol className="flex">{props.type}</ol> */}
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
      </div>
    </div>
  );
}

export default WorkCard;