"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar({ toggleTheme, darkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md shadow"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Ahmed<span className="text-black dark:text-white">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item.label}
            </a>
          ))}

          {/* Resume */}
          <a
            href="/AhmedRaza-Resume-Forntend-Developer.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition text-sm"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex  items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 md:hidden dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#0f0f0f] shadow-md px-6 py-4 space-y-4"
          >
            {navItems.map((item) => (
             <a
  key={item.href}
  href={item.href}
  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-base"
  onClick={(e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.querySelector(item.href);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 200); // Wait for animation to finish
  }}
>
  {item.label}
</a>

            ))}

            {/* Resume in Mobile */}
            <a
              href="/AhmedRaza-Resume-Forntend-Developer.pdf"
              download
              className="mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
