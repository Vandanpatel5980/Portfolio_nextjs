"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Fetch logged user
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log('token',token);

      if (!token) return;

      try {
        // const token = localStorage.getItem("token");

        const res = await fetch("/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log(data,'data');
        if (res.ok) {
          setUser(data.user);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-xl font-bold text-white">
            Vandan<span className="text-blue-500">Dev</span>
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-gray-300 items-center">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

          {/* PROFILE DROPDOWN */}
          {/* PROFILE DROPDOWN */}
          <div className="relative group ml-4">
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold cursor-pointer">
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 mt-3 w-48 bg-[#111827] border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {/* ✅ USER NAME */}
              <div className="px-4 py-2 border-b border-white/10 text-white font-semibold">
                {user?.name || "Guest"}
              </div>

              <Link
                href="/profile"
                className="block px-4 py-2 text-sm hover:bg-white/10"
              >
                My Profile
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-white/10 text-red-400"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0f172a] px-6 pb-4 text-gray-300 space-y-3">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/about" className="block">
            About
          </Link>
          <Link href="/blog" className="block">
            Blog
          </Link>
          <Link href="/contact" className="block">
            Contact
          </Link>

          {/* Mobile Profile */}
          <div className="pt-3 border-t border-white/10">
            <Link href="/profile" className="block">
              My Profile
            </Link>
            <Link href="/settings" className="block">
              Settings
            </Link>
            <button className="block text-red-400">Logout</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
