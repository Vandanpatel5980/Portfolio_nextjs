"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
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
            Learn Modern <br />
            <span className="text-blue-500">Web Development</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Build real-world projects using React, Next.js, 
            <span className="text-white"> PHP</span>, and 
            <span className="text-white"> WordPress</span>.
          </p>

          <p className="mt-4 text-gray-400">
            Start your journey and become a professional developer with practical learning.
          </p>

          <div className="flex gap-4 mt-8">
            <Link href="/blog">
              <button className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-lg">
                Explore Blogs
              </button>
            </Link>

            <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Get Started
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

      {/* 💡 BLOG SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Popular Blogs
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "How to Learn JavaScript in 2025?",
              desc: "Master JavaScript with modern concepts and real-world examples.",
            },
            {
              title: "Complete Next.js Guide",
              desc: "Learn SSR, API routes, and full-stack development with Next.js.",
            },
            {
              title: "React Best Practices",
              desc: "Improve performance and write clean React code.",
            },
          ].map((blog, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-300">{blog.desc}</p>

              <Link href="/blog">
                <button className="mt-4 text-blue-400 hover:underline">
                  Read More →
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <section className="text-center pb-20 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold"
        >
          Ready to Start Your Journey?
        </motion.h2>

        <p className="text-gray-400 mt-4">
          Learn, build, and grow with modern technologies.
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-lg">
          Get Started Now
        </button>
      </section>

    </div>
  );
}