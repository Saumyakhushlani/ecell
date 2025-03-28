import React from 'react';
import './Animation.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='bg-[#1E5AFA]'>

      <div className='flex flex-col items-center justify-center gap-6 font-semibold absolute left-4 top-[75%]'>
        <FaFacebookF className="text-white text-2xl cursor-pointer" />
        <FaInstagram className="text-white text-xl cursor-pointer" />
        <FaTwitter className="text-white text-xl cursor-pointer" />
        <FaLinkedinIn className="text-white text-xl cursor-pointer" />
      </div>

      <div className="relative w-full flex flex-col items-center text-center pt-6 px-5  overflow-hidden ani2">
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
    </div>
  );
};

export default Hero;
