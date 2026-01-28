'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { trackEvent } from '@/utils/analytics';

const Footer = () => {
    return (
        <footer className='py-12 bg-slate-900 border-t border-white/5 relative overflow-hidden'>
            {/* Background Glow */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50 blur-sm'></div>

            <div className="container mx-auto px-6 text-center">
                <h2 className='text-2xl font-bold mb-6'>
                    <span className='text-white'>Zenith</span>
                    <span className='text-sky-400'>Shah</span>
                </h2>

                <div className='flex justify-center space-x-8 mb-8'>
                    {[
                        { icon: FaGithub, href: 'https://github.com/zenithshah07-creator' },
                        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/jenish-shah-8a4863382/' },
                        { icon: FaTwitter, href: 'https://x.com/DANAXYZx5?s=09' },
                        { icon: FaInstagram, href: '#' },
                        {
                            icon: () => <span className="font-bold text-xs border border-current px-1 rounded">CV</span>,
                            href: '/JenishShahResume.pdf',
                            onClick: () => trackEvent('Resume', 'Download', 'Footer')
                        }
                    ].map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={social.onClick}
                                className='text-gray-400 hover:text-sky-400 transform hover:scale-110 transition-all duration-300 cursor-pointer'
                            >
                                {typeof Icon === 'function' && !('prototype' in Icon) ? (
                                    // It's likely a functional component returning JSX (like the custom CV icon)
                                    // or styled-icon. But Icon check is tricky.
                                    // Simplest fix for the provided structure:
                                    /* @ts-expect-error - Handling mixed icon types */
                                    <Icon />
                                ) : (
                                    // It's a proper React component from react-icons (which has size prop)
                                    <Icon size={24} />
                                )}
                            </a>
                        );
                    })}
                </div>

                <p className='text-gray-500 text-sm'>
                    &copy; {new Date().getFullYear()} Created by <span className='text-sky-400'>Zenith Shah</span>. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
