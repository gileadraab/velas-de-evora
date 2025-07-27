"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";

export default function Customization() {
  return (
    <section
      id="personalize"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-800 mb-4 sm:mb-6 font-light">
          Crie a sua
          <span className="block text-stone-700 font-script text-4xl sm:text-5xl md:text-6xl font-normal">
            Magia
          </span>
        </h2>
        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-light mb-8 sm:mb-12">
          Escolha duas ervas, uma cor e deixe a magia acontecer
        </p>
        <Button
          onClick={() =>
            openWhatsApp(
              "Olá! Gostaria de criar uma vela personalizada. Podem me ajudar?",
            )
          }
          className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
          size="lg"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Entre em contato
        </Button>
      </div>
    </section>
  );
}
