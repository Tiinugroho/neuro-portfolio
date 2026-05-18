"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="relative flex min-h-screen items-center overflow-hidden bg-[#ff5c00] px-4 py-24 md:px-6 text-black">
            {/* Noise Effect */}
            <div className="noise" />

            <div className="relative z-10 mx-auto w-full max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-12 items-center">

                    {/* Sisi Kiri: Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <div className="inline-block bg-black px-4 py-1 mb-6 neuro-card border-none shadow-[4px_4px_0px_white]">
                            <p className="font-black uppercase tracking-widest text-[#ff5c00]">
                                Get In Touch
                            </p>
                        </div>
                        <h2 className="text-4xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl text-white drop-shadow-[4px_4px_0px_black]">
                            LET'S <br/> WORK <br/> TOGETHER!
                        </h2>
                        <p className="mt-8 text-lg font-bold leading-relaxed max-w-md text-white">
                            Punya ide proyek menarik atau ingin berkolaborasi? Hubungi saya langsung melalui salah satu platform di samping!
                        </p>
                    </motion.div>

                    {/* Sisi Kanan: Kontak Bento Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:col-span-7 w-full">

                        {/* Card Email */}
                        <motion.a
                            href="mailto:mhdjatinugroho@gmail.com"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="neuro-card bg-white p-8 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300 group cursor-pointer rotate-[-1deg]"
                        >
                            <FaEnvelope className="text-4xl text-[#ff5c00]" />
                            <div>
                                <h4 className="text-xl font-black uppercase mb-1">Email Me</h4>
                                <p className="font-bold text-sm md:text-base text-gray-700 break-all">mhdjatinugroho@gmail.com</p>
                            </div>
                        </motion.a>

                        {/* Card WhatsApp */}
                        <motion.a
                            href="https://wa.me/6282173181404"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="neuro-card bg-[#00d9ff] p-8 flex flex-col justify-between min-h-[200px] hover:-translate-y-2 transition-transform duration-300 group cursor-pointer rotate-[1deg]"
                        >
                            <FaPhone className="text-4xl text-black" />
                            <div>
                                <h4 className="text-xl font-black uppercase mb-1">WhatsApp</h4>
                                <p className="font-black text-sm md:text-base text-black">+62 821-7318-1404</p>
                            </div>
                        </motion.a>

                        {/* Card Socials (Full Width di bawah) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="neuro-card bg-[#ffe600] p-8 md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rotate-[-0.5deg]"
                        >
                            <div>
                                <h4 className="text-2xl font-black uppercase">Social Networks</h4>
                                <p className="font-bold text-sm mt-1">Ikuti perkembangan proyek dan aktivitas saya sehari-hari.</p>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://github.com/Tiinugroho" target="_blank" rel="noopener noreferrer" className="neuro-button bg-black text-white p-4 text-xl hover:-translate-y-1 transition-transform" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                                <a href="https://linkedin.com/in/jatinugrohoo" target="_blank" rel="noopener noreferrer" className="neuro-button bg-[#0077b5] text-white p-4 text-xl hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_black]" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}