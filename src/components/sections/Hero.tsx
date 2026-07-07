"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// Pastikan Anda mengimpor ikon-ikon ini dari react-icons
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-32 pb-20 px-6 bg-[#f5f1ea]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <div
                        className=" inline-flex items-center gap-2 neuro-card px-4 py-2 bg-[#00d9ff] mb-6 font-black uppercase"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
                        Fullstack Developer
                    </div>

                    {/* Heading */}
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none"
                    >
                        Muhammad <br />
                        Jati <br />
                        Nugroho
                    </h1>

                    {/* Deskripsi */}
                    <p
                        className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed"
                    >
                        Biasa dikenal sebagai <strong>Jati Nugroho</strong>. Saya adalah <strong>Fullstack Developer</strong> di PT Garuda Cyber Indonesia dengan pengalaman 2+ tahun. <br className="hidden md:block" /> 
                        Berfokus pada pengembangan solusi digital <em>end-to-end</em> menggunakan ekosistem <strong>Laravel, CodeIgniter, Next.js, Node.js</strong>, serta integrasi <strong>Machine Learning</strong>.
                    </p>

                    {/* Social Links (Opsional: Sesuaikan link dengan profil asli Anda) */}
                    <div className="flex gap-4 mt-8">
                        <a
                            href="https://github.com/Tiinugroho" // Ganti dengan link Github Anda
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neuro-button bg-white text-black p-3 hover:-translate-y-1 transition-transform"
                            aria-label="GitHub"
                        >
                            <FaGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-jati-nugroho/" // Ganti dengan link LinkedIn Anda
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neuro-button bg-[#0077b5] text-white p-3 hover:-translate-y-1 transition-transform"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a
                            href="mailto:mhdjatinugroho@gmail.com"
                            className="neuro-button bg-[#ea4335] text-white p-3 hover:-translate-y-1 transition-transform"
                            aria-label="Email"
                        >
                            <FaEnvelope className="text-2xl" />
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className=" neuro-button inline-flex items-center gap-3 bg-[#ff5c00] text-white px-8 py-4 font-black uppercase"
                        >
                            Explore Projects <FaArrowRight />
                        </a>

                        {/* Tombol Download CV */}
                        <a
                            href="/CV_Muhammad_Jati_Nugroho.pdf"
                            download="CV_Muhammad_Jati_Nugroho.pdf"
                            className=" neuro-button inline-flex items-center gap-3 bg-[#ffe600] text-black px-8 py-4 font-black uppercase"
                        >
                            <FaDownload /> Download CV
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative flex justify-center"
                >
                    <div
                        className=" neuro-card bg-[#ff5c00] p-4 max-w-md w-full"
                    >
                        <Image
                            src="/images/profile-2.jpg"
                            alt="Muhammad Jati Nugroho"
                            width={800}
                            height={800}
                            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            priority
                        />
                    </div>

                    {/* Floating Element 1 */}
                    <div
                        className=" absolute -top-6 -left-6 neuro-card bg-[#ffe600] text-black px-6 py-3 font-black uppercase rotate-[-6deg]"
                    >
                        2+ Years Experience
                    </div>

                    {/* Floating Element 2 */}
                    <div
                        className=" absolute -bottom-6 -right-6 neuro-card bg-[#00d9ff] text-black px-6 py-3 font-black uppercase rotate-[4deg]"
                    >
                        Pekanbaru, ID
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
