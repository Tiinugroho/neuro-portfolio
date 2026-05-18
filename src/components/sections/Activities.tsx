"use client";

import { motion } from "framer-motion";
import { FaBookOpen, FaUsers, FaPenNib, FaProjectDiagram } from "react-icons/fa";

const publications = [
  {
    title: "Rancang Bangun Aplikasi Input Jamaah Umroh Pada PT. Samira Travel Pekanbaru Dengan Metode Waterfall",
    publisher: "Jurnal Teknik Informatika (JATI) - UMRI",
    date: "Sep 2024",
    icon: FaPenNib,
    bgColor: "bg-[#00d9ff]", // Cyan
  },
  {
    title: "Design of a Vehicle Maintenance Information System at PT Petro Artha Indo",
    publisher: "Jinteks - Universitas Muhammadiyah Riau",
    date: "Nov 2023",
    icon: FaBookOpen,
    bgColor: "bg-[#ffe600]", // Yellow
  },
];

const organizations = [
  {
    role: "Research and Development & Koordinator Lapangan",
    organization: "NexusHub (Pelatihan Website Fundamentals)",
    desc: "Mengembangkan materi ajar dan teknologi terbaru, serta menjadi koordinator lapangan dalam pelatihan dasar website.",
    icon: FaProjectDiagram,
    bgColor: "bg-[#ff5c00]", // Orange
    textColor: "text-white",
  },
  {
    role: "Anggota Aktif",
    organization: "OPTIK & IT Syar'i UMRI",
    desc: "Berpartisipasi aktif dalam Organisasi Pecinta Teknologi Informasi & Komunikasi dan IT Syar'i di lingkungan kampus.",
    icon: FaUsers,
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="relative overflow-hidden bg-[#f5f1ea] px-4 py-24 md:px-6 text-black min-h-screen flex items-center">
      
      {/* Noise Effect */}
      <div className="noise" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-block bg-black px-4 py-1 mb-6 neuro-card border-none shadow-[4px_4px_0px_#ff5c00]">
             <p className="font-black uppercase tracking-widest text-[#00d9ff]">
               Beyond Coding
             </p>
          </div>
          <h2 className="text-4xl font-black uppercase leading-none md:text-7xl">
            Publications <br /> & Leadership
          </h2>
        </motion.div>

        {/* Content Grid: 2 Columns */}
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* COLUMN 1: KARYA ILMIAH */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-3xl font-black uppercase mb-4 flex items-center gap-3">
              <span className="bg-black text-white px-3 py-1 neuro-card border-none">01</span>
              Scientific Works
            </h3>
            
            {publications.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`neuro-card p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 ${item.bgColor}`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="inline-block bg-black text-white font-black uppercase px-3 py-1 text-xs border-2 border-black">
                      {item.date}
                    </div>
                    <Icon className="text-3xl opacity-80" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black uppercase leading-tight mb-3">
                    {item.title}
                  </h4>
                  <p className="font-bold border-t-2 border-black pt-3">
                    {item.publisher}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* COLUMN 2: ORGANISASI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-3xl font-black uppercase mb-4 flex items-center gap-3">
              <span className="bg-black text-white px-3 py-1 neuro-card border-none">02</span>
              Organizations
            </h3>
            
            {organizations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`neuro-card p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 ${item.bgColor} ${item.textColor}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-black text-white border-2 border-current">
                      <Icon className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase leading-tight">
                        {item.organization}
                      </h4>
                      <p className="font-bold opacity-90 mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-sm md:text-base leading-relaxed border-t-2 border-current pt-4">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}