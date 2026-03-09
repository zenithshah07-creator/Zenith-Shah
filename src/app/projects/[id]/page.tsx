'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/assets/assets';
import { slugify } from '@/utils/slugify';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLightbulb, FaExclamationTriangle, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

const ProjectDetail = () => {
    const params = useParams();
    const router = useRouter();
    const { id } = params;

    const project = projects.find(p => slugify(p.title) === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button
                        onClick={() => router.push('/projects')}
                        className="text-sky-400 hover:underline flex items-center justify-center mx-auto"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-900 text-gray-100">
            <Navbar />

            <article className='pt-32 pb-20'>
                <div className='container mx-auto px-6 max-w-4xl'>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='mb-12'
                    >
                        <Link href="/projects" className='inline-flex items-center text-sky-400 hover:text-sky-300 transition mb-8 group'>
                            <FaArrowLeft className='mr-2 transform group-hover:-translate-x-1 transition' />
                            Back to Projects
                        </Link>

                        <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
                            {project.title}
                        </h1>

                        <div className='flex flex-wrap gap-3 mb-8'>
                            {project.tech.map((t, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-sky-300">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className='flex gap-4'>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className='flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold transition shadow-lg shadow-sky-500/20'>
                                Live Demo <FaExternalLinkAlt size={14} />
                            </a>
                            <a href={project.code} target="_blank" rel="noopener noreferrer" className='flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold transition'>
                                Source Code <FaGithub size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-20 border border-white/5 shadow-2xl"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    </motion.div>

                    {/* Case Study Content */}
                    <div className="space-y-20">
                        {/* Summary Section */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 text-sm">01</span>
                                Overview
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </section>

                        {/* Problem & Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <section className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-3 text-red-400">
                                    <FaExclamationTriangle size={20} /> The Problem
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {project.problem}
                                </p>
                            </section>
                            <section className="p-8 rounded-3xl bg-green-500/5 border border-green-500/10">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-3 text-green-400">
                                    <FaCheckCircle size={20} /> The Solution
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {project.solution}
                                </p>
                            </section>
                        </div>

                        {/* Impact & Aha Moment */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <section className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-3 text-purple-400">
                                    <FaLightbulb size={20} /> Technical Challenge
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {project.technicalDifficulty}
                                </p>
                            </section>
                            <section className="p-8 rounded-3xl bg-sky-500/5 border border-sky-500/10">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-3 text-sky-400">
                                    <FaChartLine size={20} /> Impact
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {project.metrics}
                                </p>
                            </section>
                        </div>

                        {/* The Aha! Moment */}
                        <section className="p-10 rounded-3xl bg-gradient-to-br from-sky-500/10 via-slate-800 to-slate-900 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 text-sky-500/10">
                                <FaLightbulb size={120} />
                            </div>
                            <h2 className="text-2xl font-bold mb-6 text-white relative z-10">The &quot;Aha!&quot; Moment</h2>
                            <p className="text-xl text-gray-300 italic leading-relaxed relative z-10">
                                &quot;{project.ahaMoment}&quot;
                            </p>
                        </section>
                    </div>

                    {/* Bottom Navigation */}
                    <div className='mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8'>
                        <p className='text-gray-500'>Interested in seeing more?</p>
                        <Link href="/projects" className='px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-bold transition'>
                            Explore All Case Studies
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
};

export default ProjectDetail;
