"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919313017941"; // 👉 your number (no + sign)

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hi%20Vandan%2C%20I%20want%20to%20connect`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110">
        <FaWhatsapp size={28} />
      </div>

      {/* Tooltip */}
      <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat with me
      </span>
    </a>
  );
};

export default WhatsAppButton;
