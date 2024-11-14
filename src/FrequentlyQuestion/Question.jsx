// src/components/Accordion.js
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; 

const questions = [
  {
    question: "Whats the difference between a deep clean and a Regular Clean?",
    answer:
      "A deep clean includes more detailed cleaning of areas that aren't covered in a regular clean, such as inside appliances, baseboards, and other hard-to-reach spots."
  },
  {
    question: "How do I update billing?",
    answer:
      "To update your billing, please log in to your account, navigate to the billing section, and follow the steps to change your payment details."
  },
  {
    question: "What day is my clean?",
    answer: "Your cleaning day depends on your schedule. You can check this in your account settings."
  },
  {
    question: "Will the same cleaner come everytime?",
    answer:
      "We try our best to send the same cleaner for consistency, but this may vary due to availability."
  },
  {
    question: "What areas do you service?",
    answer:
      "We service a wide range of areas. Please enter your zip code on our service page to check if we serve your location."
  }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="flex justify-center mt-16">
    <div className='h-[2px] w-[220px] bg-black'></div>
    </div>
    <div className="max-w-4xl mx-auto py-2">
      <h2 className="text-3xl font-bold text-center mb-6">Got a Few Questions?</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="flex justify-between w-full py-1 text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {/* Conditional class: Gray when collapsed, Black when expanded */}
              <span className={`font-semibold text-xl ${activeIndex === index ? "text-black" : "text-gray-500"}`}>
                Q: {item.question}
              </span>
              <span>
                {activeIndex === index ? (
                  <FiChevronUp size={24} />
                ) : (
                  <FiChevronDown size={24} /> 
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="pb-4 text-black bg-[#F3F3F3] p-2 text-sm">
                <p>A: {item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Accordion;
