"use client";
import { ReactElement } from "react";
import { benefits } from "@/data";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-800 mb-4 sm:mb-6 font-light">
            Por que escolher
            <span className="block text-stone-700 font-script text-4xl sm:text-5xl md:text-6xl font-normal">
              nossas velas?
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-600 hover:bg-stone-300 transition-colors duration-200">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-stone-800 mb-3 font-light">
                {benefit.title}
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
