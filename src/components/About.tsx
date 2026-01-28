'use client';

import React from "react";
import { motion } from "framer-motion";
import { assets, aboutInfo } from "@/assets/assets";
import { trackEvent } from "@/utils/analytics";
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900/50 relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        About <span className="text-sky-400">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Profile Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-30 blur-lg"></div>
                            <Image
                                src={assets.profile1}
                                alt="Zenith Shah (Jenish Shah) - Professional Headshot" // SEO: Descriptive alt text
                                width={320}
                                height={320}
                                className="relative z-10 rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105 border border-white/10"
                            />
                            <div className="mt-8 space-y-6">
                                <p className="text-gray-400 leading-relaxed text-base">
                                    I am a results-oriented developer currently seeking a <strong className="text-sky-400">full-time Frontend Developer role</strong>. I specialize in building scalable web architectures and am open to both remote work and relocation.
                                </p>
                                <p className="text-gray-400 leading-relaxed text-base pt-2">
                                    Hi, I&apos;m <strong className="text-white">Zenith Shah</strong> (Legal name: Jenish Shah). I build high-performance web applications using React and Next.js. My legal name is Jenish Shah. I work professionally under the name Zenith Shah. My portfolio showcases my journey as a <strong className="text-sky-400">Frontend Developer</strong> solving real-world problems.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="/JenishShahResume.pdf"
                                        target="_blank"
                                        onClick={() => trackEvent('Resume', 'Download', 'About Section')}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 rounded-lg text-white font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
                                    >
                                        <span>Download CV</span>
                                    </a>
                                    <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg text-gray-300 font-medium hover:border-white hover:text-white transition-all">
                                        <span>Let&apos;s Talk</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento Grid Stats/Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {aboutInfo.map((data, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-white/5 hover:border-sky-500/30 hover:bg-slate-800 transition-all duration-300"
                            >
                                <div className={`text-3xl mb-3 ${data.color || 'text-sky-400'}`}>
                                    <data.icon />
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">{data.title}</h4>
                                <p className="text-sm text-gray-400">{data.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default About;
