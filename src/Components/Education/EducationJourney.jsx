import React from "react";
import {
  BookOpen,
  Code2,
  Database,
  Layout,
  Server,
  Cpu,
  Globe,
  Terminal,
  ShieldCheck,
} from "lucide-react";

const EducationJourney = () => {
  return (
    <div className="min-h-[60vh] bg-gray-900 text-white md:py-25 px-4 font-sans selection:bg-[#00ff9d]/30">
      <div className="max-w-7xl flex flex-col-reverse gap-5 md:gap-20 md:flex-row justify-between items-center mx-auto">
        <div>
          <div className="space-y-10">
            {/* Section 1: Diploma (Green Theme) */}
            <div className="group relative border border-[#00ff9d]/20 bg-[#161b22]/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,255,157,0.05)] transition-all hover:border-[#00ff9d]/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-[#00ff9d]/10 rounded-xl border border-[#00ff9d]/30">
                    <BookOpen className="w-8 h-8 text-[#00ff9d]" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                      Diploma in Computer Science & Technology
                    </h3>
                    <p className="text-[#00ff9d] font-semibold text-sm">
                      Chandpur Polytechnic Institute
                    </p>
                  </div>
                </div>
                <div className="inline-block px-4 py-1.5 bg-[#00ff9d]/10 border border-[#00ff9d]/20 rounded-lg text-xs font-mono text-[#00ff9d]">
                  2024 — Present
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#00ff9d]"></div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                  Subjects & Achievements
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <SkillItem
                  icon={<Terminal size={16} />}
                  text="Programming Fundamentals (C / Basic JS)"
                  color="green"
                />
                <SkillItem
                  icon={<Cpu size={16} />}
                  text="Discrete Mathematics & Logical Analysis"
                  color="green"
                />
                <SkillItem
                  icon={<Database size={16} />}
                  text="Data Structures Basics"
                  color="green"
                />
                <SkillItem
                  icon={<Globe size={16} />}
                  text="Database Fundamentals"
                  color="green"
                />
                <SkillItem
                  icon={<Server size={16} />}
                  text="Computer Architecture & Networking"
                  color="green"
                />
                <SkillItem
                  icon={<Layout size={16} />}
                  text="Software Engineering Principles"
                  color="green"
                />
              </div>
            </div>

            {/* Section 2: Course (Purple/Blue Theme) */}
            {/* <div className="group relative border border-purple-500/20 bg-[#161b22]/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(139,92,246,0.05)] transition-all hover:border-purple-500/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                    <Code2 className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                      Complete Web Development Course
                    </h3>
                    <p className="text-purple-400 font-semibold text-sm">
                      Programming Hero
                    </p>
                  </div>
                </div>
                <div className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs font-mono text-purple-400">
                  Jun 2025 — Dec 2025
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-purple-500"></div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                  Subjects & Achievements
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <SkillItem
                  icon={<Layout size={16} />}
                  text="Frontend Development with React.js"
                  color="purple"
                />
                <SkillItem
                  icon={<Server size={16} />}
                  text="MERN Stack Development"
                  color="purple"
                />
                <SkillItem
                  icon={<Globe size={16} />}
                  text="Next.js & Full Stack Routing"
                  color="purple"
                />
                <SkillItem
                  icon={<ShieldCheck size={16} />}
                  text="API & Authentication Principles"
                  color="purple"
                />
                <SkillItem
                  icon={<Terminal size={16} />}
                  text="Version Control & Deployment"
                  color="purple"
                />
                <SkillItem
                  icon={<Database size={16} />}
                  text="Data Fetching & State Management"
                  color="purple"
                />
              </div>
            </div> */}
          </div>
          {/* Floating Bottom Badge */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#00ff9d]/5 border border-[#00ff9d]/20">
              <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-ping"></div>
              <p className="text-[10px] md:text-xs font-bold text-[#00ff9d] uppercase tracking-tighter">
                Developing practical skills in frontend, backend and full-stack
                web development
              </p>
            </div>
          </div>{" "}
        </div>
        {/* Header Section */}
        <div className="md:col-span-4 text-end md:sticky ">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="">Education</span> <br />
            <span className="text-blue-500">Journey</span>
          </h2>

          {/* <div className="w-20 h-1.5  bg-gradient-to-r from-blue-500 to-transparent mb-6"></div> */}

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Focused
            <span className="text-white font-medium"> on Computer</span> Science
            & Modern Web Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ icon, text, color }) => (
  <div
    className={`flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-[#0d1117]/50 hover:bg-white/5 transition-all group/item cursor-default`}
  >
    <div
      className={`transition-colors ${
        color === "green"
          ? "text-[#00ff9d]/50 group-hover/item:text-[#00ff9d]"
          : "text-purple-400/50 group-hover/item:text-purple-400"
      }`}
    >
      {icon}
    </div>
    <span className="text-[13px] text-gray-400 group-hover/item:text-white transition-colors leading-tight">
      {text}
    </span>
  </div>
);

export default EducationJourney;
