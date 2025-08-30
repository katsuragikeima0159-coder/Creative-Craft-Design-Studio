"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioModal({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item) return null;

  // Function to get the modal title for samples
  const getModalTitle = (title) => {
    switch (title) {
      case "Logo Design":
        return "Logo Samples";
      case "Brand Identity":
        return "Brand Samples";
      case "Illustration":
        return "Illustration Samples";
      case "Video Editing":
        return "Video Samples";
      default:
        return title;
    }
  };

  return (
    <>
      {/* Initial Portfolio Box */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-white">
          <img src={item.img} alt={item.title} className="w-full h-36 object-cover" />
          <div className="p-5">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 overflow-y-auto max-h-[80vh]">
            <button
              className="float-right text-gray-500 font-bold text-xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">{getModalTitle(item.title)}</h2>
            <p className="text-gray-600 mb-6">{item.description}</p>

            {/* Loop through projects */}
            {item.projects.map((proj, idx) => (
              <div key={idx} className="mb-4 p-4 border rounded-lg">
                {proj.img && (
                  <img
                    src={proj.img}
                    alt={proj.name}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                )}
                <h3 className="font-semibold">{proj.name}</h3>
                <p className="text-gray-600">{proj.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
