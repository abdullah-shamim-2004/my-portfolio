import React from "react";
import { Github, ExternalLink, Globe, Code2, Server } from "lucide-react";
import scholar from "../../assets/scholar.png";
import local from "../../assets/local.png";
import snow from "../../assets/snow.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ScholarStrim",
      description:
        "A full-stack web application that helps students discover scholarships, apply securely, and manage applications, while allowing admins and moderators to control and verify scholarship data efficiently.",
      tags: [
        "React",
        "React Router",
        "TailwindCSS",
        "Firebase Auth",
        "JWT",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Axios",
        "Stripe",
        "REST API",
      ],
      image: scholar,
      codeLink: "https://github.com/abdullah-shamim-2004/ScholarStream-Client",
      serverLink:
        "https://github.com/abdullah-shamim-2004/ScholarStream-Server",
      liveLink: "https://scholar-stream-client.netlify.app/",
    },
    {
      title: " LocalDelish ",
      description:
        "LocalDelish is a community-driven platform for food enthusiasts who love exploring local restaurants, street food, and home-cooked meals. Users can share their food experiences, post reviews with photos, and discover what others are enjoying nearby.",
      tags: [
        "React",
        "TailwindCSS",
        "Firebase Auth",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Axios",
        "REST API",
      ],
      image: local,
      codeLink: "https://github.com/abdullah-shamim-2004/Local-Delish-Client",
      serverLink: "https://github.com/abdullah-shamim-2004/Local-Delish-Server",
      liveLink: "https://local-delish-client.netlify.app/",
    },
    {
      title: "SnowPaws",
      description:
        "SnowPaws is a modern pet care service web application built with React, Firebase, and Tailwind CSS.It helps pet owners find reliable winter care packages, meet expert vets, and manage their pets wellbeing easily.",
      tags: ["React.js", "Tailwind CSS", "Javascript", "Vite", "Netlify"],
      image: snow,
      codeLink: "https://github.com/abdullah-shamim-2004/SnowPaws",
      liveLink: "https://snow-paws.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Featured <br className="hidden md:block" />
            <span className="text-blue-500 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-28 h-1 bg-blue-600 mx-auto my-6 rounded-full"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise through innovative solutions built with
            modern technologies, delivering visually stunning and highly
            functional web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-gray-800 rounded-3xl overflow-hidden flex flex-col hover:border-blue-500/30 transition-all duration-300"
            >
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
                    <span
                      key={idx}
                      className="text-[10px] px-2.5 py-1 bg-[#21262d] text-gray-300 border border-gray-700 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (As per image) */}
                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={project.codeLink}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors"
                  >
                    <Code2 size={14} /> Code
                  </a>

                  {project.serverLink && (
                    <a
                      href={project.serverLink}
                      className="flex items-center gap-2 px-4 py-2 bg-[#21262d] text-white border border-gray-700 rounded-lg text-xs font-bold hover:bg-[#30363d] transition-colors"
                    >
                      <Server size={14} /> Server
                    </a>
                  )}

                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 px-4 py-2 bg-[#21262d] text-white border border-gray-700 rounded-lg text-xs font-bold hover:bg-[#30363d] transition-colors"
                  >
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
