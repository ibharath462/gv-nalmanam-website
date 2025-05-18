"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Brand Story", href: "/brand-story" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Nalmanam Masala - Home"
            >
              <div className="relative h-10 md:h-12 flex items-center">
                <span className="text-2xl md:text-3xl font-bold font-serif tracking-tight text-amber-800">
                  NALMANAM
                </span>
                <span className="absolute -bottom-1 left-0 text-xs md:text-sm text-amber-600 font-medium">
                  Premium Masala Products
                </span>
              </div>
            </Link>

            <button
              className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X
                  size={24}
                  className="text-amber-800 transition-transform duration-500 rotate-90"
                />
              ) : (
                <Menu
                  size={24}
                  className="text-amber-800 transition-transform duration-500"
                />
              )}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-amber-800 font-medium transition-all duration-300 
                  hover:scale-105 relative inline-flex items-center group px-2 font-serif"
                >
                  {item.name}
                  {/* Animated underline effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              <a
                href="https://wa.me/918989191965"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-amber-700 to-amber-500 text-white px-4 py-2 rounded-lg 
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                active:scale-95 flex items-center whitespace-nowrap font-medium"
                aria-label="Contact us on WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            } pb-4 border-t mt-3 space-y-4`}
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-800 hover:text-amber-800 font-medium
                transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-2">
              <a
                href="https://wa.me/918989191965"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-gradient-to-r from-amber-700 to-amber-500 text-white px-6 py-2 rounded-lg 
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                active:scale-95 text-center font-medium"
                aria-label="Contact us on WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 inline-block mr-2"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16 md:h-20" />
    </div>
  );
};

export default Header;
