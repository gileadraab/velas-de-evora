"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Heart,
  Clock,
  Gift,
  Leaf,
  ChevronDown,
  ArrowUp,
  Menu,
  X,
  RefreshCw,
} from "lucide-react";
import type { GetStaticProps } from "next";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Instagram from "@/components/sections/Instagram";
import Products from "@/components/sections/Products";

// Instagram post type definition
interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
}

interface HomePageProps {
  instagramPosts?: InstagramPost[];
  instagramError?: string | null;
}

export default function VelasDeEvora({
  instagramPosts = [],
  instagramError = null,
}: HomePageProps) {
  // State management for UI interactions
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Scroll event handler for navigation and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      // Update active navigation section based on scroll position
      const sections = [
        "home",
        "products",
        "benefits",
        "colors",
        "herbs",
        "personalize",
        "instagram",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation utilities
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp integration
  const openWhatsApp = (
    message = "Olá! Gostaria de saber mais sobre as velas de Evora.",
  ) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/554185021635?text=${encodedMessage}`, "_blank");
  };

  // Navigation menu items
  const navigationItems = [
    { id: "home", label: "Início" },
    { id: "products", label: "Produtos" },
    { id: "benefits", label: "Benefícios" },
    { id: "colors", label: "Cores" },
    { id: "herbs", label: "Ervas" },
    { id: "personalize", label: "Personalizar" },
    { id: "instagram", label: "Instagram" },
  ];

  // Product catalog data
  const featuredProducts = [
    {
      name: "Banimento",
      benefit: "Limpa energias pesadas e oferece proteção",
      herbs: "Endro, Arruda",
      colors: ["#FFFFFF", "#000000", "#8B4513"],
      image: "images/banimento.png",
    },
    {
      name: "Conectar",
      benefit: "Clareia a mente e melhora a concentração",
      herbs: "Pitanga, Tomilho",
      colors: ["#FFFFFF", "#DDA0DD", "#FFFF00", "#0000FF"],
      image: "images/conectar.png",
    },
    {
      name: "Paixão",
      benefit: "Desperta o coração e atrai o amor",
      herbs: "Lavanda, Artemísia",
      colors: ["#FFFFFF", "#FFC0CB"],
      image: "images/paixao.png",
    },
  ];

  const additionalProducts = [
    {
      name: "Esperança",
      benefit: "Abre caminhos e traz esperança",
      herbs: "Calêndula, Dente-de-Leão",
      colors: ["#FFFFFF", "#FFFF00", "#008000"],
      image: "/images/esperanca.png",
    },
    {
      name: "Restaurar",
      benefit: "Acalma a alma e restaura energias",
      herbs: "Cipreste, Pinheiro",
      colors: ["#FFFFFF", "#0000FF"],
      image: "/images/restaurar.png",
    },
    {
      name: "Purificar",
      benefit: "Renova energias e purifica ambientes",
      herbs: "Hibisco, Sal Vulcânico",
      colors: ["#FFFFFF", "#DDA0DD", "#000000"],
      image: "/images/purificar.png",
    },
  ];

  // Educational content about herbs
  const herbs = [
    {
      name: "Lavanda",
      description: "Atrai amor, cura e harmonia. Potencializa rituais diversos",
    },
    {
      name: "Alecrim",
      description:
        "Proteção, purificação e cura. Equilibra energias física e mental",
    },
    {
      name: "Arruda",
      description:
        "Elimina larvas astrais e energias densas. Purifica ambientes",
    },
    {
      name: "Endro",
      description: "Proteção contra encantamentos. Atrai sorte e amor",
    },
    {
      name: "Pitanga",
      description: "Energia movimentadora. Elimina comodismo e estagnação",
    },
    {
      name: "Tomilho",
      description:
        "Atrai amor e saúde. Melhora clareza mental e facilita diálogos",
    },
    {
      name: "Artemísia",
      description: "Desenvolve intuição. Conexão com o sagrado feminino",
    },
    {
      name: "Cipreste",
      description: "Combate tristeza e mágoas. Ajuda no reequilíbrio mental",
    },
    {
      name: "Hibisco",
      description: "Purifica coração, mente e alma. Elimina vícios e manias",
    },
    {
      name: "Calêndula",
      description:
        "Flor da riqueza. Traz proteção, sorte financeira e prosperidade",
    },
    {
      name: "Dente de Leão",
      description: "Representa esperança e liberdade. Abertura de caminhos",
    },
    {
      name: "Sal Vulcânico",
      description: "Combate energias densas. Elimina pensamentos negativos",
    },
  ];

  // Benefits/features of the candles
  const benefits = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Ingredientes Naturais",
      description: "Ervas selecionadas e cera de soja pura",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24h de Queima",
      description: "Longa duração para momentos especiais",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cromoterapia",
      description: "Cores que harmonizam corpo e mente",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Presentes Únicos",
      description: "Perfeitas para ocasiões especiais",
    },
  ];

  // Color meanings for chromotherapy
  const colorMeanings = [
    {
      color: "bg-purple-400",
      name: "Roxo",
      meaning: "Serenidade",
      description: "Promove relaxamento e paz interior",
    },
    {
      color: "bg-green-400",
      name: "Verde",
      meaning: "Energia",
      description: "Estimula vitalidade e renovação",
    },
    {
      color: "bg-red-400",
      name: "Vermelho",
      meaning: "Paixão",
      description: "Desperta amor e força interior",
    },
    {
      color: "bg-blue-400",
      name: "Azul",
      meaning: "Tranquilidade",
      description: "Acalma a mente e promove clareza",
    },
    {
      color: "bg-yellow-400",
      name: "Amarelo",
      meaning: "Alegria",
      description: "Estimula criatividade e otimismo",
    },
    {
      color: "bg-stone-100 border-2 border-stone-300",
      name: "Branco",
      meaning: "Purificação",
      description: "Limpa energias e promove recomeços",
    },
    {
      color: "bg-orange-400",
      name: "Laranja",
      meaning: "Criatividade",
      description: "Estimula energia criativa e entusiasmo",
    },
    {
      color: "bg-amber-800",
      name: "Marrom",
      meaning: "Estabilidade",
      description: "Promove conexão com a terra e estabilidade",
    },
    {
      color: "bg-black",
      name: "Preto",
      meaning: "Proteção",
      description: "Absorve energias negativas e oferece proteção",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Fixed Navigation Header */}
      <Nav
        navigationItems={navigationItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        openWhatsApp={openWhatsApp}
      />

      {/* Hero Section */}
      <Hero onCta={() => scrollToSection("products")} />

      {/* Products Section */}
      <Products
        featuredProducts={featuredProducts}
        additionalProducts={additionalProducts}
        openWhatsApp={openWhatsApp}
      />

      {/* Benefits Section */}
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

      {/* Color Meanings Section */}
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
              Cada cor possui uma energia única que pode transformar seu
              ambiente
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {colorMeanings.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 sm:p-8 border border-stone-200 hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`w-8 h-8 ${item.color} rounded-full mb-4`}
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

      {/* Herbs Section */}
      <section id="herbs" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-800 mb-4 sm:mb-6 font-light">
              Propriedades das
              <span className="block text-stone-700 font-script text-4xl sm:text-5xl md:text-6xl font-normal">
                Ervas
              </span>
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-light">
              Cada erva em nossas velas foi cuidadosamente selecionada por seus
              benefícios específicos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {herbs.map((herb, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 sm:p-8 border border-stone-200 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-lg sm:text-xl font-serif text-stone-800 mb-3 font-light capitalize">
                  {herb.name}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  {herb.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Section */}
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

      {/* Instagram Section with Static Data */}
      <Instagram instagramPosts={instagramPosts} />

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-200 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Footer Logo */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 text-stone-200">
                <svg
                  viewBox="0 0 2666.6667 2666.6667"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(0.13333333,0,0,-0.13333333,0,2666.6667)">
                    <path
                      d="m 6491.09,3893.2 v 8133.1"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="m 12708.9,9869.8 v 2156.5"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="m 6491.08,3893.2 c 0,-268.2 993.4,-493.5 2337,-556.9"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="m 8460.39,12561 c -1153.18,-83.9 -1969.3,-291.8 -1969.3,-534.7 0,-258 919.81,-476.1 2186.25,-548.8 584.69,-34.1 1251.25,-34.6 1845.36,0 1266.4,72.7 2186.2,290.8 2186.2,548.8 0,242.9 -816.1,450.8 -1969.5,534.7"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="m 9599.93,12146 v 1075.6"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="m 9539.71,13221.6 c 562.29,0 1168.69,561.9 1168.59,1154.6 6.9,1251.5 -1168.59,2305.4 -1168.59,2305.4 -2.86,-7.3 15.4,-792.5 -625.35,-1346.9 -327.72,-283.5 -491.03,-720.6 -396.1,-1150.5 114.81,-520 499.57,-962.6 1021.45,-962.6 z"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="m 13711.7,5798 c 30.5,192.5 46.4,391.2 46.4,594.4 0,1034.2 -411.8,1952.8 -1049.3,2531.9 -637.4,-579.4 -1049.1,-1497.7 -1049.1,-2531.9 0,-203.2 15.9,-401.9 46.4,-594.4"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="m 15805.6,6451.6 c 122.3,335.9 176.6,681 160.7,1011.9 -547.5,26.3 -1133.8,-139.6 -1653.4,-488"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="m 11104.9,6975.5 c -519.6,348.4 -1105.85,514.3 -1653.44,488 -15.89,-330.9 38.42,-676 160.79,-1011.9"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="m 10688.6,5535.6 c 971.7,-353.7 1693.9,-1054.6 2020.3,-1851.7 -762.2,-400.9 -1766.2,-473.7 -2737.97,-120 -971.72,353.6 -1694.06,1054.8 -2020.26,1851.9 762.4,400.8 1766.2,473.5 2737.93,119.8 z"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M 14729.2,5535.6 C 13757.5,5181.9 13035.3,4481 12708.9,3683.9 c 762.2,-400.9 1766.3,-473.7 2738,-120 971.7,353.6 1694.1,1054.8 2020.3,1851.9 -762.4,400.8 -1766.2,473.5 -2738,119.8 z"
                      stroke="currentColor"
                      strokeWidth="400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </g>
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-stone-200 font-light px-[29px] my-[-10px]">
                Velas de
                <span className="block text-stone-300 font-script text-3xl sm:text-4xl font-normal">
                  Evora
                </span>
              </h2>
            </div>
          </div>

          {/* Footer Message */}
          <p className="text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Feitas com amor para aquecer seu lar e sua alma
          </p>

          {/* Footer Contact Button */}
          <div className="flex justify-center items-center mb-8 sm:mb-12">
            <Button
              onClick={() =>
                openWhatsApp(
                  "Olá! Gostaria de conhecer mais sobre as Velas de Evora.",
                )
              }
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Copyright */}
          <div className="border-t border-stone-700 pt-6 sm:pt-8">
            <p className="text-stone-400 font-light text-sm sm:text-base">
              © {new Date().getFullYear()} Velas de Evora. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          className="fixed bottom-6 left-6 bg-white border-stone-300 text-stone-700 hover:bg-stone-50 rounded-full p-3 shadow-lg z-50 transition-all duration-300 hover:scale-110"
          size="sm"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}

// This function runs at build time to fetch Instagram data
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  // Use server-side environment variables (no NEXT_PUBLIC prefix)
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  let instagramPosts: InstagramPost[] = [];
  let instagramError: string | null = null;

  if (!accessToken || !userId) {
    console.warn("Instagram credentials not found. Building with fallback.");
    instagramError = "Instagram integration not configured";
  } else {
    try {
      console.log("Fetching Instagram posts at build time...");

      const response = await fetch(
        `https://graph.facebook.com/v19.0/${userId}/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&limit=8&access_token=${accessToken}`,
      );

      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || "Instagram API error");
      }

      // Filter for images, videos, and carousels, take first 8
      instagramPosts = (data.data || [])
        .filter(
          (post: InstagramPost) =>
            post.media_type === "IMAGE" ||
            post.media_type === "VIDEO" ||
            post.media_type === "CAROUSEL_ALBUM",
        )
        .slice(0, 8);

      console.log(
        `✅ Successfully fetched ${instagramPosts.length} Instagram posts at build time`,
      );
    } catch (error) {
      console.error("❌ Failed to fetch Instagram posts at build time:", error);
      instagramError =
        error instanceof Error
          ? error.message
          : "Failed to load Instagram posts";
    }
  }

  return {
    props: {
      instagramPosts,
      instagramError,
    },
    // Revalidate every hour (3600 seconds) - you can adjust this
  };
};
