"use client";

import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import FloatingContact from "./components/Floater";
import { ArrowRight, Award, Leaf, Shield, Star, Users } from "lucide-react";

export default function Home() {
  // For animations when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Nalmanam Masala | Premium Spices & Masala Products</title>
        <meta
          name="description"
          content="Discover Nalmanam - premium masala products from Sri Murughan Flour Mill. 100% pure & natural spices without preservatives or artificial colors."
        />
        <meta
          name="keywords"
          content="Nalmanam, masala, spices, Sri Murughan Flour Mill, pure, natural, preservative-free"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <HeroSection />

          {/* About Section */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-50 to-transparent"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-100 rounded-full opacity-20"></div>

            <div className="container mx-auto px-4">
              <div className="text-center mb-12 reveal fade-bottom">
                <h2 className="text-sm font-medium text-amber-700 uppercase tracking-wider mb-2">
                  Our Legacy
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                  The Sri Murughan Flour Mill Story
                </h3>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="reveal fade-right">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <Image
                        src="/images/manjal.jpg"
                        alt="Sri Murughan Flour Mill facility"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <p className="text-sm uppercase tracking-wide">
                          Established 1965
                        </p>
                        <h4 className="text-xl font-bold">
                          Sri Murughan Flour Mill
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 reveal fade-left">
                  <p className="text-gray-700 leading-relaxed">
                    For over five decades,{" "}
                    <strong>Sri Murughan Flour Mill India Pvt Ltd</strong> has
                    been committed to preserving the authentic flavors of Indian
                    cuisine. Based in Namakkal, Tamil Nadu, our journey began
                    with a simple yet profound mission: to provide the purest
                    ingredients for India's rich culinary traditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>NALMANAM</strong> emerged as our premium masala
                    brand, embodying our commitment to quality and tradition.
                    Every Nalmanam product is crafted with care, using
                    ingredients sourced directly from farmers who share our
                    passion for purity and authenticity.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    What sets us apart is our dedication to traditional
                    processes. While the industry moved toward mass production,
                    we maintained our commitment to time-honored methods that
                    preserve the true essence of each spice.
                  </p>
                  <Link
                    href="/brand"
                    className="inline-flex items-center text-amber-800 font-medium hover:text-amber-600 transition-colors"
                  >
                    Discover our full story
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Product Highlights */}
          <section className="py-16 md:py-24 bg-amber-50/50 relative">
            <div className="absolute inset-0 bg-[url('/spice-pattern.png')] opacity-5 bg-repeat"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12 reveal fade-bottom">
                <h2 className="text-sm font-medium text-amber-700 uppercase tracking-wider mb-2">
                  Our Products
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                  Premium Masala Collection
                </h3>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
                <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                  Discover our range of traditional masalas, crafted with care
                  using age-old recipes and 100% natural ingredients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Product Card 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 reveal fade-up">
                  <div className="aspect-w-1 aspect-h-1 relative">
                    <Image
                      src="/turmeric.jpg"
                      alt="Nalmanam Turmeric Powder"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                        Best Seller
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-gray-900 font-serif">
                      Turmeric Powder
                    </h4>
                    <div className="flex items-center mt-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-amber-500 fill-amber-500"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">
                        127 reviews
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Our premium turmeric powder is known for its vibrant color
                      and authentic aroma, adding both flavor and health
                      benefits to your dishes.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-amber-800 font-bold">
                        Available in various sizes
                      </span>
                      <Link
                        href="/products/turmeric-powder"
                        className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product Card 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 reveal fade-up delay-100">
                  <div className="aspect-w-1 aspect-h-1 relative">
                    <Image
                      src="/chilli-powder.jpg"
                      alt="Nalmanam Chilli Powder"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-gray-900 font-serif">
                      Chilli Powder
                    </h4>
                    <div className="flex items-center mt-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < 4
                                ? "text-amber-500 fill-amber-500"
                                : "text-amber-300 fill-amber-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">
                        98 reviews
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Made from carefully selected red chillies, our chilli
                      powder brings the perfect level of heat and color to your
                      favorite dishes.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-amber-800 font-bold">
                        Available in various sizes
                      </span>
                      <Link
                        href="/products/chilli-powder"
                        className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product Card 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 reveal fade-up delay-200">
                  <div className="aspect-w-1 aspect-h-1 relative">
                    <Image
                      src="/coriander-powder.jpg"
                      alt="Nalmanam Coriander Powder"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-gray-900 font-serif">
                      Coriander Powder
                    </h4>
                    <div className="flex items-center mt-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < 5
                                ? "text-amber-500 fill-amber-500"
                                : "text-amber-300 fill-amber-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">
                        112 reviews
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Our aromatic coriander powder is ground from the finest
                      coriander seeds, bringing a warm, nutty flavor to your
                      culinary creations.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-amber-800 font-bold">
                        Available in various sizes
                      </span>
                      <Link
                        href="/products/coriander-powder"
                        className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12 reveal fade-bottom">
                <Link
                  href="/products"
                  className="bg-gradient-to-r from-amber-800 to-amber-600 text-white px-8 py-3 rounded-lg
                  transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                  active:scale-95 inline-flex items-center font-medium"
                >
                  Explore All Products
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </section>

          {/* Features/Why Choose Us */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 reveal fade-bottom">
                <h2 className="text-sm font-medium text-amber-700 uppercase tracking-wider mb-2">
                  Why Choose Us
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                  Our Commitment to Quality
                </h3>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-amber-50/50 p-6 rounded-lg border border-amber-100 text-center reveal fade-up">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="text-amber-800" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 font-serif mb-3">
                    100% Pure & Natural
                  </h4>
                  <p className="text-gray-700">
                    We use only the highest quality, naturally grown ingredients
                    without any artificial additives or enhancers.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-amber-50/50 p-6 rounded-lg border border-amber-100 text-center reveal fade-up delay-100">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-amber-800" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 font-serif mb-3">
                    No Preservatives
                  </h4>
                  <p className="text-gray-700">
                    Unlike commercial brands, our products contain zero
                    preservatives, artificial colors, or chemicals, ensuring you
                    get only pure goodness.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-amber-50/50 p-6 rounded-lg border border-amber-100 text-center reveal fade-up delay-200">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-amber-800" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 font-serif mb-3">
                    Traditional Process
                  </h4>
                  <p className="text-gray-700">
                    We honor age-old methods of spice processing, preserving the
                    authentic flavors and aromatic properties of each
                    ingredient.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-amber-50/50 p-6 rounded-lg border border-amber-100 text-center reveal fade-up">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-amber-800" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 font-serif mb-3">
                    Direct From Farmers
                  </h4>
                  <p className="text-gray-700">
                    We source our ingredients directly from farmers, ensuring
                    fair trade practices while maintaining quality control at
                    every step.
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="bg-amber-50/50 p-6 rounded-lg border border-amber-100 text-center reveal fade-up delay-100">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-amber-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 font-serif mb-3">
                    Quality Guarantee
                  </h4>
                  <p className="text-gray-700">
                    We stand by the quality of our products, ensuring each batch
                    meets our stringent standards before reaching your kitchen.
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="bg-amber-50/50 p-6 rounded-lg border border-amber-100 text-center reveal fade-up delay-200">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-amber-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 font-serif mb-3">
                    Scientific Testing
                  </h4>
                  <p className="text-gray-700">
                    We combine traditional knowledge with modern scientific
                    testing to ensure our products meet the highest standards of
                    quality and purity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 md:py-24 bg-amber-50/70 relative">
            <div className="absolute inset-0 bg-[url('/spice-pattern.png')] opacity-5 bg-repeat"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12 reveal fade-bottom">
                <h2 className="text-sm font-medium text-amber-700 uppercase tracking-wider mb-2">
                  Customer Love
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                  What Our Customers Say
                </h3>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md relative reveal fade-up">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-amber-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-700 italic mb-4">
                      "I've been using Nalmanam turmeric powder for years now.
                      The difference in color, aroma, and flavor compared to
                      store-bought brands is remarkable. You can truly taste the
                      purity!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-amber-100 rounded-full overflow-hidden mr-3">
                        <div className="w-full h-full bg-amber-300 flex items-center justify-center text-amber-800 font-bold">
                          S
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Sujatha R.</h5>
                        <p className="text-sm text-gray-500">Chennai</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md relative reveal fade-up delay-100">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-amber-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-700 italic mb-4">
                      "As a chef, I'm very particular about the spices I use.
                      Nalmanam's garam masala has the perfect balance of
                      flavors. It's now my secret ingredient for many signature
                      dishes."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-amber-100 rounded-full overflow-hidden mr-3">
                        <div className="w-full h-full bg-amber-300 flex items-center justify-center text-amber-800 font-bold">
                          V
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Vijay Kumar</h5>
                        <p className="text-sm text-gray-500">Coimbatore</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md relative reveal fade-up delay-200">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-amber-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-700 italic mb-4">
                      "After switching to Nalmanam's chilli powder, my family
                      noticed the difference immediately. It has a rich color
                      and the perfect level of heat. I appreciate that it's free
                      from additives."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-amber-100 rounded-full overflow-hidden mr-3">
                        <div className="w-full h-full bg-amber-300 flex items-center justify-center text-amber-800 font-bold">
                          A
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">Anita Patel</h5>
                        <p className="text-sm text-gray-500">Namakkal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-amber-800 relative">
            <div className="absolute inset-0 bg-[url('/spice-pattern.png')] opacity-10 bg-repeat"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 reveal fade-bottom">
                  Experience the Authentic Taste of Tradition
                </h2>
                <p className="text-amber-100 mb-8 text-lg reveal fade-bottom delay-100">
                  Join thousands of satisfied customers who have made Nalmanam a
                  part of their daily cooking rituals. Pure, natural, and
                  authentically crafted for your family.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 reveal fade-bottom delay-200">
                  <Link
                    href="/products"
                    className="bg-white text-amber-800 px-8 py-3 rounded-lg
                    transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                    active:scale-95 inline-flex items-center justify-center font-medium text-base"
                  >
                    Explore Products
                  </Link>
                  <a
                    href="https://wa.me/918989191965"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg
                    transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-amber-800 
                    active:scale-95 inline-flex items-center justify-center font-medium text-base"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    Contact via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}
