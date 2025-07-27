"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Leaf } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import { featuredProducts, additionalProducts } from "@/data";

interface Product {
  name: string;
  image: string;
  benefit: string;
  colors: string[];
  herbs: string;
}

interface ProductsProps {
  featuredProducts: Product[];
  additionalProducts: Product[];
}

export default function Products() {
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <section id="products" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-800 mb-4 sm:mb-6 font-light">
            Cada vela, uma intenção
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Descubra nossa coleção de velas artesanais, cada uma criada com
            propósito e energia específica
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Featured Products */}
          {featuredProducts.map((product, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-light">
                  {product.name}
                </h3>
                <p className="text-stone-600 font-light">{product.benefit}</p>
                <div className="flex gap-2">
                  {product.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-4 h-4 rounded-full border border-stone-400"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <Badge
                  variant="outline"
                  className="text-stone-600 border-stone-300 bg-transparent font-light"
                >
                  <Leaf className="w-3 h-3 mr-1" />
                  {product.herbs}
                </Badge>
                <Button
                  onClick={() =>
                    openWhatsApp(
                      `Olá! Gostaria de saber mais sobre a vela ${product.name}.`,
                    )
                  }
                  className="w-full bg-stone-800 hover:bg-stone-900 text-white py-2 font-medium transition-all duration-200 hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Consultar
                </Button>
              </div>
            </div>
          ))}

          {/* Additional Products (shown when expanded) */}
          {showAllProducts &&
            additionalProducts.map((product, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-serif text-stone-800 font-light">
                    {product.name}
                  </h3>
                  <p className="text-stone-600 font-light">{product.benefit}</p>
                  <div className="flex gap-2">
                    {product.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-4 h-4 rounded-full border border-stone-400"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-stone-600 border-stone-300 bg-transparent font-light"
                  >
                    <Leaf className="w-3 h-3 mr-1" />
                    {product.herbs}
                  </Badge>
                  <Button
                    onClick={() =>
                      openWhatsApp(
                        `Olá! Gostaria de saber mais sobre a vela ${product.name}.`,
                      )
                    }
                    className="w-full bg-stone-800 hover:bg-stone-900 text-white py-2 font-medium transition-all duration-200 hover:shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar
                  </Button>
                </div>
              </div>
            ))}
        </div>

        {/* Show More/Less Toggle */}
        <div className="text-center mt-12 sm:mt-16">
          <Button
            onClick={() => setShowAllProducts(!showAllProducts)}
            className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            size="lg"
          >
            {showAllProducts ? "Ver Menos" : "Ver Toda Coleção"}
          </Button>
        </div>
      </div>
    </section>
  );
}
