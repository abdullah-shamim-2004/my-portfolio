import React from 'react';
import { Github, ExternalLink, Globe, Code2, Server } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "eTuitionBD",
      description: "A full-stack online tuition management platform with role-based authentication (Student, Tutor, Admin), secure JWT-protected APIs, tuition posting, search, filtering, pagination, tutor...",
      tags: ["React", "React Router", "TailwindCSS", "Firebase Auth", "JWT", "Node.js", "Express.js", "MongoDB", "Axios", "Stripe", "REST API"],
      image: "https://i.ibb.co/v4m0Yv8/tuition.png", // Replace with your actual image link
      codeLink: "#",
      serverLink: "#",
      liveLink: "#"
    },
    {
      title: "Model Stack",
      description: "A full-stack AI model inventory system where users can add, manage, filter, and purchase AI models. Includes Firebase-based authentication, secure CRUD operations, a framework-specific...",
      tags: ["React", "TailwindCSS", "Firebase Auth", "Node.js", "Express.js", "MongoDB", "Axios", "REST API"],
      image: "https://i.ibb.co/L8N7M7K/modelstack.png",
      codeLink: "#",
      serverLink: "#",
      liveLink: "#"
    },
    {
      title: "Adal Brainwave",
      description: "A modern AI-themed landing page built with reusable components, smooth section-based animations, and a responsive interface optimized for all devices.",
      tags: ["React.js", "Tailwind CSS", "Javascript", "Vite", "Netlify"],
      image: "https://i.ibb.co/YyYfG7Y/brainwave.png",
      codeLink: "#",
      liveLink: "#"
    },
    {
      title: "Awesome Nike Landing Page",
      description: "A visually striking and responsive landing page built for showcasing Nike products with premium hero animations, dynamic product sections, and a polished brand-focused UI experience.",
      tags: ["React.js", "Tailwind CSS", "CSS Animations", "Vercel"],
      image: "https://i.ibb.co/nRL3S8k/nike.png",
      codeLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Showcasing my expertise through innovative solutions built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#161b22] border border-gray-800 rounded-3xl overflow-hidden flex flex-col hover:border-blue-500/30 transition-all duration-300">
              
              {/* Project Preview Image */}
              <div className="relative group overflow-hidden h-64 bg-[#0d1117]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] px-2.5 py-1 bg-[#21262d] text-gray-300 border border-gray-700 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (As per image) */}
                <div className="mt-auto flex flex-wrap gap-3">
                  <a href={project.codeLink} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors">
                    <Code2 size={14} /> Code
                  </a>
                  
                  {project.serverLink && (
                    <a href={project.serverLink} className="flex items-center gap-2 px-4 py-2 bg-[#21262d] text-white border border-gray-700 rounded-lg text-xs font-bold hover:bg-[#30363d] transition-colors">
                      <Server size={14} /> Server
                    </a>
                  )}

                  <a href={project.liveLink} className="flex items-center gap-2 px-4 py-2 bg-[#21262d] text-white border border-gray-700 rounded-lg text-xs font-bold hover:bg-[#30363d] transition-colors">
                    <ExternalLink size={14} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectsSection;