import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="py-3 px-2 text-lg w-full flex justify-between items-center text-slate-800 "
      >
        <span className="font-serif text-black text-wrap text-start ">{question}</span>
        <svg
          className="fill-steal-500 shrink-0 ml-8 "
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 "
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-lg font-serif rounded px-2 py-2 text-slate-500  ">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
