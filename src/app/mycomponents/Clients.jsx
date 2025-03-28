import React from 'react'

const Clients = () => {
    const clientLogos = [
        "l1.png", "l2.png", "l3.png", "l4.png",
        "l5.png", "l6.png", "l7.png", "l8.png"
    ];

    return (
        <div id="clients" className="flex flex-col items-center md:mt-32 mt-6">
            <img src="/D2.png" alt="" className='absolute right-0 ' />
            <h2 className="md:text-6xl text-4xl font-bold text-[#313131] text-center">
                Our Clients
            </h2>
            <p className="text-lg mt-6 mb:mb-12 mb-4 text-[#575757] text-center max-w-[700px] px-3">
                Wisdom new and valley answer. Contented it so is discourse recommend.
                Man its upon him call mile. An pasture he himself believe ferrars
                besides cottage.
            </p>
            <ul className="flex flex-wrap justify-center gap-6 w-full">
                {clientLogos.map((logo, index) => (
                    <li key={index} className="flex justify-center items-center">
                        <a href="/">
                            <img src={`/${logo}`} className="md:w-[320px] w-[45vw]" alt={`Client ${index + 1}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Clients;
