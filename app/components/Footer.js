"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email ❌");
      return;
    }

    alert("Subscribed successfully ✅");
    setEmail("");
  };

  return (
    <footer className="bg-[#020617] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* 🔹 ABOUT */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">VandanDev</h2>
          <p>
            Building modern web applications using React, Next.js, PHP, and
            WordPress.
          </p>
        </div>

        {/* 🔹 QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* 🔹 CONTACT DETAILS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-blue-500" />
            <a
              href="mailto:vandanrpatel5980@gmail.com"
              className="hover:text-white transition"
            >
              vandanrpatel5980@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-500" />
            <a href="tel:+919313017941" className="hover:text-white transition">
              +91 9313017941
            </a>
          </div>
        </div>

        {/* 🔹 NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 🔻 SOCIAL + COPYRIGHT */}
      <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
        {/* SOCIAL ICONS */}
        <div className="flex gap-5 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaTwitter />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-500">
          © 2026 VandanDev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
