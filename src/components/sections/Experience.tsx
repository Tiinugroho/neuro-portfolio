"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaCheckCircle, FaBuilding } from "react-icons/fa";

// Data pengalaman kerja yang diekstrak langsung dari CV Anda
const experiences = [
  {
    company: "Gamifix ID",
    project: "Ruang Restu",
    role: "Founder & Lead Developer",
    date: "Mar 2026 - Apr 2026",
    bgColor: "bg-[#ffe600]", // Kuning
    textColor: "text-black",
    achievements: [
      "Merancang dan membangun WhatsApp Gateway Server mandiri untuk layanan WA Blast otomatis serta platform undangan digital.",
      "Mengintegrasikan API gerbang pembayaran (Midtrans) untuk otomatisasi aktivasi layanan 24/7.",
      "Menyusun rumus logika harga otomatis (auto-pricing) yang dinamis untuk penyesuaian paket layanan."
    ],
    tech: ["WhatsApp API", "Midtrans", "Web Platform"]
  },
  {
    company: "Dwin IT Solutions",
    project: "Bina Alam Lestari (Lab Management System)",
    role: "Fullstack Developer",
    date: "Nov 2025 - Apr 2026",
    bgColor: "bg-[#00d9ff]", // Cyan
    textColor: "text-black",
    achievements: [
      "Merancang dan membangun arsitektur sistem informasi laboratorium terpadu menggunakan framework CodeIgniter 4 dan MySQL.",
      "Membangun sistem Content Management System (CMS) yang dinamis untuk pengelolaan profil perusahaan dan portofolio layanan."
    ],
    tech: ["CodeIgniter 4", "MySQL", "CMS"]
  },
  {
    company: "Dwin IT Solutions",
    project: "Darunnajah Duri (Digital Financial System)",
    role: "Fullstack Developer",
    date: "Sep 2025 - Oct 2025",
    bgColor: "bg-[#ff5c00]", // Orange
    textColor: "text-white",
    achievements: [
      "Membangun arsitektur sistem informasi akuntansi berbasis web menggunakan framework Laravel dan MySQL.",
      "Mengimplementasikan pelaporan keuangan digital dan sistem keamanan Role-Based Access Control (RBAC)."
    ],
    tech: ["Laravel", "MySQL", "RBAC"]
  },
  {
    company: "Universitas Muhammadiyah Riau",
    project: "FaQAS (Faculty Quality Assurance System)",
    role: "Fullstack Developer",
    date: "Nov 2024 - Jul 2025",
    bgColor: "bg-white", // Putih
    textColor: "text-black",
    achievements: [
      "Membangun arsitektur sistem penjaminan mutu akademik menggunakan Laravel dan MySQL untuk digitalisasi audit internal.",
      "Merancang Dashboard Analitik untuk mempermudah pimpinan fakultas dalam memonitoring capaian indikator mutu real-time."
    ],
    tech: ["Laravel", "MySQL", "Data Analytics"]
  }
];

export default function Experience() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#ff4fd8] px-4 py-24 md:px-6 text-white min-h-screen">
      
      {/* Noise Effect */}
      <div className="noise" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block bg-black px-4 py-1 mb-6 neuro-card border-none shadow-[4px_4px_0px_white]">
             <p className="font-black uppercase tracking-widest text-[#00d9ff]">
               Experience & Projects
             </p>
          </div>
          <h2 className="text-4xl font-black uppercase leading-none md:text-7xl lg:text-8xl">
            Work <br /> Journey
          </h2>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((item, index) => (
            <motion.div
              key={item.project}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`neuro-card flex flex-col justify-between p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 ${item.bgColor} ${item.textColor}`}
            >
              <div>
                {/* Header Card: Role & Date */}
                <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black uppercase leading-tight md:text-3xl">
                      {item.project}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-lg font-bold">
                      <FaBuilding className="opacity-70" /> {item.company}
                    </p>
                    <p className="mt-1 font-bold opacity-80">
                      {item.role}
                    </p>
                  </div>
                  
                  {/* Badge Tanggal */}
                  <div className="inline-flex h-fit items-center gap-2 border-2 border-current px-3 py-1 font-black uppercase whitespace-nowrap neuro-card shadow-[4px_4px_0px_currentColor]">
                    <FaCalendarAlt />
                    <span className="text-sm">{item.date}</span>
                  </div>
                </div>

                {/* Deskripsi Pencapaian (Achievements) */}
                <ul className="mt-6 space-y-3 border-t-2 border-current pt-6">
                  {item.achievements.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 font-bold">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-lg" />
                      <span className="leading-relaxed text-sm md:text-base">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {item.tech.map((techItem, i) => (
                  <span key={i} className="border-2 border-current px-3 py-1 text-xs font-black uppercase">
                    {techItem}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}