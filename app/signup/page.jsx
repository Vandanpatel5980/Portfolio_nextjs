"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setLoading(false);

      if (!res.ok) {
        toast.error(result.error || "Signup failed ❌");
        return;
      }

      toast.success("Account created 🚀");
      router.push("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE (FORM CARD) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#0B1120] to-[#020617] px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-center text-white">
            Create your <span className="text-indigo-400">account</span>
          </h2>

          <p className="text-gray-400 text-center mt-2">
            Join us today and start your journey
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: true })}
                className="w-full pl-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-indigo-500"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full pl-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-indigo-500"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="w-full pl-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-indigo-500"
              />
            </div>

            {/* TERMS */}
            <div className="flex items-center text-sm text-gray-400">
              <input type="checkbox" className="mr-2 accent-indigo-500" />I
              agree to{" "}
              <span className="text-indigo-400 ml-1 cursor-pointer">Terms</span>{" "}
              &{" "}
              <span className="text-indigo-400 ml-1 cursor-pointer">
                Privacy
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400">
              Login
            </Link>
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE (FULL HEIGHT IMAGE) */}
      <div className="hidden md:flex w-1/2 h-screen">
        <img
          src="/signup1.png"
          alt="developer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
