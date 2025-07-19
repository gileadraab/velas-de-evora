"use client";

import { Button } from "@/components/ui/button";
import { Instagram as InstagramIcon } from "lucide-react";
import Image from "next/image";

type InstagramProps = {
  instagramPosts: Array<{
    id: string;
    media_url: string;
    media_type: string;
    thumbnail_url?: string;
    permalink: string;
  }>;
};

export default function Instagram({ instagramPosts }: InstagramProps) {
  const instagramError = !instagramPosts || instagramPosts.length === 0;

  return (
    <section id="instagram" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-800 mb-4 sm:mb-6 font-light">
            Siga nossa
            <span className="block text-stone-700 font-script text-4xl sm:text-5xl md:text-6xl font-normal">
              Jornada
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mb-6 sm:mb-8 font-light">
            @velasdeevora
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {instagramError || instagramPosts.length === 0
            ? // Fallback - Instagram icon placeholders
              Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-square relative overflow-hidden group cursor-pointer rounded-lg bg-stone-200 flex items-center justify-center"
                >
                  <InstagramIcon className="w-12 h-12 text-stone-400" />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
                </div>
              ))
            : // Real Instagram posts (fetched at build time)
              instagramPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="aspect-square relative overflow-hidden group cursor-pointer rounded-lg"
                >
                  <Image
                    src={
                      post.media_type === "VIDEO"
                        ? post.thumbnail_url || post.media_url
                        : post.media_type === "CAROUSEL_ALBUM"
                          ? post.media_url
                          : post.media_url
                    }
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to Instagram icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-stone-200 flex items-center justify-center">
                            <svg class="w-12 h-12 text-stone-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => window.open(post.permalink, "_blank")}
                  >
                    <InstagramIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
        </div>

        {/* Error Message */}
        {instagramError && (
          <div className="text-center mb-8">
            <p className="text-stone-500 text-sm">
              Instagram posts will be updated when the site is rebuilt.
            </p>
          </div>
        )}

        {/* Instagram Follow Button */}
        <div className="text-center">
          <Button
            onClick={() =>
              window.open("https://instagram.com/velasdeevora", "_blank")
            }
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            size="lg"
          >
            <InstagramIcon className="w-5 h-5 mr-2" />
            Seguir no Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
