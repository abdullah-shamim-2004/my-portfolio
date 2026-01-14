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
    <div className="min-h-[70vh] bg-[#0a0f1a] text-white py-20 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row  gap-12 my-auto items-center ">
        <div className="md:col-span-4 md:sticky ">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="">Technical</span> <br />
            <span className="text-blue-500">Skills</span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-transparent mb-6"></div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            The web is my canvas,{" "}
            <span className="text-white font-medium">
              and code is my brush.
            </span>{" "}
            I use modern tools and technologies to build fast, scalable, and
            visually engaging digital experiences.
          </p>
        </div>
        {/* RIGHT SIDE – Skills */}
        <div className="md:col-span-8">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group max-w-[600px] relative p-8 rounded-[2.5rem] bg-[#0f172a] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                <div
                  className={`absolute -right-4 -top-4 w-32 h-32 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full ${category.color.replace(
                    "border-",
                    "bg-"
                  )}`}
                />

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-500 group-hover:rotate-3 shadow-inner`}
                    >
                      <span
                        className={`${category.color.replace(
                          "border-",
                          "text-"
                        )} filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
                      >
                        {category.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-md font-semibold text-gray-200 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
                  <div
                    className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${category.color.replace(
                      "border-",
                      "bg-"
                    )}`}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
