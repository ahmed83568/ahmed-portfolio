"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const techSkills = [
  "JavaScript (ES6+)",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "GSAP",
  "Framer Motion",
  "Axios",
];

const educationData = [
  {
    degree: "B.Tech in Computer Engineering",
    institute: "H.J Theem College, Boisar",
    duration: "2021 – 2024",
  },
  {
    degree: "Diploma in Computer Engineering",
    institute: "A.R. Kalsekar Polytechnic",
    duration: "2019 – 2021",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-28 px-6 relative z-10 text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-extrabold inline-block mb-4 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👨‍💻 About Me
        <span className="block h-1 w-16 bg-blue-500 rounded-full mx-auto mt-2" />
      </motion.h2>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
        I’m a passionate frontend developer with <strong>1+ year of experience</strong> building
        fast, accessible, and responsive web apps. I love working with modern libraries like <em>React</em>,
        <em>TypeScript</em>, and <em>Framer Motion</em> to create clean UI and delightful UX.
      </p>

      {/* Tech Stack */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">🚀 Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {techSkills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-700 dark:to-indigo-700 text-sm text-blue-900 dark:text-white font-medium px-4 py-2 rounded-full shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <h2 className="text-4xl font-bold my-16">🎓 Education</h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-600"
          style={{ top: 0, bottom: 0 }}
        />

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative w-full md:w-1/2 p-6 bg-white/90 dark:bg-[#1a1a1a]/90 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl mb-12 backdrop-blur-md ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
          >
            {/* Glowing Icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-blue-400 text-white p-2 rounded-full shadow-lg z-10 ring-4 ring-blue-400/30 animate-pulse">
              <GraduationCap className="w-5 h-5" />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              {edu.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.institute}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{edu.duration}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
