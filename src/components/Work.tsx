'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { workData } from '@/assets/assets';

const Work = () => {
    return (
        <section id='Experience' className='py-20 bg-slate-900 relative overflow-hidden'>
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>

            <div className='container mx-auto px-6 relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className='text-4xl font-bold mb-4 text-white'>
                        Work <span className='text-sky-400'>Experience</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
                    <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>My professional journey so far</p>
                </motion.div>

                <div className='max-w-4xl mx-auto'>
                    <div className='space-y-12 relative'>
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-purple-500 opacity-20 transform md:-translate-x-1/2"></div>

                        {
                            workData.map((data, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className='absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-sky-400 rounded-full border-4 border-slate-800 shadow-[0_0_20px_rgba(56,189,248,0.5)] z-10 transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5'></div>

                                    {/* Spacer for alternating layout */}
                                    <div className="flex-1 hidden md:block"></div>

                                    {/* Content Card */}
                                    <div className="flex-1 ml-12 md:ml-0">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className='bg-slate-800 p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 hover:bg-slate-800/80 transition-all duration-300 group cursor-default'
                                        >
                                            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2'>
                                                <h3 className='text-xl font-bold text-white group-hover:text-sky-400 transition-colors'>{data.role}</h3>
                                                <span className='inline-block px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full text-xs font-semibold whitespace-nowrap border border-sky-500/20'>
                                                    {data.duration}
                                                </span>
                                            </div>
                                            <h4 className='text-lg font-medium text-gray-300 mb-3'>{data.company}</h4>
                                            <p className='text-gray-400 leading-relaxed text-sm'>
                                                {data.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Work
