"use client"
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import './FAQ.css'

const faqs = [
  { question: "Chamber reached do he nothing be?", answer: "Detailed answer about the chamber reaching nothing." },
  { question: "Stuff sight equal of my woody?", answer: "Our asked sex point her she seems. New plenty she horse parish design you. Stuff sight equal of my woody." },
  { question: "At by pleasure of children be?", answer: "Yes, children enjoy various pleasures including games and learning." },
  { question: "Amounted repeated as believed in confined?", answer: "Repeated actions contribute to beliefs in confined spaces." },
  { question: "In am do giving to afford parish settle easily garret?", answer: "Settling in a parish can be done with proper planning and affordability." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-5 pt-16 md:pb-16">
      
      <h2 className="md:text-6xl text-4xl font-bold text-[#313131] text-center">FAQ’s</h2>

      
      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              className="w-full flex justify-between items-center px-4 py-2 text-lg font-medium text-gray-900 text-left"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FaMinus className="text-gray-600" /> : <FaPlus className="text-gray-600" />}
            </button>

            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
