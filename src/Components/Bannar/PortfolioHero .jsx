import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const PortfolioHero = () => {
  return (
    <div className="min-h-[90vh] bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <p className="text-lg text-gray-400 font-medium">
            Hey, I'm Shamim 👋
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-blue-500">MERN-STACK</span> <br />
            Developer
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            I'm a MERN-STACK developer based in BD, I'll help you build
            beautiful websites your users will love.
          </p>
          <div className="flex flex-col items-start  text-center justify-center gap-3">
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-black border border-gray-800 rounded-xl font-semibold hover:bg-gray-900 transition-all shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                Download Resume
              </button>
              <a
                href="#projects"
                className="px-8 py-4 bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-xl font-semibold hover:bg-gray-800 transition-all"
              >
                Browse Projects
              </a>
            </div>
            {/* Social Links & Scroll to Top */}
            <div className="flex items-center gap-6 px-3">
              <div className="flex gap-4">
                <a
                  href="https://github.com/abdullah-shamim-2004"
                  className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-white/5"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdullah-shamim-patwary/"
                  className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-white/5"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:abdullahshamim884@gmail.com"
                  className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-white/5"
                  aria-label="Send email"
                >
                  <Mail size={20} />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full"></div>

          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full border border-purple-500/30 p-4">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-500/50">
              <img
                src={`https://i.ibb.co.com/DHBmGQRh/IMG-20250706-114017.jpg`}
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioHero;
