"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MA Air Cooling Website",
    description:
      "Responsive business website with Firebase contact form, admin panel, and DNS integration.",
    tech: "React.js, Firebase, Vercel, Tailwind CSS",
    link: "https://maaircooling.in",
  },
  {
    title: "Refokus Clone",
    description:
      "Pixel-perfect portfolio clone with fluid animations and scroll effects.",
    tech: "React.js, Tailwind CSS, Framer Motion",
    link: "https://refokus-clone-git-main-khan-ahmed-razas-projects.vercel.app/",
  },
  {
    title: "Cynthia Ugwu Clone",
    description:
      "High-end creative website clone with scroll-triggered GSAP animations and transitions.",
    tech: "React.js, GSAP, Tailwind CSS",
    link: "#",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-28 px-6 text-center relative z-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ✨ Featured Projects
      </motion.h2>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg mb-12">
        A selection of modern frontend projects built with performance, clean UI, and animations in mind.
      </p>

      {/* Project Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative group bg-gradient-to-br from-white/70 to-white/30 dark:from-[#1a1a1a]/70 dark:to-[#1a1a1a]/40 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl transition-all hover:shadow-2xl hover:border-blue-500 hover:dark:border-blue-400 backdrop-blur-md"
          >
            {/* Gradient top border accent */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl" />

            {/* Project Info */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors group-hover:text-blue-500">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                🔧 {project.tech}
              </p>

              {/* View link */}
              <div className="flex items-center gap-1 text-blue-500 dark:text-blue-400 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                View Project <ExternalLink size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
