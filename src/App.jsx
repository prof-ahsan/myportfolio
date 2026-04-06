import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navvbar } from './components/Navvbar';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import Aboutpage from './Pages/Aboutpage';
import Ready from './components/Ready';

const App = () => {
  return (
    <div>
      {/* <Home /> */}
  {/* <Navvbar /> */}

<BrowserRouter>
  <Navvbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<Aboutpage />} />
    <Route path="/skills" element={<SkillsSection />} />
    <Route path="/projects" element={<PortfolioSection />} />
    <Route path="/contact" element={<ContactSection />} />
  </Routes>
</BrowserRouter>
    </div>
  )
}

export default App
