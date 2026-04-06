import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const skills = [
  "HTML5", "CSS3", "JavaScript", "Bootstrap", 
  "React", "Tailwind CSS", "Wordpress", "Node.js", 
  "Framer-Motion", "Git"
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          label="My Tech Stack" 
          title="Skills & Technologies" 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mt-16 max-w-4xl mx-auto"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-4 md:px-8 md:py-5 bg-[var(--color-brand-card)] border border-white/5 rounded-2xl shadow-lg flex items-center justify-center font-bold text-[var(--color-brand-heading)] text-lg hover:border-[var(--color-brand-primary)]/50 hover:shadow-[0_10px_30px_rgba(124,93,250,0.15)] transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
