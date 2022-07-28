import React from "react";

const Hero = () => {
  return (
    <div className="flex mx-auto px-auto h-screen">
      <div className="flex flex-col w-1/2 ml-12 justify-center">
        <h1 className="text-5xl text-primary font-bold">
          Cook your favorite foods
        </h1>
        <h1 className="text-2xl mt-2">We serve best recipes for you</h1>
        <div className="flex mt-5">
          <button className="text-xl bg-tertiary rounded-3xl px-4 py-2 mr-3 text-slate-800">
            Get started
          </button>
          <button className="text-xl bg-tertiary rounded-3xl px-4 py-2 text-slate-800">
            More...
          </button>
        </div>
      </div>
      <div className="w-1/2 "></div>
    </div>
  );
};

export default Hero;
