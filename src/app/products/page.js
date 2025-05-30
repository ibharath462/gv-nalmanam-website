"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Info, MenuIcon, X, Book, BookOpen } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/Floater";

const ProductsPage = () => {
  // State for language toggle
  const [language, setLanguage] = useState("en");
  const [activeCategory, setActiveCategory] = useState(null);
  const [productsData, setProductsData] = useState({
    categories: [],
    page: { footer: { en: "", ta: "" }, connect: { en: "", ta: "" } },
  });
  const [loading, setLoading] = useState(true);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [selectedProductInfo, setSelectedProductInfo] = useState(null);
  const categoryScrollRef = useRef(null);

  useEffect(() => {
    // Fetch product data
    fetch("/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProductsData(data);
        setLoading(false);

        // Set initial active category after data is loaded
        if (data.categories && data.categories.length > 0) {
          setActiveCategory(data.categories[0].name[language]);
        }
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, [language]); // Re-fetch if language changes (shouldn't be necessary but added for safety)

  // Add a custom horizontal scroll function for mobile category navigation
  const handleCategoryScroll = (categoryName) => {
    // First change the active category
    handleCategoryChange(categoryName);

    // Then find and scroll to the category button
    setTimeout(() => {
      const categoryElement = document.getElementById(
        `category-btn-${categoryName}`
      );
      if (categoryElement && categoryScrollRef.current) {
        // Calculate position to scroll to
        const container = categoryScrollRef.current;
        const scrollLeft =
          categoryElement.offsetLeft -
          container.offsetWidth / 2 +
          categoryElement.offsetWidth / 2;

        // Smooth scroll to the element
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Function to toggle language
  const toggleLanguage = () => {
    const newLang = language === "en" ? "ta" : "en";
    setLanguage(newLang);

    // Update active category name when language changes
    if (activeCategory && productsData.categories) {
      const currentCategoryIndex = productsData.categories.findIndex(
        (cat) => cat.name[language] === activeCategory
      );
      if (currentCategoryIndex !== -1) {
        setActiveCategory(
          productsData.categories[currentCategoryIndex].name[newLang]
        );
      }
    }
  };

  // Handle category change
  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  // Show product info modal
  const showProductInfo = (product) => {
    setSelectedProductInfo(product);
  };

  // Close product info modal
  const closeProductInfo = () => {
    setSelectedProductInfo(null);
  };

  // Function to handle order button click
  const handleOrderClick = (product) => {
    // Format product name with selected variant if any
    const firstVariant =
      product.variants && product.variants.length > 0
        ? ` (${product.variants[0].weight})`
        : "";

    const message = encodeURIComponent(
      `Hello, I'd like to order ${product.name[language]}${firstVariant} from Nalmanam.`
    );
    window.open(`https://wa.me/918989191965?text=${message}`, "_blank");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-800 font-medium">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 z-0">
          <div className="absolute inset-0 opacity-10 bg-pattern-herbs"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <img
                src={
                  language === "en"
                    ? "/images/nalmanam_english_logo.svg"
                    : "/images/nalmanam_tamil_logo.jpg"
                }
                alt="Nalmanam Logo"
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-amber-800 mb-4"
            >
              {language === "en" ? "Our Products" : "எங்கள் தயாரிப்புகள்"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-700 mb-8"
            >
              {language === "en"
                ? "100% Pure & Natural Products - No Preservatives, No Artificial Colors, No Sulphur"
                : "100% தூய & இயற்கையான தயாரிப்புகள் - பாதுகாப்பு பொருட்கள் இல்லை, செயற்கை நிறமிகள் இல்லை, சல்பர் இல்லை"}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={toggleLanguage}
              className="px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
            >
              {language === "en" ? "தமிழில் காட்டு" : "Show in English"}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Floating Category Menu Button */}
      <motion.div
        className="fixed bottom-24 left-4 z-50 md:hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => setShowCategoryMenu(!showCategoryMenu)}
          className="w-14 h-14 rounded-full bg-amber-700 text-white shadow-lg flex items-center justify-center"
          aria-label="Toggle category menu"
        >
          {showCategoryMenu ? <BookOpen size={24} /> : <Book size={24} />}
        </button>
      </motion.div>

      {/* Floating Category Menu */}
      {productsData.categories && productsData.categories.length > 0 && (
        <motion.div
          className={`fixed inset-0 backdrop-blur-sm bg-black/30 z-40 md:hidden ${
            showCategoryMenu ? "pointer-events-auto" : "pointer-events-none"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: showCategoryMenu ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setShowCategoryMenu(false)}
        >
          <div className="absolute bottom-40 left-20 ">
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-md mx-auto overflow-hidden"
              initial={{
                scale: 0.8,
                opacity: 0,
                x: "-60px", // Start from the button position
                y: "60px", // Start slightly below
              }}
              animate={{
                scale: showCategoryMenu ? 1 : 0.8,
                opacity: showCategoryMenu ? 1 : 0,
                x: showCategoryMenu ? 0 : "-60px",
                y: showCategoryMenu ? 0 : "60px",
              }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu items - No Header */}
              <div className="overflow-y-auto max-h-[70vh]">
                {productsData.categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleCategoryChange(category.name[language]);
                      setShowCategoryMenu(false);
                    }}
                    className={`w-full text-left px-5 py-4 flex items-center space-x-4 transition-colors ${
                      index === 0 ? "bg-amber-50" : ""
                    } ${
                      activeCategory === category.name[language]
                        ? "bg-amber-50"
                        : "bg-white hover:bg-gray-50"
                    } ${
                      index < productsData.categories.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    {/* Category Icon based on index */}
                    <span className="text-amber-700 flex-shrink-0">
                      {index === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 10h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5Z"></path>
                          <path d="M13 9h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2V9Z"></path>
                          <rect width="4" height="12" x="3" y="7" rx="2"></rect>
                          <path d="m3 7 4-2"></path>
                          <path d="M7 7 3 5"></path>
                        </svg>
                      ) : index === 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m7 5 10 10-5 5V5l-5 5"></path>
                        </svg>
                      ) : index === 2 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11.3 6a3 3 0 0 0-2.1.8l-1 1a3 3 0 0 0-.8 2.1 9 9 0 0 0 9.5 9.5 3 3 0 0 0 2.1-.8l1-1a3 3 0 0 0 .8-2.1 9 9 0 0 0-9.5-9.5Z"></path>
                          <path d="M15 3.1A9 9 0 0 1 21 9"></path>
                          <path d="M14.9 5.1A6 6 0 0 1 19 9"></path>
                        </svg>
                      ) : index === 3 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8Z"></path>
                          <path d="M4 11V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 11h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8Z"></path>
                          <path d="M8 9h8"></path>
                          <path d="M8 6h8"></path>
                          <path d="M9 3h6"></path>
                        </svg>
                      )}
                    </span>
                    <span
                      className={`text-amber-900 ${
                        activeCategory === category.name[language]
                          ? "font-bold"
                          : "font-medium"
                      }`}
                    >
                      {category.name[language]}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Desktop Category Navigation */}
      <section className="hidden md:block py-6 bg-amber-50 sticky top-16 z-20 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            {productsData.categories &&
              productsData.categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category.name[language])}
                  className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.name[language]
                      ? "bg-amber-700 text-white shadow-md"
                      : "bg-white text-amber-800 hover:bg-amber-100"
                  }`}
                >
                  {category.name[language]}
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* Products Display */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {productsData.categories &&
            productsData.categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                id={`category-${categoryIndex}`}
                className={`mb-16 ${
                  activeCategory === category.name[language]
                    ? "block"
                    : "hidden"
                }`}
              >
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-amber-800 mb-8 text-center md:text-left flex items-center justify-center md:justify-start"
                >
                  <span className="bg-amber-700 h-8 w-2 mr-3 rounded hidden md:block"></span>
                  {category.name[language]}
                </motion.h2>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.products &&
                    category.products.map((product, productIndex) => (
                      <motion.div
                        key={productIndex}
                        variants={itemVariants}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        {/* Product Image */}
                        <div className="relative h-48 overflow-hidden bg-amber-50">
                          <Image
                            src={product.image || "/images/pepper.jpg"}
                            alt={product.name[language]}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 hover:scale-110"
                            onError={(e) => {
                              e.target.src = `/images/pepper.jpg`; // Fallback image
                            }}
                          />
                          {/* Label for 100% Natural */}
                          {/* <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                            100% Natural
                          </div> */}
                        </div>

                        <div className="p-5">
                          <div className="mb-4">
                            <div className="flex justify-between items-start">
                              <h3 className="text-xl font-semibold text-amber-900">
                                {product.name[language]}
                              </h3>
                              <button
                                className="text-amber-700 hover:text-amber-900"
                                aria-label="Product information"
                                onClick={() => showProductInfo(product)}
                              >
                                <Info size={18} />
                              </button>
                            </div>
                            <p className="text-gray-600 text-sm mt-1">
                              {language === "en"
                                ? "Traditional home-made process"
                                : "பாரம்பரிய முறையில் தயாரிக்கப்பட்டது"}
                            </p>
                          </div>

                          {product.variants && product.variants.length > 0 ? (
                            <div className="mt-4">
                              <div className="text-sm text-gray-500 mb-2">
                                {language === "en"
                                  ? "Available sizes"
                                  : "கிடைக்கும் அளவுகள்"}
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {product.variants.map(
                                  (variant, variantIndex) => (
                                    <div
                                      key={variantIndex}
                                      className="border border-amber-200 rounded-md px-3 py-1 text-amber-800 bg-amber-50 text-sm flex justify-between items-center min-w-24"
                                    >
                                      <span>{variant.weight}</span>
                                      <span className="font-semibold ml-2">
                                        {variant.price
                                          ? `₹${variant.price}`
                                          : "Price on request"}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          ) : (
                            <p className="text-gray-500 italic mt-4">
                              {language === "en"
                                ? "Price on request"
                                : "விலை கேட்டறிய"}
                            </p>
                          )}

                          <div className="mt-5 pt-4 border-t border-gray-100 flex justify-center">
                            <button
                              className="flex items-center text-white bg-amber-700 hover:bg-amber-800 px-3 py-2 rounded-md transition-colors duration-300 w-full justify-center"
                              onClick={() => handleOrderClick(product)}
                            >
                              <ShoppingBag size={16} className="mr-1" />
                              <span>
                                {language === "en" ? "Order Now" : "ஆர்டர்"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </div>
            ))}
        </div>
      </section>

      {/* Product Info Modal */}
      {selectedProductInfo && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeProductInfo}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeProductInfo}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold text-amber-800 mb-4">
              {selectedProductInfo.name[language]}
            </h3>

            {selectedProductInfo.description && (
              <div className="mb-4">
                <h4 className="font-semibold text-amber-700 mb-2">
                  {language === "en" ? "Description" : "விளக்கம்"}
                </h4>
                <p className="text-gray-700">
                  {selectedProductInfo.description[language]}
                </p>
              </div>
            )}

            {selectedProductInfo.benefits && (
              <div className="mb-4">
                <h4 className="font-semibold text-amber-700 mb-2">
                  {language === "en" ? "Benefits" : "நன்மைகள்"}
                </h4>
                <ul className="text-gray-700 list-disc pl-5 space-y-1">
                  {selectedProductInfo.benefits[language].map(
                    (benefit, index) => (
                      <li key={index}>{benefit}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            {selectedProductInfo.usage && (
              <div className="mb-4">
                <h4 className="font-semibold text-amber-700 mb-2">
                  {language === "en" ? "How to Use" : "பயன்படுத்தும் முறை"}
                </h4>
                <p className="text-gray-700">
                  {selectedProductInfo.usage[language]}
                </p>
              </div>
            )}

            <div className="mt-6">
              <button
                className="w-full flex items-center justify-center text-white bg-amber-700 hover:bg-amber-800 px-4 py-2 rounded-md transition-colors duration-300"
                onClick={() => {
                  handleOrderClick(selectedProductInfo);
                  closeProductInfo();
                }}
              >
                <ShoppingBag size={16} className="mr-2" />
                {language === "en" ? "Order Now" : "ஆர்டர்"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Special Note */}
      <section className="py-8 bg-amber-100">
        <div className="container mx-auto px-4 text-center">
          {productsData.page && productsData.page.footer && (
            <p className="text-amber-900 font-medium text-lg">
              {language === "en"
                ? productsData.page.footer.en
                : productsData.page.footer.ta}
            </p>
          )}

          {productsData.page && productsData.page.connect && (
            <h3 className="mt-4 text-2xl font-bold text-amber-800">
              {language === "en"
                ? productsData.page.connect.en
                : productsData.page.connect.ta}
            </h3>
          )}

          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/nalmanamstore"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition hover:scale-110"
            >
              <Image
                src="/images/instagram-qr.png"
                alt="Instagram QR Code"
                width={100}
                height={100}
                className="rounded-lg shadow-md"
              />
            </a>
            <a
              href="https://wa.me/918989191965"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition hover:scale-110"
            >
              <Image
                src="/images/whatsapp-qr.png"
                alt="WhatsApp QR Code"
                width={100}
                height={100}
                className="rounded-lg shadow-md"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />

      {/* CSS for leaf pattern background */}
      <style jsx global>{`
        .bg-pattern-herbs {
          background-image: url("/images/leaf-pattern.png");
          background-repeat: repeat;
          background-size: 500px;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;
