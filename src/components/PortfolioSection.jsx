import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import project1 from '../assets/project1.jpeg';

const categories = ["All Projects",
  //  "Web Apps", "Mobile", "UI/UX"
  ];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
        skills: ["React",'|', "Tailwindcss", '|', "JavaScript", '|', "Node.js"],

    desc: "A full-stack e-commerce solution with cart, checkout, and CMS.",
    liveLink: "https://e-commerceprojectsite.netlify.app/",
    codeLink: "https://github.com/prof-ahsan/E-Commerce-Web"
  },
  {
    id: 2,
    title: "Frozen Flakes Website Clone",
    category: "Web Apps",
    image: project1,
    skills: ["HTML",'|', "CSS", '|', "JavaScript", '|', "Bootstrap"],
    desc: "A fully responsive Frozen Flakes website clone showcasing modern UI design and front-end development skills.",
    liveLink: "https://frozenflake.netlify.app/",
    codeLink: "https://github.com/prof-ahsan/Frozen-Flake-Clone"
  },
  // {
  //   id: 3,
  //   title: "Banking Dashboard",
  //   category: "UI/UX",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  //    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  //   desc: "Clean and intuitive dashboard for personal finance management.",
  // },
  // {
  //   id: 4,
  //   title: "Real Estate Portal",
  //   category: "Web Apps",
  //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  //   skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],

  //   desc: "Property listing website with advanced filtering and maps.",
  // }
];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredProjects = activeTab === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-[var(--color-brand-card)] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          label="My Work" 
          title="Featured Projects" 
        />

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === cat 
                  ? "bg-[var(--color-brand-primary)] text-white shadow-[0_4px_15px_rgba(124,93,250,0.4)]" 
                  : "bg-[var(--color-brand-bg)] text-[var(--color-brand-text)] hover:text-white border border-white/5 hover:border-white/20 hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[var(--color-brand-bg)] rounded-3xl overflow-hidden border border-white/5 shadow-xl"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img 
                    src={project.image} loading='lazy'
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay Hover Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-bg)] via-[var(--color-brand-bg)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-[var(--color-brand-primary)] text-sm font-bold mb-2 uppercase tracking-wider">{project.category}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/70 mb-6">{project.desc}</p>

                       <div>
            <strong>Skills:</strong>
            {project.skills.map((skill, index) => (
              <span key={index}> {skill} </span>
            ))}
          </div>
                      
                      <div className="flex items-center gap-4">
                        {project.liveLink && (
                        <a href={project.liveLink} target='_blank' className="flex items-center gap-2 text-white hover:text-[var(--color-brand-primary)] transition-colors font-medium">
                          <ExternalLink size={20} /> View Project
                        </a>
                        )}
                        {project.codeLink && (
                        <a href={project.codeLink} target='_blank' className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                          <Github size={20} /> Code
                        </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
