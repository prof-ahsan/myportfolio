import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-scroll';
import { Events, scrollSpy } from 'react-scroll';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {

    Events.scrollEvent.register('begin', () => {});
  Events.scrollEvent.register('end', () => {});

  scrollSpy.update();

  return () => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };
    


    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    // { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--color-brand-bg)]/90 backdrop-blur-md shadow-lg py-4 border-b border-gray-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="text-xl font-bold text-[var(--color-brand-heading)] cursor-pointer">
          <span className="border-2 p-2 rounded-sm  m-1 bg-[linear-gradient(to_right,#8B5CF6,#6366F1)] text-[var(--color-brand-heading)]">A</span>Portfolio
        </Link>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="text-[var(--color-brand-primary)]"
              className="text-[var(--color-brand-text)] hover:text-white cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav> */}

        {/* Desktop CTA */}
      
        <div className="hidden md:flex items-center gap-6">

          <nav className="hidden md:flex items-center gap-8">

            




          {/* {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              smooth={true} 
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-[var(--color-brand-primary)]"
              className="text-[var(--color-brand-text)] text-lg hover:text-white cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))} */}
        </nav>


          <Link to="ready" smooth={true} duration={500}>
            <Button variant="outline" className='bg-[linear-gradient(to_right,#8B5CF6,#6366F1)]'>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--color-brand-heading)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--color-brand-card)] py-4 flex flex-col items-center gap-4 md:hidden shadow-xl border-b border-gray-800"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                smooth={true} 
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--color-brand-heading)] font-medium text-lg w-full text-center py-2 hover:bg-white/5 active:bg-white/10"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="mt-2">
                Contact
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
