"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/Floater";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Truck,
  HelpCircle,
  AlertCircle,
} from "lucide-react";
import gsap from "gsap";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const [formStatus, setFormStatus] = useState({ success: false, message: "" });

  // Form submission handler
  const onSubmit = async (data) => {
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call

      setFormStatus({
        success: true,
        message: "Thank you for your message! We'll get back to you shortly.",
      });

      reset(); // Clear form fields after successful submission
    } catch (error) {
      setFormStatus({
        success: false,
        message:
          "There was an error submitting your message. Please try again.",
      });
    }
  };

  // Reset form status when user starts typing again
  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ success: false, message: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  // Animations
  useEffect(() => {
    // Animate contact info cards
    gsap.fromTo(
      ".contact-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );

    // Animate form elements
    gsap.fromTo(
      ".form-element",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    // Map reveal animation
    gsap.fromTo(
      ".map-container",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-amber-800 text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/spice-pattern.png')] opacity-10 bg-repeat"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 to-amber-800/80"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Get in Touch
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
              <p className="text-xl text-amber-100 mb-6">
                We'd love to hear from you! Whether you have a question about
                our products, need help with an order, or want to explore
                business opportunities, our team is here to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white relative -mt-12 md:-mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Call Us Card */}
              <div className="contact-card bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="text-amber-800" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Our customer service team is available during business hours
                </p>
                <a
                  href="tel:+919566665153"
                  className="text-amber-800 font-bold text-lg hover:text-amber-600 transition-colors"
                >
                  +91 9566 665 153
                </a>
              </div>

              {/* Email Us Card */}
              <div className="contact-card bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-amber-800" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll respond as soon as possible
                </p>
                <a
                  href="mailto:nalmanamstore@gmail.com"
                  className="text-amber-800 font-bold text-lg hover:text-amber-600 transition-colors"
                >
                  nalmanamstore@gmail.com
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="contact-card bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="text-amber-800" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  WhatsApp
                </h3>
                <p className="text-gray-600 mb-4">
                  Chat with us directly for quick inquiries and support
                </p>
                <a
                  href="https://wa.me/918989191965"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-800 font-bold text-lg hover:text-amber-600 transition-colors"
                >
                  +91 8989 19 1965
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Address */}
        <section className="py-16 bg-amber-50/50 relative">
          <div className="absolute inset-0 bg-[url('/spice-pattern.png')] opacity-5 bg-repeat"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div className="form-element">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors`}
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-element">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors`}
                      placeholder="john.doe@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="form-element">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      } focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors bg-white`}
                      {...register("subject", {
                        required: "Please select a subject",
                      })}
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Support">Order Support</option>
                      <option value="Business Opportunity">
                        Business Opportunity
                      </option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="form-element">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors`}
                      placeholder="How can we help you?"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="form-element">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-800 to-amber-600 text-white px-6 py-3 rounded-lg
                      transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg 
                      active:scale-[0.98] font-medium text-base flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Form Status Message */}
                    {formStatus.message && (
                      <div
                        className={`mt-4 p-4 rounded-lg ${
                          formStatus.success
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        <p className="flex items-center">
                          {formStatus.success ? (
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          )}
                          {formStatus.message}
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Address & Hours */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Factory & Office
                  </h3>

                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin
                        size={20}
                        className="text-amber-800 mt-1 mr-3 flex-shrink-0"
                      />
                      <div>
                        <p className="text-gray-700 font-bold">
                          Sri Murughan Flour Mill India Pvt Ltd
                        </p>
                        <p className="text-gray-600">
                          48/46, Nandhanam Street,
                          <br />
                          Namakkal, Tamil Nadu,
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <Clock
                        size={20}
                        className="text-amber-800 mt-1 mr-3 flex-shrink-0"
                      />
                      <div>
                        <p className="text-gray-700 font-bold">
                          Business Hours
                        </p>
                        <p className="text-gray-600">
                          Monday - Saturday: 9:00 AM - 6:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://maps.app.goo.gl/HgEyiY2f3HXRMTqh9"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-amber-800 font-medium hover:text-amber-600 transition-colors"
                    >
                      <MapPin size={16} className="mr-1" />
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Quick Links
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <Link
                        href="/products"
                        className="flex items-center text-gray-700 hover:text-amber-800 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors">
                          <Truck size={16} className="text-amber-800" />
                        </div>
                        <span>Browse Our Products</span>
                      </Link>
                    </div>

                    <div>
                      <Link
                        href="/brand-story"
                        className="flex items-center text-gray-700 hover:text-amber-800 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors">
                          <HelpCircle size={16} className="text-amber-800" />
                        </div>
                        <span>About Our Company</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto map-container">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-8 text-center">
                Find Us
              </h2>

              <div className="h-96 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2617.1469508624596!2d78.1672464!3d11.2217662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcf2f788c773b%3A0xdd00f251b4900e7b!2sSri%20Murugan%20Flour%20Mill%20India%20Pvt%20Ltd.%20%26%20Nalmanam%20Store!5e1!3m2!1sen!2sin!4v1747569981406!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Murughan Flour Mill location map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-amber-50/50 relative">
          <div className="absolute inset-0 bg-[url('/spice-pattern.png')] opacity-5 bg-repeat"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-center mb-10">
                Find answers to commonly asked questions
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Do you offer wholesale pricing?
                  </h3>
                  <p className="text-gray-700">
                    Yes, we offer special pricing for bulk orders and wholesale
                    customers. Please contact our sales team at
                    nalmanamstore@gmail.com or call +91 9566 665 153 to discuss
                    your requirements.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Where can I purchase your products?
                  </h3>
                  <p className="text-gray-700">
                    NALMANAM products are available in select retail stores
                    across South India. You can also order directly from us via
                    WhatsApp or phone for home delivery in certain areas. We're
                    working on an online store - stay tuned!
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    What is the shelf life of your products?
                  </h3>
                  <p className="text-gray-700">
                    Since our products are 100% natural and free from
                    preservatives, we recommend using them within 6-8 months of
                    manufacturing for optimal flavor and aroma. The
                    manufacturing date is clearly marked on all our packages.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Do you ship internationally?
                  </h3>
                  <p className="text-gray-700">
                    Currently, we primarily serve the domestic Indian market.
                    However, we're exploring international shipping options for
                    select countries. Please contact us directly to discuss
                    international order possibilities.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-gray-700 mb-4">
                  Don't see your question here?
                </p>
                <a
                  href="#contact-form"
                  className="inline-flex items-center text-amber-800 font-medium hover:text-amber-600 transition-colors"
                >
                  Contact us for more information
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
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
