import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown } from 'lucide-react';
import { Link } from 'react-scroll';

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-card)]  pb-1 border-t border-gray-800 mt-5">
      {/* CTA Banner */}
      {/* <div className="container mx-auto px-6 md:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--color-brand-primary)] rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(124,93,250,0.2)] overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/80 text-lg md:text-xl">Let's create something amazing together.</p>
          </div>
          <div className="z-10">
              <Link to="contact" smooth={true} duration={500}>
                <button className="bg-white text-[var(--color-brand-primary)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl w-full md:w-auto cursor-pointer">
                  Contact Me Now
                </button>
              </Link>
          </div>
        </motion.div>
      </div> */}

      {/* Bottom Legal bar */}
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
            <a href="https://www.linkedin.com/in/mahsan-ishtiaq/" title='Linkedin' target='_blank' className="w-10 h-10 rounded-full bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] hover:border px-2 hover:border-[var(--color-brand-primary)] transition-all">
              <Linkedin size={18} />
            </a>
            <a href="https://drive.google.com/file/d/12OJpMVu0KwadHzRGomTXofIwfAg9QnrZ/view?usp=sharing" target='_blank' title='CV' className="w-10 h-10 rounded-full bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] hover:border px-2 hover:border-[var(--color-brand-primary)] transition-all">
              <FileDown size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
