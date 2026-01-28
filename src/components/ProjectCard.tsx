'use client';

import React from "react";
import { FaGithub } from "react-icons/fa";
import { trackEvent } from "@/utils/analytics";
import Image from "next/image";

interface ProjectProps {
    title: string;
    description: string;
    metrics: string;
    ahaMoment: string;
    technicalDifficulty: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any;
    tech: string[];
    demo: string;
    code: string;
}

const ProjectCard = ({ title, description, metrics, ahaMoment, technicalDifficulty, image, tech, demo, code }: ProjectProps) => {
    return (
        <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col bg-slate-800/40 border border-white/5 hover:border-sky-500/30 transition-all duration-300">

            {/* Image Container */}
            <div className="relative h-48 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent z-10 opacity-60"></div>
                <Image
                    src={image}
                    alt={`${title} - Project User Interface Preview`} // SEO: Descriptive alt text for accessibility
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Quick Links Overlay */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={code} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900/80 rounded-full hover:bg-sky-500 text-white transition-colors" title="View Source">
                        <FaGithub size={18} />
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="relative p-6 z-20 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:text-sky-400 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Technical Depth Section */}
                <div className="mb-6 space-y-4">
                    <div className="bg-sky-500/5 p-4 rounded-xl border border-sky-500/10 hover:bg-sky-500/10 transition-colors">
                        <h4 className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span>
                            The &quot;Aha!&quot; Moment
                        </h4>
                        <p className="text-gray-300 text-xs italic leading-relaxed">&quot;{ahaMoment}&quot;</p>
                    </div>

                    <div className="bg-purple-500/5 p-4 rounded-xl border border-purple-500/10 hover:bg-purple-500/10 transition-colors">
                        <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            Technical Challenge
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{technicalDifficulty}</p>
                    </div>
                </div>

                {/* Case Study Mini-Details (Impact) */}
                {metrics && (
                    <div className="mb-6 flex gap-3 items-center bg-green-500/5 px-4 py-2 rounded-lg border border-green-500/10">
                        <span className="text-green-400 text-[10px] font-bold uppercase tracking-tighter">Impact</span>
                        <span className="text-gray-300 text-xs font-medium">{metrics}</span>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-sky-200/80 font-medium tracking-wide"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('Project', 'View Demo', title)}
                        className="flex-1 text-center bg-sky-600/90 text-white rounded-lg px-4 py-2.5 text-sm font-bold hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
                    >
                        Live Demo
                    </a>
                    <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('Project', 'View Code', title)}
                        className="flex-1 text-center px-4 py-2.5 text-sm font-bold border border-white/10 text-gray-400 rounded-lg hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300"
                    >
                        Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
