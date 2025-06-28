"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ContactPage() {
  return (
    <div className="bg-gray-900 min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Want to send a message directly? Fill out the form below.
        </p>
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }} // Delay the form appearance slightly
        className="max-w-xl mx-auto"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}

