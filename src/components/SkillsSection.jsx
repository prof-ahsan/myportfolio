import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiWordpress,
  SiWoocommerce,
  SiGit,
  SiGithub,
  SiElementor,
} from "react-icons/si";

import { Database } from "lucide-react";


const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        icon: SiCss,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      // {
      //   name: "Bootstrap",
      //   icon: SiBootstrap,
      // },
      {
        name: "React.js",
        icon: SiReact,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },


  {
    title: "WordPress Development",
    skills: [
      {
        name: "WordPress",
        icon: SiWordpress,
      },
      {
        name: "Elementor Pro",
        icon: SiElementor,
      },
      {
        name: "WooCommerce",
        icon: SiWoocommerce,
      },
      {
        name: "ACF",
        icon: Database,
      },
    ],
  },


  {
    title: "Tools & Workflow",
    skills: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
    ],
  },
];



export function SkillsSection() {


  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
      },
    },
  };


  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.5,
      },
    },
  };



  return (
    <section id="skills" className="py-24 relative">

      <div className="container mx-auto px-6 md:px-12">


        <SectionHeading
          label="My Tech Stack"
          title="Skills & Technologies"
        />


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
          className="mt-16 space-y-14"
        >



          {skillCategories.map((category, index) => (

            <div key={index}>


              <h3
                className="
                text-xl
                md:text-2xl
                font-bold
                text-white
                mb-8
                text-center
                "
              >
                {category.title}
              </h3>



              <div
                className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-6
                gap-5
                "
              >


                {category.skills.map((skill, i)=>{


                  const Icon = skill.icon;


                  return (

                    <motion.div

                      key={i}

                      variants={itemVariants}

                      whileHover={{
                        y:-8,
                        scale:1.05,
                      }}

                      className="
                      group
                      bg-[var(--color-brand-card)]
                      border
                      border-white/5
                      rounded-2xl
                      p-6
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-4
                      shadow-lg
                      hover:border-purple-500/40
                      hover:shadow-[0_20px_40px_rgba(124,93,250,0.15)]
                      transition-all
                      duration-300
                      "
                    >


                      <Icon
                        className="
                        text-4xl
                        text-purple-400
                        group-hover:text-white
                        transition
                        duration-300
                        "
                      />



                      <span
                        className="
                        text-sm
                        md:text-base
                        font-semibold
                        text-white
                        text-center
                        "
                      >

                        {skill.name}

                      </span>


                    </motion.div>

                  );

                })}


              </div>


            </div>

          ))}


        </motion.div>


      </div>


    </section>
  );
}


// import React from 'react';
// import { motion } from 'framer-motion';
// import { SectionHeading } from './SectionHeading';
// import about from '../assets/about.jpg';

// const skills = [
//   "about", "CSS3", "JavaScript", "Bootstrap", 
//   "React", "Tailwind CSS", "Wordpress", "Node.js", 
//   "Framer-Motion", "Git"
// ];

// export function SkillsSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: { opacity: 1, scale: 1, y: 0 }
//   };

//   return (
//     <section id="skills" className="py-24 relative">
//       <div className="container mx-auto px-6 md:px-12 relative z-10">
//         <SectionHeading 
//           label="My Tech Stack" 
//           title="Skills & Technologies" 
//         />
        
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="flex flex-wrap justify-center gap-4 md:gap-6 mt-16 max-w-4xl mx-auto"
//         >
//           {skills.map((skill, i) => (
//             <motion.div
//               key={i}
//               variants={itemVariants}
//               whileHover={{ y: -5, scale: 1.05 }}
//               className="px-6 py-4 md:px-8 md:py-5 bg-[var(--color-brand-card)] border border-white/5 rounded-2xl shadow-lg flex items-center justify-center font-bold text-[var(--color-brand-heading)] text-lg hover:border-[var(--color-brand-primary)]/50 hover:shadow-[0_10px_30px_rgba(124,93,250,0.15)] transition-all cursor-default"
//             >
//               {skill}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
