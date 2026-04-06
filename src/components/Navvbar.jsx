import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./Button";

export function Navvbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    // { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-brand-bg)]/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-white">
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 px-2 py-1 rounded">
            A
          </span>{" "}
          Portfolio
        </NavLink>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative text-lg transition-colors ${
                  isActive
                    ? "text-[var(--color-brand-primary)]"
                    : "text-[var(--color-brand-text)] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-brand-primary)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav> */}

        {/* CTA */}
        <div className="hidden md:flex items-center gap-5">

           <nav className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative text-lg transition-colors ${
                  isActive
                    ? "text-[var(--color-brand-primary)]"
                    : "text-[var(--color-brand-text)] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-brand-primary)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>






          <NavLink to="/contact">
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-500">
              Contact
            </Button>
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-brand-card)] flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-[var(--color-brand-primary)]"
                    : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            <Button>Contact</Button>
          </NavLink>
        </div>
      )}
    </header>
  );
}