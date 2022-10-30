import React from "react";

const LetsTalk = () => {
  return (
      <div className="p-4 md:p-1 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-2 md:m-8">
          <div className="flex flex-col justify-center md:items-start w-full">
            <h1 className="text-[45px] leading-tight md:text-[58px] font-bold ">Let’s talk <br className="md:hidden" /> about you</h1>

            <a href="" className="mt-1">
            <span className="text-[40px] md:text-[45px] font-light">Say hello</span>

            <svg width="72" height="24" viewBox="0 0 72 24" className="inline-block pb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807611 59.9792 0.807611 59.3934 1.3934C58.8076 1.97919 58.8076 2.92893 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM0 13.5H70V10.5H0V13.5Z" fill="black"/>
        </svg>
  
            </a>

          </div>
        </div>
      </div>
  );
};

export default LetsTalk;
