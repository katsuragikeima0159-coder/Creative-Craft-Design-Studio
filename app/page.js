"use client";

import { ExternalLink, PenTool, Image, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
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
  <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "Branding & Logos",
        desc: "Custom logos, brand kits, and identity systems for startups and businesses.",
      },
      {
        title: "Illustration",
        desc: "Children’s book illustrations, editorial art, and creative visuals.",
      },
      {
        title: "E-learning Design",
        desc: "Infographics, educational modules, and interactive layouts for digital learning.",
      },
    ].map((service, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Logo Design",
              img: "/portfolio/logo1.png",
              description: "Custom logos that define your brand identity."
            },
            {
              title: "Brand Identity",
              img: "/portfolio/brand1.png",
              description: "Full branding packages including color palettes and style guides."
            },
            {
              title: "Illustration",
              img: "/portfolio/illustration1.jpg",
              description: "Original illustrations for marketing, books, and digital content."
            }
          ].map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 bg-white">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Work With Us</h2>
        <p className="text-gray-600 mb-6">
          Let’s collaborate on your next creative project. Whether you need
          branding, illustration, or digital design, we deliver solutions
          tailored to your needs.
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
        © {new Date().getFullYear()} Creative Craft Design Studio. All rights
        reserved.
      </footer>
    </div>
  );
}
