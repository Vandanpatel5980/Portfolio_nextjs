"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setLoading(false);

      if (!res.ok) {
        toast.error(result.error || "Login failed ❌");
        return;
      }

      localStorage.setItem("token", result.token);

      toast.success("Login successful 🎉");
      window.location.href = "/";
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE (FORM) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#111827] px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white text-center">
            Welcome Back 👋
          </h2>

          <p className="text-gray-300 text-center mt-2">Login to continue</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email required" })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white outline-none border border-white/20"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: "Password required" })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white outline-none border border-white/20"
              />

              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 text-gray-300 cursor-pointer"
              >
                👁️
              </span>

              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex items-center justify-between text-sm mt-2">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input type="checkbox" className="accent-indigo-500 w-4 h-4" />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-indigo-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-gray-300 mt-6 text-sm">
            Don’t have account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">
              Signup
            </Link>
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE (FULL HEIGHT IMAGE) */}
      <div className="hidden md:flex w-1/2 h-screen">
        <img
          src="/signup1.png"
          alt="login visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
