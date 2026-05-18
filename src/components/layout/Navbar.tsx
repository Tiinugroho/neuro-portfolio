"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Menambahkan menu Experience dan Publications ke dalam navigasi
const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#projects",
  },
  {
    label: "Publications",
    href: "#activities",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b-4 border-black bg-[#f5f5f5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black uppercase tracking-tight md:text-3xl text-black">
          TIINUGROHO
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="font-black uppercase text-black hover:text-[#ff5c00] transition-colors hover:-translate-y-1 duration-200">
              {item.label}
            </Link>
          ))}

          {/* Tombol Resume diubah menjadi link download CV */}
          <a href="/CV_Muhammad_Jati_Nugroho.pdf" download="CV_Muhammad_Jati_Nugroho.pdf" className="neuro-button bg-[#ffe600] px-5 py-2 font-black uppercase text-black text-center">
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="neuro-button bg-[#00d9ff] p-2 text-black md:hidden border-2 border-black shadow-[4px_4px_0px_black]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Layout with Framer Motion Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t-4 border-black bg-[#f5f5f5] md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-lg font-black uppercase text-black border-b-2 border-black/10 pb-2 active:text-[#ff5c00]">
                  {item.label}
                </Link>
              ))}

              <a href="/CV_Muhammad_Jati_Nugroho.pdf" download="CV_Muhammad_Jati_Nugroho.pdf" onClick={() => setIsOpen(false)} className="neuro-button mt-4 bg-[#ffe600] px-5 py-3 font-black uppercase text-black text-center w-full block">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}