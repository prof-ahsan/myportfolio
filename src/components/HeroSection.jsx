import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Link } from 'react-scroll';
import { TypewriterEffect } from "./ui/Typewritter";
import { Github, Linkedin, Twitter, FileDown } from 'lucide-react';
import Me from '../assets/me.jpeg';


export function HeroSection() {

  const words = [
    { text: "Fast" },
    { text: "Scalable" },
    { text: "Beautiful UIs" },
    { text: "Responsive Web Apps" },
    { text: "Frontend Magic" },
  ];


  return (
    <section id="home" className="min-h-screen flex  items-center relative overflow-visible bg-[#0A0B0D]">
      {/* Background Decorative Elements */}
      <div className="absolute top-[40%] right-0 -translate-y-1/2 text-[15vw] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap hidden lg:block tracking-tighter">
        Developer
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse top-20 lg:flex-row items-center justify-between gap-12 mt-10">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center px-5 py-2 text-center rounded-full bg-[var(--color-brand-card)] text-[var(--color-brand-primary)] text-sm font-semibold mb-6 border border-[var(--color-brand-primary)]/30 shadow-[0_4px_20px_rgba(124,93,250,0.1)]"
          >
            Front-End Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-5xl font-black text-[var(--color-brand-heading)] mb-6 leading-[1.1]"
          >
            Hi, I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[#c084fc] drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"> Ahsan Ishtiaq</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--color-brand-text)] text-md md:text-l max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
          >
            <span className="flex items-baseline justify-center lg:justify-start text-lg sm:text-2xl text-center  font-semibold mt-1 text-[#3B82F6]">I Build <TypewriterEffect words={words} /></span>

            Focused on building performant apps and designing beautiful UIs.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link to="portfolio" smooth={true} duration={500}>
              <Button variant="primary" className="w-full sm:w-auto px-8 py-4 hover:shadow-[0_10px_30px_rgba(139,92,246,0.5)] 
transition-all duration-300">
                View My Work
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Button variant="secondary" className="w-full bg-[#1A1A2E] sm:w-auto px- py-4 bg-white/10 backdrop-blur-md 
hover:bg-white/20 transition-all duration-300">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
          <div className='flex items-center gap-5 mt-5'>
            <a href="https://github.com/prof-ahsan" title='github' target='_blank' className="w-10 h-10 rounded-lg border bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] hover:border px-2 hover:border-[var(--color-brand-primary)] transition-all">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mahsan-ishtiaq/" title='linkedin' target='_blank' className="w-10 h-10 rounded-lg border bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] hover:border px-2 hover:border-[var(--color-brand-primary)] transition-all">
              <Linkedin size={18} />
            </a>
            <a href="https://drive.google.com/file/d/12OJpMVu0KwadHzRGomTXofIwfAg9QnrZ/view?usp=sharing" title='CV' target='_blank' className="w-10 h-10 rounded-lg border bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] hover:border px-2 hover:border-[var(--color-brand-primary)] transition-all">
              <FileDown size={18} />
            </a>
          </div>
        </div>

        {/* Right Column (Visual / Badge) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className=" relative flex items-center gap-5 justify-center lg:justify-start  sm:min-h-[400px]"
        >
          {/* Abstract geometric composition instead of pure image (matching modern minimalistic tech vibe) */}
          <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px]">
            <div
            //  className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-[#c084fc]/10 rounded-[3rem] rotate-6 blur-2xl"
            ></div>

            {/* The Badge */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-[#0A0B0D] blur-3xl rounded-full"></div>
              <img
                src={Me}
                loading="eager"
                alt="Profile"
                className="block mx-auto relative w-40 h-40 md:w-64 md:h-64 lg:w-75 lg:h-75 rounded-full object-contain border-4 border-white/40 shadow-xl hover:scale-105 transition duration-300 ease-in-out"
              />
             
            </div>
           

            {/* Decorative accents */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-4 md:inset-0 border border-[var(--color-brand-primary)]/30 rounded-full border-dashed z-10"
            ></motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute -inset-8 md:-inset-12 border border-[var(--color-brand-text)]/10 rounded-full z-10 hidden md:block"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--color-brand-text)]/50 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-brand-primary)] to-transparent"></div>
      </motion.div>
    </section>
  );
}
