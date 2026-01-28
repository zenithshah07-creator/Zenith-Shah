'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { trackEvent } from '@/utils/analytics'; // We will need to migrate analytics too

const Hero = () => {
    return (
        <section id='home' className='relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20'>
            {/* Background Elements */}
            <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
                <div className='absolute top-[-10%] left-[-10%] w-96 h-96 bg-sky-500/20 rounded-full blur-[100px] animate-pulse'></div>
                <div className='absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000'></div>
            </div>

            <div className='container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center'>
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className='space-y-6'
                >
                    <div className='inline-block px-4 py-2 bg-slate-800 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium'>
                        Zenith Shah — Frontend Developer
                    </div>

                    <h1 className='text-4xl md:text-7xl font-bold leading-tight text-white mb-4'>
                        Zenith Shah
                        <span className='block text-2xl md:text-4xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-500 animate-gradient'>
                            Frontend Developer
                        </span>
                    </h1>

                    <p className='text-gray-400 text-sm md:text-base font-medium bg-slate-800/50 inline-block px-4 py-2 rounded-lg border border-white/5'>
                        (Legal name: Jenish Shah)
                    </p>

                    <p className='text-gray-400 text-lg max-w-xl leading-relaxed'>
                        Frontend Specialist at <span className="text-sky-400 font-medium">Academy of Code</span>. I translate complex business needs into scalable React & Next.js architectures that recruiters and users love.
                    </p>

                    <div className='flex flex-wrap gap-4 pt-2'>
                        <a
                            href="/JenishShahResume.pdf"
                            target="_blank"
                            onClick={() => trackEvent('Resume', 'Download', 'Hero Section')}
                            className='px-8 py-4 bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:-translate-y-1 transition-all duration-300'
                        >
                            Get Resume
                        </a>
                        <a
                            href="#projects"
                            className='px-8 py-4 bg-slate-800 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300'
                        >
                            View Projects
                        </a>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='relative flex justify-center items-center'
                >
                    <div className='relative w-80 h-80 md:w-96 md:h-96'>
                        <div className='absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse'></div>
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className='relative w-full h-full z-10'
                        >
                            <Image
                                src={assets.profileImg}
                                alt="Zenith Shah - Full Stack Developer Profile" // SEO: Contextual alt text
                                className='object-cover rounded-full border-4 border-slate-900 shadow-2xl'
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className='absolute -bottom-4 -left-4 bg-slate-800 px-5 py-3 rounded-xl border border-white/10 shadow-xl flex flex-col gap-1 z-20'
                        >
                            <div className="flex items-center gap-2">
                                <div className='w-2 h-2 bg-green-500 rounded-full animate-ping'></div>
                                <span className='text-xs font-bold uppercase tracking-wider text-gray-300'>Availability</span>
                            </div>
                            <span className='text-sm font-medium text-white'>Open to Remote / Relocation</span>
                            <span className='text-[10px] text-gray-500 font-medium'>Currently in Kathmandu, NP</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
