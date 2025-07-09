"use client";
import { motion } from "framer-motion";

export default function AnimatedGlow() {
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-30 blur-[120px] z-0 animate-pulse"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
