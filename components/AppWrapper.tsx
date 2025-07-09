"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AnimatedGlow from "./AnimatedGlow";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="relative bg-white dark:bg-[#0f0f0f] text-black dark:text-white overflow-x-hidden">
      {/* Background glow */}
      <AnimatedGlow />

      {/* Navbar */}
      <Navbar toggleTheme={() => setDarkMode((prev) => !prev)} darkMode={darkMode} />

      {/* Page content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
