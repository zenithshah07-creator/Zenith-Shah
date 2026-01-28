'use client';

import React from "react";
import { motion } from "framer-motion";
import { skills as skillData } from "@/assets/assets";

const Skills = () => {
    return (
        <section id="Skills" className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        My <span className="text-sky-400">Skills</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Technologies I work with to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillData.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-slate-800 p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors duration-300"></div>

                            <div className="flex items-center mb-8 relative z-10">
                                <div className="p-3 bg-slate-700/50 rounded-xl group-hover:bg-sky-500/20 transition-colors duration-300">
                                    <skillGroup.icon className="w-8 h-8 text-sky-400 group-hover:text-sky-300 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold ml-4 text-white group-hover:text-white transition-colors">{skillGroup.category}</h3>
                            </div>

                            <div className="flex flex-col gap-5 relative z-10">
                                {skillGroup.items.map((skill, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${skill.level === 'Comfortable' ? 'bg-green-500/10 text-green-400' : 'bg-sky-500/10 text-sky-400'
                                                }`}>
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level === 'Comfortable' ? '90%' : '40%' }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className={`h-full rounded-full ${skill.level === 'Comfortable' ? 'bg-gradient-to-r from-sky-500 to-emerald-500' : 'bg-sky-500/30'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
