"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiFigma,
  SiPython
} from "react-icons/si";

// Total 12 Skill: Pas untuk layout grid 12 kolom
const skills = [
  { name: "Next.js", icon: SiNextdotjs, hoverClass: "group-hover:bg-black group-hover:text-white" },
  { name: "TypeScript", icon: SiTypescript, hoverClass: "group-hover:bg-[#3178C6] group-hover:text-white" },
  { name: "Tailwind", icon: SiTailwindcss, hoverClass: "group-hover:bg-[#06B6D4] group-hover:text-black" },
  { name: "Bootstrap", icon: SiBootstrap, hoverClass: "group-hover:bg-[#7952B3] group-hover:text-white" },
  { name: "PHP", icon: SiPhp, hoverClass: "group-hover:bg-[#777BB4] group-hover:text-white" },
  { name: "Laravel", icon: SiLaravel, hoverClass: "group-hover:bg-[#FF2D20] group-hover:text-white" },
  { name: "CodeIgniter", icon: SiCodeigniter, hoverClass: "group-hover:bg-[#EE4623] group-hover:text-white" },
  { name: "MySQL", icon: SiMysql, hoverClass: "group-hover:bg-[#00758F] group-hover:text-white" },
  { name: "PostgreSQL", icon: SiPostgresql, hoverClass: "group-hover:bg-[#336791] group-hover:text-white" },
  { name: "Python", icon: SiPython, hoverClass: "group-hover:bg-[#3776AB] group-hover:text-white" },
  { name: "Github", icon: SiGithub, hoverClass: "group-hover:bg-black group-hover:text-white" },
  { name: "Figma", icon: SiFigma, hoverClass: "group-hover:bg-[#F24E1E] group-hover:text-white" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative flex min-h-screen items-center overflow-hidden bg-[#ffe600] px-4 py-24 md:px-6">
      
      {/* Noise Effect */}
      <div className="noise" />

      {/* Decorative Random Floating Icons (Background) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        <SiLaravel className="absolute top-10 left-10 text-9xl rotate-[15deg]" />
        <SiNextdotjs className="absolute top-1/4 right-20 text-9xl rotate-[-20deg]" />
        <SiMysql className="absolute bottom-20 left-1/4 text-9xl rotate-[45deg]" />
        <SiPhp className="absolute bottom-10 right-10 text-[12rem] rotate-[-10deg]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        
        {/* Heading & Teks Informatif */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block bg-black px-4 py-1 mb-6 neuro-card border-none shadow-[4px_4px_0px_white]">
             <p className="font-black uppercase tracking-widest text-[#ffe600]">
               My Skills
             </p>
          </div>
          <h2 className="text-4xl font-black uppercase leading-none md:text-7xl lg:text-8xl">
            Tech Stack
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-bold leading-relaxed text-black/80">
            Kumpulan teknologi dan alat yang saya gunakan untuk merancang dan membangun sistem digital. Mulai dari arsitektur <b>backend</b> yang tangguh, manajemen basis data, riset algoritma <b>machine learning</b>, hingga pembuatan antarmuka web yang modern dan responsif.
          </p>
        </motion.div>

        {/* Skills Grid: 3 di mobile, 6 di tablet, 12 di desktop */}
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6 lg:grid-cols-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, rotate: index % 2 === 0 ? -4 : 4 }}
                className="group w-full cursor-pointer"
              >
                <div className={`neuro-card aspect-square flex items-center justify-center text-black bg-white transition-colors duration-300 ${skill.hoverClass}`}>
                  {/* Hanya Ikon yang ditampilkan */}
                  <Icon className="h-8 w-8 md:h-10 md:w-10 transition-colors duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}