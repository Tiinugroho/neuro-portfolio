"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Logika untuk mendeteksi scroll layar
  useEffect(() => {
    const handleScroll = () => {
      // Tombol akan muncul jika layar di-scroll lebih dari 400px ke bawah
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= FAB (FLOATING ACTION BUTTON) BACK TO TOP ================= */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center bg-[#00d9ff] border-4 border-black text-black shadow-[6px_6px_0px_black] hover:-translate-y-2 hover:shadow-[6px_10px_0px_black] transition-all duration-200"
          >
            <FaArrowUp className="text-2xl font-black" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ================= MAIN FOOTER SECTION ================= */}
      <footer className="relative overflow-hidden bg-[#111111] text-white border-t-4 border-black pt-24 pb-8">
        {/* Noise Effect */}
        <div className="noise opacity-10 invert" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          
          {/* Bagian Atas: Tipografi Raksasa */}
          <div className="flex flex-col items-center justify-center border-b-4 border-white/20 pb-16 text-center">
            <h2 className="text-[12vw] md:text-[8rem] font-black uppercase leading-none tracking-tighter text-[#ffe600] drop-shadow-[6px_6px_0px_#ff5c00] md:drop-shadow-[10px_10px_0px_#ff5c00]">
              TIINUGROHO
            </h2>
            <div className="mt-6 inline-block bg-[#ff4fd8] text-black px-6 py-2 border-2 border-black font-black uppercase tracking-widest rotate-[-2deg] shadow-[4px_4px_0px_white]">
              Fullstack Developer
            </div>
          </div>

          {/* Bagian Bawah: Navigasi & Copyright */}
          <div className="mt-12 flex flex-col items-center justify-between gap-8 md:flex-row">
            
            {/* Navigasi Footer */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-black uppercase tracking-wider text-gray-400">
              <Link href="#about" className="hover:text-[#00d9ff] hover:-translate-y-1 transition-all">About</Link>
              <Link href="#skills" className="hover:text-[#ffe600] hover:-translate-y-1 transition-all">Skills</Link>
              <Link href="#projects" className="hover:text-[#ff5c00] hover:-translate-y-1 transition-all">Experience</Link>
              <Link href="#activities" className="hover:text-[#ff4fd8] hover:-translate-y-1 transition-all">Publications</Link>
              <Link href="#contact" className="hover:text-white hover:-translate-y-1 transition-all">Contact</Link>
            </nav>

            {/* Copyright & Built With */}
            <div className="text-center md:text-right">
              <p className="font-bold text-xs uppercase tracking-widest text-gray-500">
                © {new Date().getFullYear()} Muhammad Jati Nugroho.
              </p>
              
              {/* Teks "Built with Next.js" dengan Ikon */}
              <p className="font-bold text-[10px] uppercase tracking-widest text-gray-600 mt-2 flex items-center justify-center md:justify-end gap-1.5">
                BUILT WITH <SiNextdotjs className="text-sm text-white" /> NEXT.JS
              </p>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}