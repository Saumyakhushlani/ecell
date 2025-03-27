import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col items-center text-center pt-6 px-5 bg-[#1E5AFA] overflow-hidden">
      <h1 className="text-white font-extrabold max-w-[800px] text-4xl sm:text-5xl lg:text-6xl leading-tight">
        Smart Home Application
      </h1>
      <h2 className="text-white text-base sm:text-xl lg:text-2xl max-w-[1000px] mt-3 sm:mt-8 leading-relaxed">
        Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
      </h2>
      <div className="relative w-full max-w-[1000px]  flex justify-center mt-12 md:mt-4">
        <img src="/hero-phones.png" alt="Hero Phones" className="w-[90%] max-w-[900px] drop-shadow-2xl md:scale-100 scale-140" />
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-8 items-center md:mb-6 mb-8 mt-6 md:mt-0">
        <img src="/adl.png" alt="" />
        <img src="/gdl.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
