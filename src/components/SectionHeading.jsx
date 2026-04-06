import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="px-4 py-1.5 rounded-full bg-[var(--color-brand-bg)] border border-[var(--color-brand-primary)]/30 text-[var(--color-brand-primary)] text-sm font-medium mb-4"
      >
        {label}
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-[var(--color-brand-heading)] mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-brand-text)] max-w-2xl mx-auto text-lg"
        >
            {subtitle}
        </motion.p>
      )}
    </div>
  );
}
