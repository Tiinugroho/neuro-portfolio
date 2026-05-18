"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Cek apakah mouse berada di atas tombol atau link
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: "spring", stiffness: 2000, damping: 50, mass: 0.1 }}
    >
      {isHovering ? (
        /* ================= KURSOR HOVER: RETRO PC MONITOR ================= */
        /* Digeser tepat setengah ukuran (-22px) agar titik klik tepat di tengah layar komputer */
        <div className="relative -left-[22px] -top-[22px] transition-transform duration-200">
          <svg width="44" height="44" viewBox="0 0 32 32" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[4px_4px_0px_black] scale-110 rotate-[-5deg]">
            {/* Monitor Bezel (Bingkai) */}
            <rect x="2" y="4" width="28" height="18" rx="2" fill="#ffe600" />
            
            {/* Screen (Layar) */}
            <rect x="5" y="7" width="22" height="12" fill="#00d9ff" />
            
            {/* Code Lines di Layar (Opsional untuk detail) */}
            <line x1="8" y1="10" x2="14" y2="10" stroke="black" strokeWidth="2" />
            <line x1="8" y1="14" x2="20" y2="14" stroke="black" strokeWidth="2" />
            
            {/* Leher Monitor */}
            <rect x="14" y="22" width="4" height="4" fill="#ffe600" />
            
            {/* Base (Pijakan Bawah) */}
            <rect x="8" y="26" width="16" height="4" rx="1" fill="#ff5c00" />
          </svg>
        </div>
      ) : (
        /* ================= KURSOR NORMAL: CHUNKY ARROW ================= */
        <div className="relative -left-[8px] -top-[4px] transition-transform duration-200">
          <svg width="36" height="36" viewBox="0 0 32 32" fill="#00d9ff" stroke="black" strokeWidth="2" strokeLinejoin="round" className="drop-shadow-[4px_4px_0px_black]">
            <path d="M7 3 L7 27 L13 21 L18 31 L22 29 L17 19 L25 18 Z" />
          </svg>
        </div>
      )}
    </motion.div>
  );
}