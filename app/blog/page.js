"use client";

import { posts } from "../data/posts";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen px-6 py-20">

      {/* 🔥 HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Explore My Blogs
        </motion.h1>

        <p className="text-gray-400 mt-4">
          Learn web development with practical guides, tips, and real-world examples.
        </p>
      </div>

      {/* 💡 BLOG GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>

    </div>
  );
}