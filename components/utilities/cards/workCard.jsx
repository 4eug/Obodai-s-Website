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
        <div className="w-full flex items-center">
          <div>
            <h2 className="mt-5 font-semibold text-2xl">{props.title}- <span className="mt-5 font-normal text-lg">{props.description}</span></h2>
            <h2 className="mt-5 text-xl">{props.type}</h2>
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