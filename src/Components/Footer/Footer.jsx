import React from "react";
import { Github, Linkedin, Heart, ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/5 pt-16 pb-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Brand/Logo Section */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl text-white tracking-tighter">
              Abdullah<span className="text-blue-500"> Shamim</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Building digital experiences that combine modern technology with
              clean, impactful design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links & Scroll to Top */}
          <div className="flex items-center gap-6">
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
            </div>
            <button
              onClick={scrollToTop}
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 group"
            >
              <ArrowUp
                size={20}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Abdullah Shamim. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
            <span>Made with</span>
            <Heart
              size={12}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
