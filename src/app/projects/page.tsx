'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/assets/assets';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const ProjectsPage = () => {
    return (
        <main className="min-h-screen bg-slate-900 text-gray-100">
            <Navbar />

            <section className='pt-32 pb-20'>
                <div className='container mx-auto px-6'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='mb-12'
                    >
                        <Link href="/" className='inline-flex items-center text-sky-400 hover:text-sky-300 transition mb-8 group'>
                            <FaArrowLeft className='mr-2 transform group-hover:-translate-x-1 transition' />
                            Back to Home
                        </Link>

                        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                            Case <span className='text-sky-400'>Studies</span>
                        </h1>
                        <p className='text-gray-400 max-w-2xl text-lg'>
                            A deep dive into some of the projects I&apos;ve built, reflecting the challenges, solutions, and impact of each endeavor.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ProjectsPage;
