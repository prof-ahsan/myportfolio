import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/wordpress1.jpeg';
import project5 from '../assets/realestate.webp';
import project3 from '../assets/glassware.webp';
import project4 from '../assets/vosshome.webp';
import project6 from '../assets/realclientproject.webp';

const categories = ["All Projects",
   "Frontend", "Wordpress", 
  ];

const projects = [
  {
    id: 10,
    title: "Rio Rubber Track Client Website",
    category: "Wordpress",
    image: project6,
        skills: ["Wordpress",'|', "Elementor Pro", '|', "HTML", '|', "CSS"],

    desc: "Responsive business website developed according to client requirements in collaboration with a developer.",
    // liveLink: "https://e-commerceprojectsite.netlify.app/",
    // codeLink: "https://github.com/prof-ahsan/E-Commerce-Web",
    videoLink: "https://drive.google.com/file/d/1C3nB70BOHmPMG--HZ990ybSe5QlyOcQD/view?usp=drive_link"
  },
  {
    id: 1,
    title: "Real Estate Property Website",
    category: "Wordpress",
    image: project5,
        skills: ["Wordpress",'|', "Elementor Pro", '|', "ACF", '|', "Custom Post Types", '|', "Loop Grid"],

    desc: "Responsive property website with property listings and detailed property pages.",
    liveLink: "https://realestatewebsite.freedev.app/",
    // codeLink: "https://github.com/prof-ahsan/E-Commerce-Web",
    // videoLink: "https://www.youtube.com/watch?v=lgTHGZF3BQw&list=RDlgTHGZF3BQw&start_radio=1"
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Wordpress",
    image: project3,
        skills: ["Wordpress",'|', "WooCommerce", '|', "Elementor Pro"],

    desc: "Complete online store with product listings, shopping cart and checkout experience.",
    liveLink: "mywoostore.great-site.net",
    // codeLink: "https://github.com/prof-ahsan/E-Commerce-Web"
    videoLink: "https://drive.google.com/file/d/1VfH1w4-1hunZ0IitmyYhKiA3bJc85bLM/view?usp=drive_link"

  },
  {
    id: 3,
    title: "VOSS Security Solutions",
    category: "Wordpress",
    image: project4,
        skills: ["Wordpress",'|', "Elementor Pro", '|', "Website Redesign", '|', "UI Improvement"],

    desc: "Modern website redesign with improved UX, responsive layout, and professional interface.",
    liveLink: "https://voss.fast-page.org/",
    // codeLink: "https://github.com/prof-ahsan/E-Commerce-Web"
    videoLink: "https://drive.google.com/file/d/1lw84iSJG6gL5J8As4jkFIe2k_a-ZR3B7/view?usp=drive_link"

  },
  {
    id: 4,
    title: "Frozen Flakes Website Clone",
    category: "Frontend",
    image: project1,
    skills: ["HTML",'|', "CSS", '|', "JavaScript", '|', "Bootstrap"],
    desc: "A fully responsive Frozen Flakes website clone showcasing modern UI design and front-end development skills.",
    liveLink: "https://frozenflake.netlify.app/",
    codeLink: "https://github.com/prof-ahsan/Frozen-Flake-Clone"
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
     skills: ["React",'|', "Tailwindcss",'|', "Jawascript", '|', "Node.Js"],
    desc: "A full-stack e-commerce solution with cart, checkout, and CMS.",
    liveLink: "https://e-commerceprojectsite.netlify.app/",
    codeLink: "https://github.com/prof-ahsan/E-Commerce-Web"
  },
  
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
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
                    className="w-full h-full object-fill transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay Hover Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-bg)] via-[var(--color-brand-bg)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-[var(--color-brand-primary)] text-xs sm:text-sm font-bold mb-2 uppercase tracking-wider">{project.category}</div>
                      <h3 className="text-md sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/70 mb-1 md:mb-3 xs:text-sm  sm:text-lg">{project.desc}</p>

                       <div>
            <strong>Skills:</strong>
            {project.skills.map((skill, index) => (
              <span className='text-sm sm:text-lg' key={index}> {skill} </span>
            ))}
          </div>
                      
                      <div className="flex items-center gap-3 sm:gap-4">
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
                        {project.videoLink && (
                        <a href={project.videoLink} target='_blank' className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                          <Play size={20} /> Video
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
