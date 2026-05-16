import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import about from '../assets/about.jpg';

const features = [
  { title: "Clean Code", desc: "Maintainable & Scalable" },
  { title: "High Performance", desc: "Optimized Loading" },
  { title: "Responsive Design", desc: "Mobile-First Approach" },
  { title: "Modern Stack", desc: "Latest Technologies" }
];

export function Aboutpagesection() {
  return (
    <section id="about" className="py-24 bg-[var(--color-brand-card)] min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          label="Get To Know Me" 
          title="About Me" 
        />
        
        <div className="flex flex-col lg:flex-row gap-16 mt-16 items-center">
          {/* Left: Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <img src={about} loading='eager' alt="About Me" className="lg:w-full lg:h-screen rounded-2xl shadow-lg" />
            
          </motion.div>
          
          {/* Right: Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div>
              <h3 className="text-3xl font-bold text-[var(--color-brand-heading)] mb-6 leading-snug">
              I'm a Front-End Developer
            </h3>
            <div className="space-y-6 text-[var(--color-brand-text)] text-lg leading-relaxed">
              <p>
Hello! I'm Ahsan Ishtiaq, a passionate front-end developer with a keen eye for design and a love for creating seamless user experiences. I specialize in building modern, responsive web applications using the latest technologies.              </p>
              <p>
My journey in web development started 2 years ago, and since then, I've been constantly learning and improving my skills. I believe in writing clean, maintainable code and creating interfaces that users love to interact with.              </p>
              <p>
When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or learning about the latest web technologies. I'm always excited to take on new challenges and collaborate on interesting projects.              </p>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="bg-[var(--color-brand-bg)] p-6 rounded-2xl border border-white/5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[var(--color-brand-primary)] mt-1 bg-[var(--color-brand-primary)]/10 rounded-full p-1">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-brand-heading)] mb-1">{feature.title}</h4>
                    <p className="text-[var(--color-brand-text)] text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
