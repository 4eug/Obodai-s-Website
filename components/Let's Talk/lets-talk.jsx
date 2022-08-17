import React from "react";

const LetsTalk = () => {
  return (
      <div className="p-4 md:p-1 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-2 md:m-8">
          <div className="flex flex-col justify-center md:items-start w-full">
            <h1 className="text-4xl md:text-4xl font-bold ">Let’s talk about you</h1>
            <div className="mt-2 text-2xl">
            Get in touch
            </div>
          </div>
        </div>
      </div>
  );
};

export default LetsTalk;
