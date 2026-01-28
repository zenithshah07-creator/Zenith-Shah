'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/assets/assets';
import { FaArrowRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id='projects'
            className='py-20 bg-slate-900'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4 text-white'>
                    My <span className='text-sky-400'>Projects</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my recent work</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {/* Project Card */}
                    {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        projects.map((project: any, index: number) => (
                            <ProjectCard key={index} {...project} />
                        ))
                    }
                </div>
                <div className='text-center mt-12'>
                    <a href="#" className='inline-flex items-center px-6 py-3 border border-sky-600 rounded-lg font-medium hover:bg-sky-400 transition text-sky-300 hover:text-white'>
                        View All Projects
                        <FaArrowRight className='ml-2' />
                    </a>
                </div>
            </div>

        </motion.div>
    )
}

export default Projects
