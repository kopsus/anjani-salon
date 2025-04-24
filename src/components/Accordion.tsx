"use client";

import React from "react";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion = ({ title, answer }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);

  return (
    <div className="py-4 border-b">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full cursor-pointer"
      >
        <span className="text-xl text-[#464646] text-start">{title}</span>
        <div className="w-8 h-8 bg-slate-200 flex items-center justify-center rounded-full">
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
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
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#464646] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
