"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  ChevronUp,
  ChevronDown,
  MapPin,
  Mail,
  ShoppingBag,
} from "lucide-react";

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "+919566665153";
  const whatsappNumber = "+918989191965";
  const mapsUrl = "https://maps.app.goo.gl/HgEyiY2f3HXRMTqh9";

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDirections = () => {
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
      {/* Contact Buttons - Only visible when expanded */}
      <div
        className={`flex flex-col gap-3 md:gap-4 transition-all duration-300 origin-bottom-right 
        ${
          isExpanded
            ? "opacity-100 transform scale-100"
            : "opacity-0 transform scale-0 h-0 pointer-events-none"
        }`}
      >
        {/* Email Button */}
        <a
          href="mailto:nalmanamstore@gmail.com"
          className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 text-white rounded-full shadow-lg active:opacity-80 transition-all duration-300 hover:shadow-xl hover:scale-105 group relative md:hover:w-auto md:hover:px-8"
          style={{
            background: "linear-gradient(to right, #7a9d73, #6b8a66)",
            boxShadow: "0 10px 25px rgba(122, 157, 115, 0.2)",
          }}
          aria-label="Email us"
        >
          <Mail
            className="w-6 h-6 md:w-6 md:h-6"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />
          <span
            className="absolute left-16 text-base font-medium whitespace-nowrap text-white px-3 py-2 rounded-lg opacity-0 invisible -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 md:static md:bg-transparent md:p-0 md:text-inherit md:opacity-0 md:visible md:translate-x-0 md:max-w-0 md:overflow-hidden md:group-hover:max-w-xs md:group-hover:opacity-100 md:group-hover:ml-3"
            style={{ backgroundColor: "#7a9d73" }}
          >
            Email Us
          </span>
        </a>

        {/* Products Button */}
        <a
          href="/products"
          className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 text-white rounded-full shadow-lg active:opacity-80 transition-all duration-300 hover:shadow-xl hover:scale-105 group relative md:hover:w-auto md:hover:px-8"
          style={{
            background: "linear-gradient(to right, #8bb485, #7a9d73)",
            boxShadow: "0 10px 25px rgba(139, 180, 133, 0.2)",
          }}
          aria-label="Browse our products"
        >
          <ShoppingBag
            className="w-6 h-6 md:w-6 md:h-6"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />
          <span
            className="absolute left-16 text-base font-medium whitespace-nowrap text-white px-3 py-2 rounded-lg opacity-0 invisible -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 md:static md:bg-transparent md:p-0 md:text-inherit md:opacity-0 md:visible md:translate-x-0 md:max-w-0 md:overflow-hidden md:group-hover:max-w-xs md:group-hover:opacity-100 md:group-hover:ml-3"
            style={{ backgroundColor: "#8bb485" }}
          >
            Our Products
          </span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 bg-white ring-1 rounded-full shadow-lg active:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105 group relative md:hover:w-auto md:hover:px-8"
          style={{
            color: "#7a9d73",
            ringColor: "#CFE1CB",
            boxShadow: "0 10px 25px rgba(207, 225, 203, 0.5)",
          }}
          aria-label="Call us"
        >
          <Phone
            className="w-6 h-6 md:w-6 md:h-6"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />
          <span
            className="absolute left-16 text-base font-medium whitespace-nowrap bg-white px-3 py-2 rounded-lg opacity-0 invisible -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 md:static md:bg-transparent md:p-0 md:text-inherit md:opacity-0 md:visible md:translate-x-0 md:max-w-0 md:overflow-hidden md:group-hover:max-w-xs md:group-hover:opacity-100 md:group-hover:ml-3"
            style={{ color: "#7a9d73" }}
          >
            Call Now
          </span>
        </a>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/20 active:bg-[#128C7E] transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 group relative md:hover:w-auto md:hover:px-8"
          aria-label="Chat with us on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-6 md:h-6"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="absolute left-16 text-base font-medium whitespace-nowrap bg-[#25D366] text-white px-3 py-2 rounded-lg opacity-0 invisible -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 md:static md:bg-transparent md:p-0 md:text-inherit md:opacity-0 md:visible md:translate-x-0 md:max-w-0 md:overflow-hidden md:group-hover:max-w-xs md:group-hover:opacity-100 md:group-hover:ml-3">
            WhatsApp
          </span>
        </button>

        {/* Directions Button */}
        <button
          onClick={handleDirections}
          className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 text-white rounded-full shadow-lg active:opacity-80 transition-all duration-300 hover:shadow-xl hover:scale-105 group relative md:hover:w-auto md:hover:px-8"
          style={{
            backgroundColor: "#7a9d73",
            boxShadow: "0 10px 25px rgba(122, 157, 115, 0.2)",
          }}
          aria-label="Get directions to our location"
        >
          <MapPin
            className="w-6 h-6 md:w-6 md:h-6"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />
          <span
            className="absolute left-16 text-base font-medium whitespace-nowrap text-white px-3 py-2 rounded-lg opacity-0 invisible -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 md:static md:bg-transparent md:p-0 md:text-inherit md:opacity-0 md:visible md:translate-x-0 md:max-w-0 md:overflow-hidden md:group-hover:max-w-xs md:group-hover:opacity-100 md:group-hover:ml-3"
            style={{ backgroundColor: "#7a9d73" }}
          >
            Get Directions
          </span>
        </button>
      </div>

      {/* Toggle Button - Moved to bottom */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 text-white rounded-full shadow-lg active:opacity-80 transition-all duration-300 hover:shadow-xl hover:scale-105 ml-auto"
        style={{
          backgroundColor: "#7a9d73",
          boxShadow: "0 10px 25px rgba(122, 157, 115, 0.2)",
        }}
        aria-label={
          isExpanded ? "Collapse contact options" : "Expand contact options"
        }
      >
        {isExpanded ? (
          <ChevronDown className="w-6 h-6 md:w-6 md:h-6" />
        ) : (
          <ChevronUp className="w-6 h-6 md:w-6 md:h-6" />
        )}
      </button>

      {/* Add keyframes for the pulse animation */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingContact;
