import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col items-center text-center pt-16 px-5 bg-[#1E5AFA]">
      <h1 className="text-white font-extrabold max-w-[700px] text-4xl sm:text-5xl lg:text-6xl leading-tight">
        Smart Home Application
      </h1>
      <h2 className="text-white text-base sm:text-xl lg:text-2xl max-w-[600px] mt-6 sm:mt-8 leading-relaxed">
        Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
      </h2>
      <div className="relative w-full max-w-[1000px] mt-12 flex justify-center">
        <img src="/hero-phones.png" alt="Hero Phones" className="w-full max-w-[900px] drop-shadow-2xl" />
      </div>
    </div>
  );
};

export default Hero;
