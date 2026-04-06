import { useForm, ValidationError } from "@formspree/react";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export function ContactSection() {
   const [state, handleSubmit] = useForm('mdawrvng');
 const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "contact.ahsanishtiaq@gmail.com",
    link: "mailto:contact.ahsanishtiaq@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    label: "Phone",
    value: "+92 313 4731202",
    link: "tel:+923134731202",
  },
  {
    icon: <MapPin size={24} />,
    label: "Location",
    value: "Lahore, Pakistan",
    link: null,
  },
];
  // const contactInfo = [
  //   { icon: <Mail size={24} />, label: "Email", value: "contact.ahsanishtiaq@gmail.com" },
  //   { icon: <Phone size={24} />, label: "Phone", value: "+92 313 4731202" },
  //   { icon: <MapPin size={24} />, label: "Location", value: "Lahore, Pakistan" }
  // ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-[var(--color-brand-primary)] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          label="Get In Touch" 
          title="Contact Me" 
          subtitle="Have a question or want to work together? Leave your details and I'll get back to you as soon as possible."
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <h3 className="text-3xl font-bold text-[var(--color-brand-heading)] mb-8">Let's talk about your project</h3>
            
            <div className="space-y-6 flex flex-col">
              {contactInfo.map((info, i) => (
  <div key={i} className="flex items-center gap-6">
    
    <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-card)] text-[var(--color-brand-primary)] flex items-center justify-center shadow-lg border border-white/5">
      {info.icon}
    </div>

    <div>
      <h4 className="text-sm text-[var(--color-brand-text)] font-medium mb-1 uppercase tracking-wider">
        {info.label}
      </h4>

      {info.link ? (
        <a
          href={info.link}
          title={info.label === "Email" ? "Send Email" : "Call Now"}
          className="text-md sm:text-lg font-bold text-[var(--color-brand-primary)] hover:text-[var(--color-brand-heading)] transition"
        >
          {info.value}
        </a>
      ) : (
        <p className="text-md sm:text-lg font-bold text-[var(--color-brand-primary)]">
          {info.value}
        </p>
      )}
    </div>

  </div>
))}
              {/* {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-card)] text-[var(--color-brand-primary)] flex items-center justify-center shadow-lg border border-white/5">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-[var(--color-brand-text)] font-medium mb-1 uppercase tracking-wider">{info.label}</h4>
                    <p className="text-md sm:text-lg font-bold hover:text-[var(--color-brand-heading)] text-[var(--color-brand-primary)] cursor-pointer">{info.value}</p>
                  </div>
                </div>
              ))} */}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex-[1.2]"
          >
            <div className="bg-[var(--color-brand-card)] p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Decorative edge highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brand-primary)] to-transparent opacity-50"></div>
              
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-12 text-center text-[var(--color-brand-heading)]">
                  <div className="w-20 h-20 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center mb-6 border border-[var(--color-brand-primary)]/20 shadow-lg">
                    <Send size={40} className="ml-1" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Message Sent</h4>
                  <p className="text-[var(--color-brand-text)] text-lg max-w-md mx-auto">
                    Thank you for reaching out! I've received your message and will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-brand-text)] ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      name='fullName'
                      className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-xl px-5 py-4 text-[var(--color-brand-heading)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--color-brand-text)] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name='email'
                      required
                      placeholder="john@example.com" 
                      className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-xl px-5 py-4 text-[var(--color-brand-heading)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-brand-text)] ml-1">Subject</label>
                  <input 
                    type="text" 
                    name='user_subject'
                    required
                    placeholder="Project Inquiry" 
                    className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-xl px-5 py-4 text-[var(--color-brand-heading)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all placeholder:text-gray-600"
                  />
                  {/* <input 
  type="hidden" 
  name="_subject" 
  value="New Contact Message"
/> */}
                </div>
                
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--color-brand-text)] ml-1">Message</label>
                  <textarea 
                    rows={5}
                    required
                    name='message'
                    placeholder="Tell me about your project..." 
                    className="w-full bg-[var(--color-brand-bg)] border border-white/5 rounded-xl px-5 py-4 text-[var(--color-brand-heading)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all resize-none placeholder:text-gray-600"
                  ></textarea>
                </div>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full py-4 text-lg"
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
