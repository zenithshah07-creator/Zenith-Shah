'use client';

import React from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaMapMarkedAlt,
    FaPhone,
    FaTwitter,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900/50 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        Get In <span className="text-sky-500">Touch</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Have a project in mind or want to collaborate? Let&apos;s talk!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-800 p-8 rounded-3xl border border-white/5 shadow-2xl relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>

                        <form className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                                    <input
                                        id="name"
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500/50 focus:bg-slate-900 transition-all duration-300"
                                        type="text"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                                    <input
                                        id="email"
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500/50 focus:bg-slate-900 transition-all duration-300"
                                        type="email"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                                <textarea
                                    id="message"
                                    className="w-full h-40 bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500/50 focus:bg-slate-900 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10 lg:pl-10"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Feel free to reach out to me for any questions or opportunities. I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: FaMapMarkedAlt, title: "Location", value: "Kathmandu, Nepal", color: "text-purple-500" },
                                { icon: FaEnvelope, title: "Email", value: "zenithshah07@gmail.com", color: "text-sky-500", href: "mailto:zenithshah07@gmail.com" },
                                { icon: FaPhone, title: "Phone", value: "+977 9805129944", color: "text-green-500", href: "https://wa.me/9779805129944" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-6 bg-slate-800/50 p-4 rounded-xl border border-white/5 hover:bg-slate-800 transition-colors duration-300">
                                    <div className={`w-14 h-14 ${item.color} bg-white/5 rounded-full flex items-center justify-center text-2xl`}>
                                        <item.icon />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-400 text-sm font-medium">{item.title}</h4>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white font-semibold text-lg hover:text-sky-400 transition-colors block"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-semibold text-lg">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {[
                                    { Icon: FaGithub, href: "https://github.com/zenithshah07-creator", color: "hover:bg-slate-700" },
                                    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/jenish-shah-8a4863382/", color: "hover:bg-blue-600" },
                                    { Icon: FaTwitter, href: "https://x.com/DANAXYZx5?s=09", color: "hover:bg-sky-500" },
                                    { Icon: FaFacebook, href: "https://www.facebook.com/jenish.shah.285048", color: "hover:bg-blue-700" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300 shadow-lg`}
                                    >
                                        <social.Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
