"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PortfolioModal from "../components/PortfolioModal";
import { portfolioItems } from "../data/portfolio";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center">
          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#hero" className="hover:text-purple-600">Home</a></li>
            <li><a href="#portfolio" className="hover:text-purple-600">Portfolio</a></li>
            <li><a href="#about" className="hover:text-purple-600">About</a></li>
            <li><a href="#process" className="hover:text-purple-600">Process</a></li>
            <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button onClick={toggleMenu} className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center space-y-8 text-white text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <a href="#hero" onClick={toggleMenu}>Home</a>
            <a href="#services" onClick={toggleMenu}>Services</a>
            <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#process" onClick={toggleMenu}>Process</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="text-center py-16 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg"
        >
          Creative Craft Design Studio
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg">
          Expert design, illustration, and branding for businesses and publishers.
        </p>
        <div className="mt-6">
          <a
            href="#portfolio"
            className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-2xl shadow hover:bg-gray-100"
          >
            View Portfolio
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Our <span className="text-purple-600">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Branding & Logos", desc: "Custom logos, brand kits, and identity systems for startups and businesses." },
            { title: "Illustration", desc: "Children’s book illustrations, editorial art, and creative visuals." },
            { title: "E-learning Design", desc: "Infographics, educational modules, and interactive layouts for digital learning." },
            { title: "Video Editing & Content", desc: "Professional editing for promos, social media, and storytelling across digital platforms." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
              className="rounded-2xl shadow-md hover:shadow-lg transition p-6 bg-white text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Portfolio <span className="text-purple-600">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, idx) => (
            <PortfolioModal key={idx} item={item} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          About <span className="text-purple-600">Us</span>
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
          {/* Founder */}
          <div className="mb-8 text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
              <img src="/alex-pic.jpeg" alt="Founder" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Alexander Ledesma</h3>
            <p className="text-purple-600 font-medium">Founder & Lead Strategist</p>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Alex is the main point of contact for our clients, ensuring every project starts with a clear strategy and ends with measurable results.
            </p>
          </div>
          {/* Team mention */}
          <div className="text-center border-t pt-6">
            <p className="text-gray-700 mb-2">Supported by a dedicated creative team:</p>
            <ul className="space-y-1 text-gray-600">
              <li><span className="font-medium">Olivia</span> — Designer & Multimedia Artist</li>
              <li><span className="font-medium">Ayen</span> — Video Editor & Content Creator</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our <span className="text-purple-600">Process</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Consult", desc: "We start with a conversation to understand your goals, vision, and needs." },
            { title: "Create", desc: "Our team designs, illustrates, or edits with creativity and precision." },
            { title: "Deliver", desc: "We provide polished results, ready for publishing and brand use." },
            { title: "Support", desc: "We’re here for ongoing updates, refinements, and future projects." },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl shadow-md bg-gray-50 text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-600">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Work With Us</h2>
        <p className="text-gray-600 mb-6">
          Let’s collaborate on your next creative project. Whether you need branding, illustration, or digital design, we deliver solutions tailored to your needs.
        </p>
        <a
          href="mailto:olivialedesma2019@gmail.com"
          className="bg-purple-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-purple-700"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Creative Craft Design Studio. All rights reserved.
      </footer>
    </div>
  );
}
