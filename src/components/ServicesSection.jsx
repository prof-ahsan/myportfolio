import React from 'react';
import { motion } from 'framer-motion';
import { Palette, CodeXml, Smartphone } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const services = [
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with Figma, focusing on user experience and modern design principles.'
  },
  {
    icon: <CodeXml size={32} />,
    title: 'Web Development',
    description: 'Building responsive, scalable, and fast web applications using modern frameworks like React, Wordpress, and Tailwind CSS.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Responsive Design',
    description: 'Ensuring your website looks perfect on all devices with mobile-first approach and Tailwind CSS.'
  }
];

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          label="What I Do" 
          title="Services" 
          subtitle="Delivering high-quality web solutions tailored to your needs." 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-[var(--color-brand-card)] rounded-3xl p-8 lg:p-10 border border-white/5 shadow-lg hover:shadow-[0_20px_40px_rgba(124,93,250,0.1)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-primary)] mb-8 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-colors duration-300 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-brand-heading)] mb-4">{service.title}</h3>
              <p className="text-[var(--color-brand-text)] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
