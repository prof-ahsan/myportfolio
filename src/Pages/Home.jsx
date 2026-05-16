import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { Navvbar } from '../components/Navvbar';
import Ready from '../components/Ready';

function Home() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden selection:bg-[var(--color-brand-primary)] selection:text-white">
     
      
      <main className="flex flex-col w-full min-h-screen">
        <HeroSection />
        <ServicesSection />
        
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <Ready/>
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default Home;
