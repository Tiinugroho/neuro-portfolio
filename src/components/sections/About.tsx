"use client";

import { motion } from "framer-motion";
import { FaCode, FaBrain, FaGraduationCap, FaServer } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#00d9ff] px-6 py-24 text-black"
    >
      {/* Noise Effect */}
      <div className="noise" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* LEFT SIDE: Heading & Decorative */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative inline-block">
              <p className="mb-4 inline-block bg-black px-4 py-1 font-black uppercase tracking-widest text-[#00d9ff] neuro-card border-none shadow-[4px_4px_0px_white]">
                About Me
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] md:text-7xl lg:text-[5.5rem]">
              Building
              <br />
              <span className="text-white drop-shadow-[4px_4px_0px_black]">Digital</span>
              <br />
              Systems
            </h2>
            
            <p className="mt-8 text-lg font-bold leading-relaxed max-w-md">
              Memadukan arsitektur web modern dengan kemampuan analitis untuk menciptakan platform yang terstruktur, efisien, dan berdampak nyata.
            </p>
          </motion.div>

          {/* RIGHT SIDE: Bento Grid / Brutalist Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-7">
            
            {/* Card 1: Who Am I - Full Width */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="neuro-card bg-[#ffe600] p-8 md:col-span-2 hover:-translate-y-2 transition-transform duration-300 rotate-[-1deg]"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-3xl font-black uppercase">Who Am I?</h3>
                <FaCode className="text-4xl text-black/50" />
              </div>
              <p className="text-lg font-bold leading-relaxed">
                Saya adalah Fullstack Developer yang berfokus pada pengembangan sistem manajemen terpusat, platform akuntansi digital, dan infrastruktur web tangguh menggunakan ekosistem Laravel, CodeIgniter, serta Next.js.
              </p>
            </motion.div>

            {/* Card 2: Education - Half Width */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="neuro-card bg-white p-8 hover:-translate-y-2 transition-transform duration-300 rotate-[2deg]"
            >
              <FaGraduationCap className="mb-4 text-4xl text-[#ff5c00]" />
              <h4 className="mb-2 text-xl font-black uppercase">Education</h4>
              <p className="font-bold text-gray-800">
                Universitas Muhammadiyah Riau
              </p>
              <p className="mt-2 text-sm font-bold text-gray-600">
                Sistem Informasi
              </p>
            </motion.div>

            {/* Card 3: Experience - Half Width */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="neuro-card bg-[#ff4fd8] p-8 text-white hover:-translate-y-2 transition-transform duration-300 rotate-[-2deg]"
            >
              <FaServer className="mb-4 text-4xl text-black" />
              <h4 className="mb-2 text-xl font-black uppercase text-black">Experience</h4>
              <p className="font-bold text-black text-3xl">2+ Years</p>
              <p className="mt-2 text-sm font-bold text-black/80">
                Professional Web Development
              </p>
            </motion.div>

            {/* Card 4: Research & Specialization - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="neuro-card bg-[#ff5c00] p-8 text-white md:col-span-2 hover:-translate-y-2 transition-transform duration-300 rotate-[1deg]"
            >
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-2xl font-black uppercase">Data & Research</h4>
                <FaBrain className="text-4xl text-black/30" />
              </div>
              <p className="text-lg font-bold leading-relaxed">
                Selain arsitektur <b>monolithic</b> dan pengembangan antarmuka, saya juga mendalami model <b>Machine Learning</b> (Supervised Learning) menggunakan Python untuk menganalisis risiko dan klasifikasi data skala besar.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}