"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id='hero'
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white text-black dark:bg-[#0f0f0f] dark:text-white"
    >
      {/* Animated Glowing Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-30 blur-[120px] z-0 animate-pulse"
        style={{ y }}
      />

      {/* Foreground content */}
      <motion.div
        className="z-10"
        style={{ y }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Ahmed Raza</span>
        </h1>

        <div className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer 💻",
                "React.js Specialist ⚛️",
                "UI/UX Enthusiast 🎨",
                "Tailwind & Next.js Expert 🚀"
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 20,
            }}
          />
        </div>

        {/* Optional CTA */}
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg transition-all"
        >
          View My Work ↓
        </a>
      </motion.div>
    </section>
  );
}
