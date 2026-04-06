import React from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Ready = () => {
  return (
    <div>
         <div className="container mx-auto px-6 py-5 md:px-12 mb-20" id='ready'>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--color-brand-primary)] rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(124,93,250,0.2)] overflow-hidden relative"
        >
          {/* Abstract background blobs */}
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
      </div>
    </div>
  )
}

export default Ready
