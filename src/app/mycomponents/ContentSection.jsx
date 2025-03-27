import React from 'react';

const ContentSection = () => {
  const sections = [
    { img: "/115.png", title: "Smart Home’s Smart Services" },
    { img: "/315.png", title: "What app can do to your Appliances?", reverse: true },
    { img: "/2215.png", title: "Control Electric Appliances" }
  ];

  return (
    <div className="container mx-auto px-5 md:py-16 py-6 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="md:text-6xl text-4xl font-bold text-[#313131]">About us</h2>
      </div>

      {sections.map((section, index) => (
        <div 
          key={index} 
          className={`flex flex-col lg:flex-row ${section.reverse ? "lg:flex-row-reverse" : ""} items-center justify-center gap-4`}
        >
          <div className="relative w-full lg:w-1/2 flex justify-center">
            
            <div className="absolute w-[85%] h-[40%] bg-[#1E5AFA] rounded-lg -z-10 top-[35%]"></div>
            
            
            <img 
              src={section.img} 
              alt="App Preview" 
              className="md:w-[60%] w-[80%]  relative left-[-4vw] md:left-0 drop-shadow-2xl  h-auto scale-160 mb-4"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left px-6 md:text-center text-left">
            <h3 className="text-3xl font-semibold text-[#000F37]">{section.title}</h3>
            <p className="text-lg mt-4 text-[#575757] md:w-[30vw] ">
            Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
            </p>
            <button className="px-6 py-3 bg-[#000F37] text-white mt-6 rounded-md text-lg shadow-lg hover:bg-[#1E5AFA] transition mb-16">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
