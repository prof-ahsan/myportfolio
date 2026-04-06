import React from 'react';
import { motion } from 'framer-motion';

export function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-[var(--color-brand-primary)] text-white hover:bg-violet-500 shadow-[0_0_15px_rgba(124,93,250,0.4)] hover:shadow-[0_0_25px_rgba(124,93,250,0.6)]",
    outline: "border-2 border-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary)] hover:shadow-[0_0_15px_rgba(124,93,250,0.4)]"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
