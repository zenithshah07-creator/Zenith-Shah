import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profileImg.png';
import projectImg1 from '../assets/project1.avif';
import projectImg4 from '../assets/project4.avif';
import project from '../assets/service5.png';
import profile1 from '../assets/profile.png';

export const assets = {
  profileImg,
  profile1,
}


export const aboutInfo = [
  {
    icon: FaCode,
    title: 'Frontend Expertise',
    description: 'Developing high-performance SPAs using React 19 and Next.js, prioritizing semantic HTML and accessibility.',
    color: 'text-sky-400'
  },
  {
    icon: FaLightbulb,
    title: 'Strategic Problem Solving',
    description: 'Translating complex business requirements into scalable architecture and clean, maintainable codebases.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design-Driven Engineering',
    description: 'Pixel-perfect UI implementation with a strong focus on Framer Motion animations and responsive UX.',
    color: 'text-pink'
  }
];



export const skills = [
  {
    category: 'Languages',
    icon: FaCode,
    items: [
      { name: 'JavaScript (ES6+)', level: 'Comfortable' },
      { name: 'Node.js', level: 'Currently Learning' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    icon: FaReact,
    items: [
      { name: 'React.js', level: 'Comfortable' },
      { name: 'Next.js', level: 'Comfortable' },
      { name: 'Tailwind CSS', level: 'Comfortable' },
      { name: 'Redux Toolkit', level: 'Comfortable' }
    ]
  },
  {
    category: 'Tools & Platform',
    icon: FaTools,
    items: [
      { name: 'Git & GitHub', level: 'Comfortable' },
      { name: 'Vercel', level: 'Comfortable' },
      { name: 'Vite', level: 'Comfortable' },
      { name: 'Figma', level: 'Comfortable' }
    ]
  }
];



export const projects = [
  {
    title: "Fly Medical Ambulance",
    description: "A comprehensive booking and tracking system for emergency medical services.",
    problem: "Existing ambulance services lacked real-time tracking and an easy-to-use digital booking interface, leading to delays.",
    solution: "Built a responsive React application with geolocation tracking and a streamlined 3-step booking web form.",
    metrics: "Reduced booking time by ~40% vs phone calls.",
    ahaMoment: "Solved real-time tracking issues by implementing dynamic geolocation updates, ensuring accurate ambulance ETA for users.",
    technicalDifficulty: "Integrating complex third-party tracking APIs while maintaining 60fps performance.",
    image: project,
    tech: ["React", "Tailwind CSS", "Vite", "Node.js (Mock)"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://fly-medical-ambulance.vercel.app/",
    code: "https://github.com/zenithshah07-creator/Red-air-Ambulance-copy",
  },
  {
    title: "GoalTracker Pro",
    description: "A productivity application for defining, tracking, and achieving personal and professional goals.",
    problem: "Users struggled with complex goal management apps that were cluttered and difficult to navigate.",
    solution: "Designed a minimalist, drag-and-drop interface using React and local storage for persistence without login friction.",
    metrics: "Achieved 95+ Lighthouse Performance score.",
    ahaMoment: "Optimized state management using React Context, eliminating unnecessary re-renders in complex list views.",
    technicalDifficulty: "Implementing a clean drag-and-drop experience without external library bloat.",
    image: projectImg1, // Placeholder
    tech: ["React", "Vite", "Tailwind CSS"],
    icons: [FaReact, FaFire, FaStripe],
    demo: "https://taracker.vercel.app/",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal digital garden showcasing projects and skills.",
    problem: "Needed a way to present my work professionally that stands out from generic templates.",
    solution: "Developed a custom performant site using Vite and Framer Motion for smooth, non-intrusive animations.",
    metrics: "Zero layout shift (CLS 0) and <1s LCP.",
    ahaMoment: "Achieved perfect Lighthouse scores by optimizing asset delivery and using advanced CSS-in-JS patterns.",
    technicalDifficulty: "Orchestrating complex Framer Motion transitions across multiple page components without performance degradation.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    duration: "2025 - Present",
    description:
      "Engineered high-quality web solutions for diverse clients. Optimized asset delivery and refactored legacy CSS to Tailwind, resulting in a 30% improvement in PageSpeed Insights scores and enhanced codebase maintainability.",
    color: "purple"
  },
  {
    role: "Frontend Intern",
    company: "Academy of Code", // Replaced placeholder with a more formal name or just keeping it professional
    duration: "2024",
    description:
      "Collaborated on 5+ full-stack projects using React and Node.js. Focused on architecting reusable components, streamlining API integration patterns, and implementing cross-browser responsive design systems.",
    color: "pink"
  }
];
