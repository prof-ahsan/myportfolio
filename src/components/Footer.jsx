import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown } from 'lucide-react';
import { Link } from 'react-scroll';

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-card)]  pb-1 border-t border-gray-800 mt-5">      

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-800/50 pt-3">
          <div className="text-2xl hidden sm:block font-bold text-[var(--color-brand-heading)] flex-shrink-0">
            <span className="text-[var(--color-brand-primary)]"></span>
          </div>
          
          <p className="text-sm sm:text-md text-[var(--color-brand-text)] flex-grow text-center">
            © {new Date().getFullYear()} Ahsan Ishtiaq ꟾ All rights reserved.
          </p>
          
          <div className="flex items-center justify-end gap-4 flex-shrink-0">
            <a href="https://github.com/prof-ahsan" title='Github' target='_blank' className="w-10 h-10 rounded-full bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] hover:border px-2 hover:border-[var(--color-brand-primary)] transition-all">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ahsanishtiaq/" title='Linkedin' target='_blank' className="w-10 h-10 rounded-full bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] hover:border px-2 hover:border-[var(--color-brand-primary)] transition-all">
              <Linkedin size={18} />
            </a>
            <a href="https://drive.google.com/file/d/1Tly1-5kSguHOl7kNvNY0fUVfdLjRPDj1/view?usp=drive_link" target='_blank' title='CV' className="w-10 h-10 rounded-full bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] hover:border px-2 hover:border-[var(--color-brand-primary)] transition-all">
              <FileDown size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
