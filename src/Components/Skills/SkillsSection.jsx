import React from "react";
import {
  FileCode,
  Layers,
  Database,
  Terminal,
  Settings,
  Smartphone,
  Globe,
  Github,
  Cpu,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layers className="text-[#00ff9d]" />,
      color: "border-[#00ff9d]/30",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-purple-400" />,
      color: "border-purple-500/30",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase"],
    },
    {
      title: "Tools & Others",
      icon: <Settings className="text-blue-400" />,
      color: "border-blue-500/30",
      skills: [
        "Git & GitHub",
        "Vercel / Netlify",
        "Figma to Code",
        "Postman",
        "Responsive Design",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white md:py-25 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#ba6efc] mb-4 tracking-wider uppercase">
            My Technical Skills
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#c27aff] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase">
            The web as a canvas,{" "}
            <span className="text-white">
              and code as my brush. These are the tools I use to bring ideas to
              life.
            </span>
          </p>
        </div>
        {/*  */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-purple-400">
            My Technical Skills
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto italic">
            "The web as a canvas, and code as my brush. These are the tools I
            use to bring ideas to life."
          </p>
        </div> */}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 bg-[#111827]/50 border ${category.color} rounded-3xl backdrop-blur-xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-400 hover:text-[#00ff9d] hover:border-[#00ff9d]/50 hover:bg-[#00ff9d]/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Floating Tech Stack Icons */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <FileCode size={40} />
          <Globe size={40} />
          <Terminal size={40} />
          <Github size={40} />
          <Cpu size={40} />
          <Smartphone size={40} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
