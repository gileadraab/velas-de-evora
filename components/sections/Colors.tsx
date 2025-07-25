"use client";
import { colorMeanings } from "@/data";

export default function Colors() {
  return (
    <section
      id="colors"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-800 mb-4 sm:mb-6 font-light">
            Significado das
            <span className="block text-stone-700 font-script text-4xl sm:text-5xl md:text-6xl font-normal">
              Cores
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Cada cor possui uma energia única que pode transformar seu ambiente
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {colorMeanings.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 border border-stone-200 hover:shadow-md transition-shadow duration-200"
            >
              <div
                className={`w-8 h-8 rounded-full mb-4 ${item.circleClass}`}
              ></div>
              <h3 className="text-lg sm:text-xl font-serif text-stone-800 mb-3 font-light">
                {item.name}
              </h3>
              <p className="text-stone-600 font-light font-medium">
                {item.meaning}
              </p>
              <p className="text-sm text-stone-500 mt-2 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
