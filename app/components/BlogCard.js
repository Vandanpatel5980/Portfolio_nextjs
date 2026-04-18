"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="h-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="h-full flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[200px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-grow">
          <p className="text-sm text-gray-400 mb-2">📅 {post.date}</p>

          <h2 className="text-xl font-semibold text-blue-400">{post.title}</h2>

          <p className="text-gray-300 mt-2 line-clamp-3 flex-grow">
            {post.description}
          </p>

          {/* BUTTON ALWAYS AT BOTTOM */}
          <span className="mt-4 text-blue-400 hover:underline">
            Read More →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
