"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">

      {/* 🔥 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Crafting Modern <br />
            <span className="text-blue-500">Web Experiences</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Vandan</span> — 
            a Full Stack Developer specializing in React, Next.js, 
            <span className="text-white"> PHP</span>, and 
            <span className="text-white"> WordPress</span>.
          </p>

          <p className="mt-4 text-gray-400">
            I build scalable, fast, and visually stunning web applications 
            with a strong focus on performance and user experience.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-lg">
              View Projects
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-[300px] h-[300px] rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500 shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/vandan.png"
                alt="Profile"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 💎 SKILLS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Frontend",
              desc: "React.js, Next.js, Tailwind CSS, JavaScript",
            },
            {
              title: "Backend",
              desc: "PHP, Node.js, API Development",
            },
            {
              title: "CMS",
              desc: "WordPress, Custom Themes, Plugins",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 JOURNEY SECTION */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          My Journey
        </h2>

        <p className="text-gray-400 leading-relaxed">
          I started my journey as a frontend developer and evolved into a 
          full-stack developer, working on real-world applications including 
          blogs, dashboards, and WordPress solutions. I focus on writing clean, 
          maintainable code and delivering high-quality user experiences.
        </p>
      </section>

    </div>
  );
};

export default About;