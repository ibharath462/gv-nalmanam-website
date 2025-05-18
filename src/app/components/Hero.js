"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroContent = [
    {
      title: "Tradition in Every Spice",
      subtitle: "Premium Masala Products",
      description:
        "Experience the authentic flavors of NALMANAM - a cherished sub-brand of Sri Murughan Flour Mill India Pvt Ltd, bringing pure, preservative-free spices from farm to your kitchen since 1965.",
      cta: "Explore Products",
      ctaLink: "/products",
    },
    {
      title: "From Farm to Flavor",
      subtitle: "100% Pure & Natural",
      description:
        "Our masalas are procured from fresh farms of direct farmers and prepared using traditional home-made processes without added preservatives, artificial colors, or sulphur.",
      cta: "Our Story",
      ctaLink: "/brand-story",
    },
    {
      title: "Legacy of Quality",
      subtitle: "Sri Murughan Flour Mill",
      description:
        "As part of the respected Sri Murughan Flour Mill family, NALMANAM continues a generations-old commitment to quality, authenticity, and the rich culinary heritage of Tamil Nadu.",
      cta: "Contact Us",
      ctaLink: "/contact",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroContent.length]);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/art2.jpg')] opacity-5 bg-repeat"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-amber-50/50 to-transparent"></div>
      </div>

      {/* Floating spice elements */}
      <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-amber-500/10 animate-float-slow hidden md:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-amber-800/10 animate-float-delayed hidden md:block"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-red-600/10 animate-float-reverse hidden md:block"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            {heroContent.map((content, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 transform ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 absolute"
                }`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <h2 className="font-serif text-amber-700 text-sm md:text-base tracking-wider uppercase mb-2 animate-fadeIn">
                  {content.subtitle}
                </h2>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-serif leading-tight animate-slideUp">
                  {content.title}
                </h1>
                <p className="text-gray-700 text-base md:text-lg mb-6 max-w-lg animate-fadeIn delay-300">
                  {content.description}
                </p>
                <div className="flex flex-wrap gap-4 animate-fadeIn delay-500">
                  <Link
                    href={content.ctaLink}
                    className="bg-gradient-to-r from-amber-800 to-amber-600 text-white px-6 py-3 rounded-lg
                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                    active:scale-95 font-medium text-base inline-flex items-center"
                  >
                    {content.cta}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <a
                    href="https://wa.me/918989191965"
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-amber-700 text-amber-800 px-6 py-2.5 rounded-lg
                    hover:bg-amber-700 hover:text-white transform transition-all duration-300 
                    hover:scale-105 active:scale-95 font-medium text-base inline-flex items-center"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2 relative min-h-[300px] md:min-h-[450px]">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Product showcase display */}
              <div className="relative w-full max-w-md">
                {/* Main product image with glow */}
                <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 animate-float">
                  <div className="absolute w-full h-full rounded-full bg-amber-100/80 opacity-70 blur-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                      <Image
                        src="/images/sambar.jpg"
                        alt="Nalmanam Masala product"
                        fill
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Brand logo overlay */}
                <div className="absolute top-0 right-0 md:top-5 md:right-5 bg-white/90 rounded-lg p-3 shadow-md border border-amber-100 animate-fadeIn delay-700">
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-medium text-gray-500">
                      A brand of
                    </h3>
                    <p className="text-amber-800 font-bold font-serif">
                      Sri Murughan Flour Mill
                    </p>
                  </div>
                </div>

                {/* Quality badges */}
                <div className="absolute bottom-0 left-0 md:bottom-5 md:left-5 flex flex-col gap-2 animate-fadeIn delay-800">
                  <div className="bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-amber-800 border border-amber-100 shadow-sm flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    100% Natural
                  </div>
                  <div className="bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-amber-800 border border-amber-100 shadow-sm flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    No Preservatives
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-6 md:mt-10 space-x-2">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-amber-700 w-8" : "bg-amber-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Features highlight */}
      <div className="relative z-10 border-t border-amber-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-amber-50/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-serif text-amber-800 font-bold mb-1">
                100%
              </div>
              <div className="text-sm text-gray-700">Pure & Natural</div>
            </div>
            <div className="bg-amber-50/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-serif text-amber-800 font-bold mb-1">0%</div>
              <div className="text-sm text-gray-700">Artificial Colors</div>
            </div>
            <div className="bg-amber-50/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-serif text-amber-800 font-bold mb-1">0%</div>
              <div className="text-sm text-gray-700">Preservatives</div>
            </div>
            <div className="bg-amber-50/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-serif text-amber-800 font-bold mb-1">
                Since
              </div>
              <div className="text-sm text-gray-700">1965</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
