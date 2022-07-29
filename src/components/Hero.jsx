import React from "react";

const Hero = () => {
  return (
    <div className="flex mx-auto px-auto h-screen">
      <div className="flex flex-col w-1/2 ml-20 justify-center">
        <h1 className="text-6xl text-primary font-bold">Cook ur favs food!</h1>
        <h1 className="text-2xl mt-3 text-slate-900">
          We serve best recipes for you...
        </h1>
        <div className="flex mt-5">
          <button className="text-xl bg-tertiary rounded-3xl px-4 py-2 mr-3 text-slate-800 hover:bg-primary hover:text-slate-100">
            Get started
          </button>
          <button className="text-xl bg-tertiary rounded-3xl px-4 py-2 text-slate-800 hover:bg-primary hover:text-slate-100">
            More...
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center mr-6">
        <img
          src={require("../assets/hero1.png")}
          alt="book recipe"
          className="p-5 h-3/4"
        />
      </div>
    </div>
  );
};

export default Hero;
