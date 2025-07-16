"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

type NavItem = { id: string; label: string };

type NavProps = {
  navigationItems: NavItem[];
  activeSection: string;
  scrollToSection: (id: string) => void;
  openWhatsApp: () => void;
};

export default function Nav({
  navigationItems,
  activeSection,
  scrollToSection,
  openWhatsApp,
}: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-stone-800 border-b-2 border-stone-800"
                      : "text-stone-600 hover:text-stone-800 hover:border-b-2 hover:border-stone-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => openWhatsApp()}
              className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-2 text-sm font-medium transition-all duration-200 hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-600 hover:text-stone-800 p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-stone-800 bg-stone-100"
                    : "text-stone-600 hover:text-stone-800 hover:bg-stone-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button
                onClick={() => openWhatsApp()}
                className="w-full bg-stone-800 hover:bg-stone-900 text-white py-2 text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contato
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
