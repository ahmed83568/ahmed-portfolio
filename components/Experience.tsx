"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer (React.js)",
    company: "Hikmah Technologies",
    duration: "June 2024 – Present",
    points: [
      "Built scalable Internal Audit PWA using React.js & Tailwind CSS.",
      "Created reusable components for dashboards and forms.",
      "Integrated REST APIs for real-time data and workflows.",
      "Enhanced UI/UX with clean code & accessibility practices.",
      "Improved performance, reducing load time by ~40%.",
    ],
  },
  {
  role: "Web Intern",
  company: "Alvin IT Solutions",
  duration: "June 2023 – August 2023",
  points: [
    "Created static web pages using HTML and CSS based on provided designs.",
    "Implemented basic interactivity using JavaScript (e.g., button clicks, form handling).",
    "Worked closely with senior developers to understand project structure and improve coding practices.",
  ],
}

];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-28 px-6 text-center relative z-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-4 "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        💼 Experience
        <span className="block h-1 w-16 bg-blue-500 rounded-full mx-auto mt-2 " />
      </motion.h2>

      <div className="relative max-w-3xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-600 before:-translate-x-1/2 mt-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative w-full md:w-1/2 p-6 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl mb-12 text-left ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-blue-400 text-white p-2 rounded-full shadow-lg z-10">
              <Briefcase className="w-5 h-5" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {exp.role}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {exp.company} | {exp.duration}
            </p>

            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {exp.points.map((point, i) => (
                <li
                  key={i}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
