"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/Floater";
import {
  ArrowRight,
  Award,
  Calendar,
  Users,
  Star,
  Leaf,
  Shield,
  ChevronDown,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandStory() {
  const timelineRef = useRef(null);
  const heroRef = useRef(null);
  const founderRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );

    // Timeline section animations
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        }
      );
    });

    // Values section animations
    const valueItems = document.querySelectorAll(".value-item");
    gsap.fromTo(
      valueItems,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 75%",
        },
      }
    );

    // Process section animations
    gsap.fromTo(
      ".process-item",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 70%",
        },
      }
    );

    // Parallax effect for background images
    gsap.to(".parallax-bg", {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Grandmother Illustration */}
        <section
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden text-white"
          style={{
            background: "linear-gradient(135deg, #7a9d73 0%, #6b8a66 100%)",
          }}
        >
          {/* Organic Background with Grandmother Cooking Illustration */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 bg-repeat parallax-bg"
              style={{ backgroundImage: 'url("/spice-pattern.png")' }}
            ></div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(122, 157, 115, 0.9), rgba(107, 138, 102, 0.8))",
              }}
            ></div>
            {/* Grandmother Cooking SVG Illustration */}
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
              <svg viewBox="0 0 1200 400" className="w-full h-auto opacity-20">
                {/* Kitchen Counter */}
                <rect
                  x="0"
                  y="320"
                  width="400"
                  height="80"
                  fill="#8B4513"
                  opacity="0.7"
                />
                {/* Grandmother Figure */}
                <g transform="translate(80, 180)">
                  {/* Body */}
                  <ellipse cx="50" cy="80" rx="35" ry="45" fill="#D2691E" />
                  {/* Head */}
                  <circle cx="50" cy="30" r="20" fill="#F4A460" />
                  {/* Hair */}
                  <path
                    d="M30 25 Q50 10 70 25 Q65 15 50 15 Q35 15 30 25"
                    fill="#C0C0C0"
                  />
                  {/* Arms */}
                  <ellipse
                    cx="30"
                    cy="60"
                    rx="8"
                    ry="25"
                    fill="#F4A460"
                    transform="rotate(-20 30 60)"
                  />
                  <ellipse
                    cx="70"
                    cy="60"
                    rx="8"
                    ry="25"
                    fill="#F4A460"
                    transform="rotate(20 70 60)"
                  />
                  {/* Hands holding spoon */}
                  <circle cx="25" cy="75" r="5" fill="#F4A460" />
                  <circle cx="75" cy="75" r="5" fill="#F4A460" />
                  <line
                    x1="20"
                    y1="75"
                    x2="10"
                    y2="85"
                    stroke="#8B4513"
                    strokeWidth="2"
                  />
                </g>
                {/* Cooking Pot */}
                <ellipse cx="200" cy="300" rx="30" ry="15" fill="#4A4A4A" />
                <rect x="170" y="285" width="60" height="20" fill="#4A4A4A" />
                {/* Steam */}
                <path
                  d="M190 280 Q185 270 190 260 Q195 250 190 240"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M200 280 Q205 270 200 260 Q195 250 200 240"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M210 280 Q215 270 210 260 Q205 250 210 240"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                {/* Spice Jars */}
                <rect
                  x="300"
                  y="290"
                  width="15"
                  height="25"
                  fill="#DEB887"
                  rx="2"
                />
                <rect
                  x="320"
                  y="285"
                  width="15"
                  height="30"
                  fill="#CD853F"
                  rx="2"
                />
                <rect
                  x="340"
                  y="292"
                  width="15"
                  height="23"
                  fill="#F4A460"
                  rx="2"
                />
                {/* Decorative Spices */}
                <circle cx="450" cy="300" r="3" fill="#FF6347" />
                <circle cx="460" cy="295" r="2" fill="#FFD700" />
                <circle cx="470" cy="302" r="2.5" fill="#32CD32" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-green-200 text-sm md:text-base uppercase tracking-widest mb-4 hero-content">
                Our Journey Since 1965
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 hero-content">
                Sri Murughan Flour Mill Legacy
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 hero-content"
                style={{ backgroundColor: "#CFE1CB" }}
              ></div>
              <p className="text-xl md:text-2xl text-green-100 mb-8 hero-content">
                A story of tradition, quality, and the pursuit of authentic
                flavors
              </p>
              <div className="hero-content">
                <a
                  href="#timeline"
                  className="inline-flex items-center text-green-200 hover:text-green-100 transition-colors"
                >
                  Explore Our Journey
                  <ChevronDown className="ml-2 animate-bounce" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <div className="relative h-80 w-full">
                      <Image
                        src="/images/pepper.jpg"
                        alt="Founder of Sri Murughan Flour Mill"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/0 flex items-end">
                      <div className="p-4">
                        <p className="text-green-200 text-sm">Founder</p>
                        <h4 className="text-white text-xl font-bold">
                          Sri M. Murughan
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-6">
                    A Heritage of Excellence
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Founded in 1965 by Sri M. Murughan, our journey began in the
                    small town of Namakkal, Tamil Nadu. What started as a modest
                    flour mill with a commitment to quality has evolved into a
                    trusted name in authentic Indian spices and masalas.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    For over five decades,{" "}
                    <strong>Sri Murughan Flour Mill India Pvt Ltd</strong> has
                    stayed true to its founding principles: sourcing the finest
                    ingredients directly from farmers, using traditional
                    processing methods, and delivering products that enhance the
                    rich culinary heritage of India.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                        style={{ backgroundColor: "#CFE1CB" }}
                      >
                        <Calendar className="text-green-800" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold">Est. 1965</p>
                        <p className="text-gray-500 text-sm">Proud Legacy</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                        style={{ backgroundColor: "#CFE1CB" }}
                      >
                        <Star className="text-green-800" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold">
                          Premium Quality
                        </p>
                        <p className="text-gray-500 text-sm">Trusted Brand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NALMANAM Brand Introduction with Tradition Illustration */}
        <section
          className="py-16 md:py-24 relative parallax-section"
          style={{ backgroundColor: "rgba(207, 225, 203, 0.3)" }}
        >
          <div
            className="absolute inset-0 opacity-5 bg-repeat parallax-bg"
            style={{ backgroundImage: 'url("/spice-pattern.png")' }}
          ></div>

          {/* Traditional Cooking Scene SVG */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
            <svg
              viewBox="0 0 800 600"
              className="absolute -top-10 -right-10 w-1/2 h-auto"
            >
              {/* Traditional Kitchen Setup */}
              <g transform="translate(100, 100)">
                {/* Stove/Chulha */}
                <ellipse cx="200" cy="300" rx="80" ry="40" fill="#8B4513" />
                <rect x="120" y="260" width="160" height="40" fill="#A0522D" />
                {/* Grinding Stone */}
                <ellipse cx="400" cy="280" rx="60" ry="30" fill="#696969" />
                <ellipse cx="400" cy="275" rx="50" ry="25" fill="#778899" />
                {/* Woman Grinding Spices */}
                <g transform="translate(350, 180)">
                  <ellipse cx="50" cy="60" rx="25" ry="35" fill="#DEB887" />
                  <circle cx="50" cy="25" r="15" fill="#F4A460" />
                  <path
                    d="M35 20 Q50 10 65 20 Q60 12 50 12 Q40 12 35 20"
                    fill="#2F4F4F"
                  />
                  <ellipse
                    cx="35"
                    cy="45"
                    rx="6"
                    ry="20"
                    fill="#F4A460"
                    transform="rotate(-30 35 45)"
                  />
                  <ellipse
                    cx="65"
                    cy="45"
                    rx="6"
                    ry="20"
                    fill="#F4A460"
                    transform="rotate(30 65 45)"
                  />
                </g>
                {/* Spice Piles */}
                <ellipse cx="500" cy="320" rx="15" ry="8" fill="#FF4500" />
                <ellipse cx="530" cy="315" rx="12" ry="6" fill="#FFD700" />
                <ellipse cx="560" cy="325" rx="10" ry="5" fill="#32CD32" />
                {/* Traditional Vessels */}
                <ellipse cx="50" cy="300" rx="25" ry="35" fill="#CD853F" />
                <ellipse cx="80" cy="295" rx="20" ry="30" fill="#DEB887" />
              </g>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-sm font-medium text-green-700 uppercase tracking-wider mb-2">
                    Our Premium Brand
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">
                    The Birth of NALMANAM
                  </h3>
                  <div
                    className="w-24 h-1 mb-6"
                    style={{ backgroundColor: "#7a9d73" }}
                  ></div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    In 1987, responding to growing demand for our quality
                    spices, we launched NALMANAM – our premium masala brand. The
                    name "NALMANAM" combines two Tamil words: "Nal" meaning
                    good/quality and "Manam" meaning aroma/fragrance – perfectly
                    capturing the essence of our products.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    NALMANAM represents our commitment to preserving traditional
                    flavors while meeting modern quality standards. Every
                    product under this brand undergoes rigorous quality checks
                    and is crafted using time-honored techniques that have been
                    refined over generations.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    From the rich red of our chilli powders to the vibrant
                    yellow of our turmeric, NALMANAM products stand out for
                    their authentic color, aroma, and flavor – with absolutely
                    no artificial additives or preservatives.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                      <Leaf className="text-green-700 mr-2" size={18} />
                      <span className="text-gray-800">100% Natural</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                      <Shield className="text-green-700 mr-2" size={18} />
                      <span className="text-gray-800">No Preservatives</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                      <Award className="text-green-700 mr-2" size={18} />
                      <span className="text-gray-800">Premium Quality</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <Image
                        src="/nalmanam-products.jpg"
                        alt="NALMANAM Masala Product Range"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full -z-10"
                    style={{ backgroundColor: "rgba(207, 225, 203, 0.5)" }}
                  ></div>
                  <div
                    className="absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10"
                    style={{ backgroundColor: "rgba(207, 225, 203, 0.7)" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section with South Indian Temple Architecture */}
        <section
          id="timeline"
          ref={timelineRef}
          className="py-16 md:py-24 bg-white relative"
        >
          {/* Tamil Heritage Illustration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
            <svg viewBox="0 0 1200 800" className="w-full h-auto">
              {/* Temple Silhouette */}
              <g transform="translate(50, 200)">
                {/* Main Temple Structure */}
                <rect x="100" y="300" width="200" height="200" fill="#8B7355" />
                {/* Temple Tower (Gopuram) */}
                <polygon
                  points="150,300 180,200 220,200 250,300"
                  fill="#A0522D"
                />
                {/* Multiple Tiers */}
                <rect x="160" y="220" width="80" height="30" fill="#8B7355" />
                <rect x="170" y="200" width="60" height="25" fill="#A0522D" />
                <rect x="180" y="180" width="40" height="20" fill="#8B7355" />
                {/* Decorative Elements */}
                <circle cx="200" cy="190" r="8" fill="#FFD700" />
                <rect x="195" y="185" width="10" height="2" fill="#FFD700" />
                <rect x="195" y="195" width="10" height="2" fill="#FFD700" />
              </g>
              {/* Palm Trees */}
              <g transform="translate(600, 300)">
                <line
                  x1="50"
                  y1="200"
                  x2="50"
                  y2="50"
                  stroke="#8B4513"
                  strokeWidth="4"
                />
                <ellipse
                  cx="50"
                  cy="45"
                  rx="15"
                  ry="8"
                  fill="#228B22"
                  transform="rotate(0 50 45)"
                />
                <ellipse
                  cx="50"
                  cy="45"
                  rx="15"
                  ry="8"
                  fill="#228B22"
                  transform="rotate(45 50 45)"
                />
                <ellipse
                  cx="50"
                  cy="45"
                  rx="15"
                  ry="8"
                  fill="#228B22"
                  transform="rotate(90 50 45)"
                />
                <ellipse
                  cx="50"
                  cy="45"
                  rx="15"
                  ry="8"
                  fill="#228B22"
                  transform="rotate(135 50 45)"
                />
              </g>
              {/* Traditional Cart */}
              <g transform="translate(300, 450)">
                <rect x="0" y="20" width="80" height="30" fill="#8B4513" />
                <circle cx="15" cy="60" r="12" fill="#654321" />
                <circle cx="65" cy="60" r="12" fill="#654321" />
                <line
                  x1="-20"
                  y1="35"
                  x2="0"
                  y2="35"
                  stroke="#8B4513"
                  strokeWidth="3"
                />
              </g>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium text-green-700 uppercase tracking-wider mb-2">
                Our Journey
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                Milestones Through The Years
              </h3>
              <div
                className="w-24 h-1 mx-auto mt-4"
                style={{ backgroundColor: "#7a9d73" }}
              ></div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block"
                style={{ backgroundColor: "#CFE1CB" }}
              ></div>

              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-0 relative">
                {/* 1965 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 timeline-item">
                  <div className="md:text-right md:pr-12 relative">
                    <div
                      className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
                      style={{
                        backgroundColor: "#7a9d73",
                        borderColor: "#CFE1CB",
                      }}
                    ></div>
                    <span className="inline-block text-green-800 text-2xl md:text-3xl font-bold font-serif mb-2">
                      1965
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Foundation
                    </h4>
                    <p className="text-gray-700">
                      Sri M. Murughan establishes a small flour mill in
                      Namakkal, Tamil Nadu, with a vision to provide
                      high-quality flour and spices to local communities.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>

                {/* 1973 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 timeline-item pt-12 md:pt-24">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12 relative">
                    <div
                      className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
                      style={{
                        backgroundColor: "#7a9d73",
                        borderColor: "#CFE1CB",
                      }}
                    ></div>
                    <span className="inline-block text-green-800 text-2xl md:text-3xl font-bold font-serif mb-2">
                      1973
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Expansion
                    </h4>
                    <p className="text-gray-700">
                      As demand grew, the business expanded its operations to
                      include a wider range of flour varieties and began
                      exploring spice processing, laying the groundwork for
                      future specialization.
                    </p>
                  </div>
                </div>

                {/* 1987 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 timeline-item pt-12 md:pt-24">
                  <div className="md:text-right md:pr-12 relative">
                    <div
                      className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
                      style={{
                        backgroundColor: "#7a9d73",
                        borderColor: "#CFE1CB",
                      }}
                    ></div>
                    <span className="inline-block text-green-800 text-2xl md:text-3xl font-bold font-serif mb-2">
                      1987
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      NALMANAM is Born
                    </h4>
                    <p className="text-gray-700">
                      The launch of NALMANAM as a premium masala brand, focusing
                      on authentic, traditional spice blends with no
                      preservatives or artificial additives. This marked a
                      significant milestone in the company's history.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>

                {/* 1995 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 timeline-item pt-12 md:pt-24">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12 relative">
                    <div
                      className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
                      style={{
                        backgroundColor: "#7a9d73",
                        borderColor: "#CFE1CB",
                      }}
                    ></div>
                    <span className="inline-block text-green-800 text-2xl md:text-3xl font-bold font-serif mb-2">
                      1995
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Modernization
                    </h4>
                    <p className="text-gray-700">
                      While maintaining traditional processing methods, the
                      company invested in modern quality control and testing
                      facilities to ensure consistency and safety across all
                      products.
                    </p>
                  </div>
                </div>

                {/* 2003 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 timeline-item pt-12 md:pt-24">
                  <div className="md:text-right md:pr-12 relative">
                    <div
                      className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
                      style={{
                        backgroundColor: "#7a9d73",
                        borderColor: "#CFE1CB",
                      }}
                    ></div>
                    <span className="inline-block text-green-800 text-2xl md:text-3xl font-bold font-serif mb-2">
                      2003
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Direct Farmer Networks
                    </h4>
                    <p className="text-gray-700">
                      Established direct partnerships with farmers across India
                      to ensure the highest quality raw materials and support
                      sustainable farming practices. This farm-to-package
                      approach became a cornerstone of our philosophy.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>

                {/* 2012 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 timeline-item pt-12 md:pt-24">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12 relative">
                    <div
                      className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
                      style={{
                        backgroundColor: "#7a9d73",
                        borderColor: "#CFE1CB",
                      }}
                    ></div>
                    <span className="inline-block text-green-800 text-2xl md:text-3xl font-bold font-serif mb-2">
                      2012
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Regional Expansion
                    </h4>
                    <p className="text-gray-700">
                      NALMANAM products gained popularity beyond Tamil Nadu,
                      expanding distribution across South India and establishing
                      a reputation for authentic, high-quality masalas.
                    </p>
                  </div>
                </div>

                {/* 2018 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 timeline-item pt-12 md:pt-24">
                  <div className="md:text-right md:pr-12 relative">
                    <div
                      className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
                      style={{
                        backgroundColor: "#7a9d73",
                        borderColor: "#CFE1CB",
                      }}
                    ></div>
                    <span className="inline-block text-green-800 text-2xl md:text-3xl font-bold font-serif mb-2">
                      2018
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Product Innovation
                    </h4>
                    <p className="text-gray-700">
                      While staying true to traditional recipes, we launched
                      specialized blends catering to regional tastes and modern
                      dietary preferences, expanding our product range to over
                      25 different masalas and spice blends.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>

                {/* Today */}
                <div className="md:grid md:grid-cols-2 md:gap-8 timeline-item pt-12 md:pt-24">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12 relative">
                    <div
                      className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 z-10"
                      style={{
                        backgroundColor: "#7a9d73",
                        borderColor: "#CFE1CB",
                      }}
                    ></div>
                    <span className="inline-block text-green-800 text-2xl md:text-3xl font-bold font-serif mb-2">
                      Today
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Continuing the Legacy
                    </h4>
                    <p className="text-gray-700">
                      Now led by the second generation of the Murughan family,
                      we continue to honor our heritage while embracing
                      sustainable practices and reaching new markets. Our
                      commitment to quality and tradition remains unwavering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section
          ref={valuesRef}
          className="py-16 md:py-24 text-white relative overflow-hidden"
          style={{ backgroundColor: "#7a9d73" }}
        >
          <div
            className="absolute inset-0 opacity-10 bg-repeat"
            style={{ backgroundImage: 'url("/spice-pattern.png")' }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium text-green-200 uppercase tracking-wider mb-2">
                What Drives Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold font-serif">
                Our Core Values
              </h3>
              <div
                className="w-24 h-1 mx-auto mt-4"
                style={{ backgroundColor: "#CFE1CB" }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Value 1 */}
              <div
                className="value-item p-8 rounded-lg border text-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(107, 138, 102, 0.5)",
                  borderColor: "rgba(207, 225, 203, 0.5)",
                  "&:hover": { backgroundColor: "rgba(107, 138, 102, 0.7)" },
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(207, 225, 203, 0.3)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-200 mb-3">
                  Quality Without Compromise
                </h4>
                <p className="text-green-100/80">
                  We refuse to cut corners. From sourcing to processing to
                  packaging, we maintain the highest standards at every step,
                  ensuring our products always exceed expectations.
                </p>
              </div>

              {/* Value 2 */}
              <div
                className="value-item p-8 rounded-lg border text-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(107, 138, 102, 0.5)",
                  borderColor: "rgba(207, 225, 203, 0.5)",
                  "&:hover": { backgroundColor: "rgba(107, 138, 102, 0.7)" },
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(207, 225, 203, 0.3)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 5v14h18V5H3zm2 4h14M7 15l2.5-4 3 3L15 9l2 2"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-200 mb-3">
                  Authentic Traditions
                </h4>
                <p className="text-green-100/80">
                  We honor age-old recipes and traditional processing methods
                  that have been passed down through generations, preserving the
                  authentic flavors of Indian cuisine.
                </p>
              </div>

              {/* Value 3 */}
              <div
                className="value-item p-8 rounded-lg border text-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(107, 138, 102, 0.5)",
                  borderColor: "rgba(207, 225, 203, 0.5)",
                  "&:hover": { backgroundColor: "rgba(107, 138, 102, 0.7)" },
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(207, 225, 203, 0.3)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3 8 13l8 10-4-10-8-10z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-200 mb-3">
                  Natural Purity
                </h4>
                <p className="text-green-100/80">
                  We believe in the power of nature. Our products are 100%
                  natural, free from preservatives, artificial colors, and
                  chemicals, allowing the true essence of each ingredient to
                  shine.
                </p>
              </div>

              {/* Value 4 */}
              <div
                className="value-item p-8 rounded-lg border text-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(107, 138, 102, 0.5)",
                  borderColor: "rgba(207, 225, 203, 0.5)",
                  "&:hover": { backgroundColor: "rgba(107, 138, 102, 0.7)" },
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(207, 225, 203, 0.3)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 8h5l-5 5v4h3v3h-11v-3h3v-4l-5-5h5v-6h4z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-200 mb-3">
                  Farmer Partnerships
                </h4>
                <p className="text-green-100/80">
                  We build lasting relationships with farmers who share our
                  passion for quality. By sourcing directly, we ensure fair
                  practices while maintaining control over the quality of raw
                  materials.
                </p>
              </div>

              {/* Value 5 */}
              <div
                className="value-item p-8 rounded-lg border text-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(107, 138, 102, 0.5)",
                  borderColor: "rgba(207, 225, 203, 0.5)",
                  "&:hover": { backgroundColor: "rgba(107, 138, 102, 0.7)" },
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(207, 225, 203, 0.3)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 7h-9m0 7h9M20 19h-9M4 15h3M4 19h3M4 7h3M4 11h3"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-200 mb-3">
                  Continuous Innovation
                </h4>
                <p className="text-green-100/80">
                  While respecting tradition, we continuously innovate to meet
                  evolving needs, combining ancient wisdom with modern science
                  to create products that resonate with today's consumers.
                </p>
              </div>

              {/* Value 6 */}
              <div
                className="value-item p-8 rounded-lg border text-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(107, 138, 102, 0.5)",
                  borderColor: "rgba(207, 225, 203, 0.5)",
                  "&:hover": { backgroundColor: "rgba(107, 138, 102, 0.7)" },
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(207, 225, 203, 0.3)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6c4 0 7 2 9 6 2-4 5-6 9-6M3 12c4 0 7 2 9 6 2-4 5-6 9-6M3 18c4 0 7 2 9 6 2-4 5-6 9-6"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-200 mb-3">
                  Family Legacy
                </h4>
                <p className="text-green-100/80">
                  As a family-owned business spanning generations, we honor our
                  heritage and the wisdom of our founders while embracing new
                  ideas that carry our legacy into the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Process Section */}
        <section className="py-16 md:py-24 bg-white process-section relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium text-green-700 uppercase tracking-wider mb-2">
                Our Methods
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                The Traditional Process
              </h3>
              <div
                className="w-24 h-1 mx-auto mt-4"
                style={{ backgroundColor: "#7a9d73" }}
              ></div>
              <p className="max-w-3xl mx-auto mt-6 text-gray-600">
                What sets NALMANAM apart is our unwavering commitment to
                traditional processing methods. While many have moved towards
                mass production and shortcuts, we maintain time-honored
                techniques that preserve the authentic flavor and aroma of each
                spice.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="process-item">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <Image
                        src="/spice-selection.jpg"
                        alt="Careful Selection of Spices"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="absolute top-0 left-0 text-white w-12 h-12 flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: "#7a9d73" }}
                    >
                      01
                    </div>
                  </div>
                </div>

                <div className="process-item">
                  <h4 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    Careful Selection
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Each batch begins with the careful selection of raw
                    materials. Our spice experts personally examine and
                    hand-select ingredients from trusted farmers, ensuring only
                    the finest make it into our products.
                  </p>
                  <p className="text-gray-700">
                    We consider factors like origin, maturity, color, aroma, and
                    moisture content - rejecting anything that doesn't meet our
                    exacting standards. This meticulous selection process is the
                    foundation of our quality.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="process-item order-2 md:order-1">
                  <h4 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    Traditional Cleaning
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Before processing, all spices undergo thorough cleaning
                    using traditional methods that have stood the test of time.
                    This ensures the removal of any foreign matter while
                    preserving the integrity of the spice.
                  </p>
                  <p className="text-gray-700">
                    Unlike industrial cleaning that can strip away essential
                    oils, our methods gently remove impurities while maintaining
                    all the natural goodness of each ingredient.
                  </p>
                </div>

                <div className="process-item order-1 md:order-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <Image
                        src="/spice-cleaning.jpg"
                        alt="Traditional Cleaning Methods"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="absolute top-0 left-0 text-white w-12 h-12 flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: "#7a9d73" }}
                    >
                      02
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="process-item">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <Image
                        src="/traditional-grinding.jpg"
                        alt="Stone Grinding Process"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="absolute top-0 left-0 text-white w-12 h-12 flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: "#7a9d73" }}
                    >
                      03
                    </div>
                  </div>
                </div>

                <div className="process-item">
                  <h4 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    Stone Grinding
                  </h4>
                  <p className="text-gray-700 mb-4">
                    We continue to use traditional stone grinding for many of
                    our products. This slow, cool process preserves volatile
                    oils and aromatic compounds that high-speed industrial
                    grinders often destroy through heat.
                  </p>
                  <p className="text-gray-700">
                    The result is a more aromatic, flavorful product with the
                    distinctive texture that experienced cooks recognize as the
                    hallmark of quality. While this method takes more time, the
                    difference in taste is unmistakable.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="process-item order-2 md:order-1">
                  <h4 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    Master Blending
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Our master blenders combine decades of experience with
                    recipes that have been in our family for generations. Each
                    masala blend is crafted according to precise proportions
                    that bring out the perfect balance of flavors.
                  </p>
                  <p className="text-gray-700">
                    Unlike mass-produced spices that often use fillers and
                    standardized formulas, our blends honor regional culinary
                    traditions and are made in small batches to ensure quality
                    and consistency.
                  </p>
                </div>

                <div className="process-item order-1 md:order-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <Image
                        src="/master-blending.jpg"
                        alt="Master Blending Process"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="absolute top-0 left-0 text-white w-12 h-12 flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: "#7a9d73" }}
                    >
                      04
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="process-item">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <Image
                        src="/quality-testing.jpg"
                        alt="Quality Testing"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="absolute top-0 left-0 text-white w-12 h-12 flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: "#7a9d73" }}
                    >
                      05
                    </div>
                  </div>
                </div>

                <div className="process-item">
                  <h4 className="text-2xl font-bold text-green-800 mb-4 font-serif">
                    Quality Testing
                  </h4>
                  <p className="text-gray-700 mb-4">
                    While we honor tradition, we embrace modern quality testing
                    to ensure consistency and safety. Every batch undergoes
                    rigorous testing for purity, potency, and authenticity
                    before being approved for packaging.
                  </p>
                  <p className="text-gray-700">
                    This blend of traditional wisdom and modern science ensures
                    that each NALMANAM product meets the high standards our
                    customers have come to expect over generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="py-16 md:py-24 relative"
          style={{ backgroundColor: "rgba(207, 225, 203, 0.3)" }}
        >
          <div
            className="absolute inset-0 opacity-5 bg-repeat"
            style={{ backgroundImage: 'url("/spice-pattern.png")' }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium text-green-700 uppercase tracking-wider mb-2">
                Trusted For Generations
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                What People Say
              </h3>
              <div
                className="w-24 h-1 mx-auto mt-4"
                style={{ backgroundColor: "#7a9d73" }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute -top-5 left-6">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 20L10 0H20L10 20H0V40H20V20H10L20 0H30L20 20H10V40H30V20H20L30 0H40L30 20H20V40H40V0H30V20H40V0H0V20Z"
                      fill="#7a9d73"
                      fillOpacity="0.1"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-6 pt-4">
                  "I've been cooking with NALMANAM spices for over 25 years. The
                  turmeric powder has a richness that store brands simply can't
                  match. When I open a packet, the aroma immediately transports
                  me to my grandmother's kitchen."
                </p>
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-green-800 font-bold text-lg mr-4"
                    style={{ backgroundColor: "#CFE1CB" }}
                  >
                    L
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">
                      Lakshmi Venkatesh
                    </h5>
                    <p className="text-green-700 text-sm">Home Chef, Chennai</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute -top-5 left-6">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 20L10 0H20L10 20H0V40H20V20H10L20 0H30L20 20H10V40H30V20H20L30 0H40L30 20H20V40H40V0H30V20H40V0H0V20Z"
                      fill="#7a9d73"
                      fillOpacity="0.1"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-6 pt-4">
                  "As a restaurant owner, I've tried countless spice brands over
                  the years. NALMANAM stands out for its consistency and depth
                  of flavor. My customers can taste the difference, and many ask
                  what secret ingredients we use in our dishes."
                </p>
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-green-800 font-bold text-lg mr-4"
                    style={{ backgroundColor: "#CFE1CB" }}
                  >
                    R
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Rajesh Kumar</h5>
                    <p className="text-green-700 text-sm">
                      Restaurant Owner, Coimbatore
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute -top-5 left-6">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 20L10 0H20L10 20H0V40H20V20H10L20 0H30L20 20H10V40H30V20H20L30 0H40L30 20H20V40H40V0H30V20H40V0H0V20Z"
                      fill="#7a9d73"
                      fillOpacity="0.1"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-6 pt-4">
                  "When I moved abroad, I struggled to recreate the authentic
                  tastes of home until I discovered NALMANAM. Their garam masala
                  has the perfect balance of spices - not overpowering, yet
                  distinctly aromatic. It's the closest thing to my mother's
                  cooking."
                </p>
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-green-800 font-bold text-lg mr-4"
                    style={{ backgroundColor: "#CFE1CB" }}
                  >
                    P
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Priya Suresh</h5>
                    <p className="text-green-700 text-sm">
                      Software Engineer, Singapore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 md:py-24 relative"
          style={{ backgroundColor: "#7a9d73" }}
        >
          <div
            className="absolute inset-0 opacity-10 bg-repeat"
            style={{ backgroundImage: 'url("/spice-pattern.png")' }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Experience Our Legacy of Flavor
              </h2>
              <p className="text-green-100 mb-8 text-lg">
                From our family to yours - discover the authentic taste of
                premium masalas crafted with care, tradition, and the finest
                natural ingredients.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/products"
                  className="bg-white px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 inline-flex items-center justify-center font-medium text-base"
                  style={{ color: "#7a9d73" }}
                >
                  Explore Our Products
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <a
                  href="https://wa.me/918989191965"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 inline-flex items-center justify-center font-medium text-base"
                  style={{ "&:hover": { color: "#7a9d73" } }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
