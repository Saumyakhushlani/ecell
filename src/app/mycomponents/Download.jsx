import React from 'react';

const Download = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      {/* Left Content */}
      <div className="max-w-md">
        <h2 className="text-4xl font-bold text-gray-900">Download App</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believes ferrars besides cottage.
        </p>
        <div className="mt-6 flex gap-4">
          <img src="/adl.png" alt="App Store" className="w-[150px]" />
          <img src="/gdl.png" alt="Google Play" className="w-[150px]" />
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-20 md:mt-0 md:ml-16">
        <img
          src="/subscribe_image.png"
          alt="Phone"
          className="w-[80vw]  md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] h-auto drop-shadow-2xl scale-250 md:scale-200 object-contain"
        />
      </div>
    </section>
  );
};

export default Download;
