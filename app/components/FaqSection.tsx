"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { MOCKUP_DATA } from "../lib/mockup-data";

const d = MOCKUP_DATA.home.faq;
const faqItems = d.items;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={[...d.heading]} />

        {/* Accordion */}
        <div className="mx-auto mt-8 max-w-[954px] md:mt-12">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-pink/30">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left md:py-5"
              >
                <span className="text-base text-dark md:text-xl">
                  {item.question}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`shrink-0 text-pink transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M3 5L7 9L11 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-4 text-sm leading-relaxed text-dark md:pb-5 md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center md:mt-14">
          <a
            href="#kontakt"
            className="btn-pink h-12 px-[34px] text-sm"
          >
            {d.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
