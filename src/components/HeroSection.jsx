import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from './Button';
import { Link } from 'react-scroll';
import { TypewriterEffect } from './ui/Typewritter';
import { Github, Linkedin, FileDown, Database, Zap } from 'lucide-react';
import Me from '../assets/me.jpeg';
import { SiWordpress, SiReact, SiWoocommerce } from 'react-icons/si';

const words = [
  { text: 'WordPress Websites' },
  { text: 'WooCommerce Stores' },
  { text: 'Frontend Interfaces' },
  { text: 'Responsive Web Design' },
  { text: 'Custom WordPress Solutions' },
];

const socials = [
  { href: 'https://github.com/prof-ahsan', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/ahsanishtiaq/', label: 'LinkedIn', Icon: Linkedin },
  {
    href: 'https://drive.google.com/file/d/1Tly1-5kSguHOl7kNvNY0fUVfdLjRPDj1/view?usp=drive_link',
    label: 'Download CV',
    Icon: FileDown,
  },
];

// Mobile par badges container ke andar rehte hain (negative offset sirf sm+ par),
// is se horizontal scroll nahi banta. React & ACF mobile par hide hain taake clutter na ho.
const badges = [
  {
    id: 'wp',
    Icon: SiWordpress,
    iconClass: 'text-white',
    title: 'WordPress',
    sub: 'Development',
    border: 'border-purple-500/30',
    show: 'flex',
    pos: 'top-[12%] -left-6 sm:-left-6 lg:-left-12',
    y: [0, -12, 0],
    duration: 4,
  },
  {
    id: 'elementor',
    Icon: Zap,
    iconClass: 'text-purple-400',
    title: 'Elementor Pro',
    sub: 'Page Builder',
    border: 'border-purple-500/30',
    show: 'flex',
    pos: 'bottom-[10%] -left-6 sm:-left-8 lg:-left-16',
    y: [0, 12, 0],
    duration: 5,
  },
  {
    id: 'react',
    Icon: SiReact,
    iconClass: 'text-cyan-400',
    title: 'React.js',
    sub: 'Frontend',
    border: 'border-cyan-400/30',
    show: 'flex sm:flex',
    pos: 'top-[42%] -right-6 sm:-right-12 lg:-right-14',
    y: [0, -15, 0],
    duration: 4.5,
  },
  {
    id: 'woo',
    Icon: SiWoocommerce,
    iconClass: 'text-purple-400',
    title: 'WooCommerce',
    sub: 'E-Commerce',
    border: 'border-purple-500/30',
    show: 'flex',
    pos: 'bottom-[10%] sm:bottom-[8%] -right-6 sm:-right-4 lg:-right-10',
    y: [0, 10, 0],
    duration: 5,
  },
  {
    id: 'acf',
    Icon: Database,
    iconClass: 'text-cyan-400',
    title: 'ACF',
    sub: 'Dynamic Content',
    border: 'border-cyan-400/30',
    show: 'flex sm:flex',
    pos: 'top-0 right-0',
    y: [0, -10, 0],
    duration: 4,
  },
];

const socialClass =
  'w-10 h-10 rounded-lg border bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)] transition-all';

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-x-clip bg-[#0A0B0D] pt-28 pb-24 md:pt-32 lg:pt-24 lg:pb-16"
    >
      {/* Background decorative text */}
      <div className="absolute top-[40%] right-0 -translate-y-1/2 hidden lg:block text-[12vw] xl:text-[15vw] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap tracking-tighter">
        Developer
      </div>

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-12">
        {/* ---------- Left column: text ---------- */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-2 sm:px-5 rounded-full bg-[var(--color-brand-card)] text-[var(--color-brand-primary)] text-xs sm:text-sm font-semibold mb-5 sm:mb-6 border border-[var(--color-brand-primary)]/30 shadow-[0_4px_20px_rgba(124,93,250,0.1)]"
          >
            WordPress &amp; Frontend Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-[var(--color-brand-heading)] mb-5 sm:mb-6 leading-[1.1] break-words"
          >
            Hi, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[#c084fc] drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
              {' '}
              Ahsan Ishtiaq
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-xl lg:max-w-2xl mb-8 sm:mb-10 text-[var(--color-brand-text)]"
          >
            {/* Typewriter line: min-height fix hai taake text wrap hone par layout jump na kare */}
            <div className="flex flex-col items-center gap-x-2 min-h-[4.5rem] sm:min-h-[3rem] sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-center lg:justify-start text-lg sm:text-2xl font-semibold text-white mb-3">
              <span>I Build Modern</span>
              <TypewriterEffect words={words} />
            </div>

            <p className="text-base md:text-lg leading-relaxed font-light">
              Creating fast, responsive and user-focused websites using WordPress, Elementor Pro,
              WooCommerce and modern frontend technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <Link to="portfolio" smooth duration={500} className="w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 hover:shadow-[0_10px_30px_rgba(139,92,246,0.5)] transition-all duration-300"
              >
                View My Work
              </Button>
            </Link>
            <Link to="contact" smooth duration={500} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-6">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                title={label}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* ---------- Right column: visual ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          {/* Container size viewport ke hisab se scale hota hai */}
          <div className="relative aspect-square w-[min(82vw,300px)] sm:w-[380px] md:w-[440px] lg:w-[400px] xl:w-[450px]">
            {/* Badges */}
            {badges.map((b) => (
              <motion.div
                key={b.id}
                animate={reduceMotion ? undefined : { y: b.y }}
                transition={{ duration: b.duration, repeat: Infinity }}
                className={`absolute z-30 ${b.show} ${b.pos} items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border ${b.border} bg-[#151622] px-3 py-2 sm:px-4 sm:py-3 shadow-xl`}
              >
                <b.Icon className={`text-2xl sm:text-3xl shrink-0 ${b.iconClass}`} />
                <div className="text-left">
                  <p className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
                    {b.title}
                  </p>
                  <p className="text-gray-400 text-[10px] sm:text-xs whitespace-nowrap">{b.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Profile image */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <img
                src={Me}
                loading="eager"
                alt="Ahsan Ishtiaq"
                className="w-[60%] aspect-square rounded-full object-contain border-4 border-white/20 shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>

            {/* Rotating rings */}
            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              className="absolute inset-4 sm:inset-6 border border-purple-500/30 rounded-full border-dashed"
            />
            <motion.div
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
              className="absolute -inset-6 border border-white/10 rounded-full hidden md:block"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator: wrapper centering karta hai, inner div framer animation (transform conflict nahi hota) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3 text-[var(--color-brand-text)]/50"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll Down</span>
          <div className="w-[1px] h-12 lg:h-16 bg-gradient-to-b from-[var(--color-brand-primary)] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
