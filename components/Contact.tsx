"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 text-center relative z-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-xl mx-auto">
        Whether you want to collaborate, have a project in mind, or just want to say hi — feel free to reach out!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white">
        <a
          href="mailto:ahmed810832@gmail.com"
          className="flex items-center gap-3 px-6 py-3 border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-600 dark:text-blue-400 hover:dark:text-white rounded-full transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          Email
        </a>

        <a
          href="https://github.com/ahmed83568"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 border border-gray-600 hover:bg-gray-800 hover:text-white text-gray-800 dark:text-gray-300 rounded-full transition-all duration-300"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ahmed83568/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 dark:text-blue-400 hover:dark:text-white rounded-full transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
