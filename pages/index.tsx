"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp } from "lucide-react";
import type { GetStaticProps } from "next";
import { benefits, featuredProducts, additionalProducts } from "@/data";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Instagram from "@/components/sections/Instagram";
import Products from "@/components/sections/Products";
import Benefits from "@/components/sections/Benefits";
import Customization from "@/components/sections/Customization";
import Herbs from "@/components/sections/Herbs";
import Colors from "@/components/sections/Colors";
import Footer from "@/components/sections/Footer";

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
      <Benefits benefits={benefits} />

      {/* Color Meanings Section */}
      <Colors />

      {/* Herbs Section */}
      <Herbs />

      {/* Personalization Section */}
      <Customization openWhatsApp={openWhatsApp} />

      {/* Instagram Section with Static Data */}
      <Instagram instagramPosts={instagramPosts} />

      {/* Footer */}
      <Footer openWhatsApp={openWhatsApp} />

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
  };
};
