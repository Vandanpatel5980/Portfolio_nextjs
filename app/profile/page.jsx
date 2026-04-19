"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        setTimeout(() => {
            window.location.href = "/login";
        }, 1000);
        return;
      }

      try {
        const res = await fetch("/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          toast.error("Failed to load profile");
          return;
        }

        setUser(data.user);
      } catch (error) {
        toast.error("Something went wrong");
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#111827] px-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          My Profile 👤
        </h2>

        {loading ? (
          <div className="animate-pulse text-gray-400">Loading...</div>
        ) : (
          <>
            {/* AVATAR */}
            <div className="w-20 h-20 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-3xl text-white font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            {/* NAME */}
            <h3 className="text-xl text-white mt-4 font-semibold">
              {user?.name}
            </h3>

            {/* EMAIL */}
            <p className="text-gray-300 mt-1">
              {user?.email}
            </p>

            {/* BUTTON */}
            <button
              className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
              onClick={() => toast("Edit feature coming soon ✏️")}
            >
              Edit Profile
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}