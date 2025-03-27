import React from 'react';

const Testimonial = () => {
    const testimonials = [
        { img: "t1.png", name: "Joam Lee", role: "Writer" },
        { img: "t2.png", name: "Anna Smith", role: "Designer" },
        { img: "t3.png", name: "David Clark", role: "Developer" },
        { img: "t4.png", name: "Emma Brown", role: "Marketer" }
    ];

    return (
        <div id="testimonials" className="flex flex-col items-center md:mt-20 mt-10">
            <h2 className="md:text-6xl text-4xl font-bold text-[#313131] text-center">
                Testimonials
            </h2>
            <p className="text-lg mt-4 mb-12 leading-[140%] text-[#575757] text-center max-w-[700px] px-4">
                Wisdom new and valley answer. Contented it so is discourse recommend.
                Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
            </p>

            <ul className="flex flex-wrap justify-center gap-6 w-full px-4">
                {testimonials.map((testimonial, index) => (
                    <li key={index} className="bg-[#FAFAFA] border border-[#E7EBEE] p-5 md:w-[46%] rounded-lg flex flex-col">
                        <p className="text-[#5F7285] text-[1rem] leading-[160%] italic">
                            Our company, we do ongoing research with our target audience. 
                            This includes 30-45 minute phone interviews. It was difficult to 
                            conduct the interview, really listen, and ask good follow-up questions.
                        </p>
                        <div className="flex items-center mt-4">
                            <img src={`/${testimonial.img}`} className="w-12 h-12 rounded-full" alt={testimonial.name} />
                            <div className="ml-3">
                                <h5 className="text-[1rem] font-semibold">{testimonial.name}</h5>
                                <span className="text-[1rem] font-thin text-[#9C9EA3]">{testimonial.role}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testimonial;
