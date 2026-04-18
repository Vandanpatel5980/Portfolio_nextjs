"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleonchange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "name") setName(value);
    if (name === "message") setMessage(value);
  };

  const handlesuubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      setLoading(true);

      const res = await fetch("/api/postcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      await res.json();

      // ✅ Success Toast
      toast.success("Message sent successfully 🚀");

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      // ❌ Error Toast
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0f172a] text-white min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold">Get In Touch 📩</h1>

          <p className="mt-4 text-gray-400">
            Have a project idea? Let’s connect and build something amazing.
          </p>

          <div className="mt-8 space-y-4 text-gray-300">
            <p>📧 vandan@gmail.com</p>
            <p>📞 +91 9876543210</p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl"
        >
          <form onSubmit={handlesuubmit} className="space-y-5">

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleonchange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-500"
              required
            />

            <input
              type="text"
              name="name"
              value={name}
              onChange={handleonchange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-500"
              required
            />

            <textarea
              name="message"
              rows="4"
              value={message}
              onChange={handleonchange}
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-500"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 rounded-lg font-semibold shadow-lg transition 
              ${loading 
                ? "bg-gray-500 cursor-not-allowed" 
                : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;