import {} from "react";
import {
  FiCode,
  FiServer,
  FiLayers,
  FiGlobe,
  FiGitBranch,
  FiTerminal,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiGit,
} from "react-icons/si";
import { MdWork } from "react-icons/md";
import { Link } from "react-router";

export default function Experience() {
  return (
    <section className="bg-gray-900 min-h-[60vh] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div
          className="grid grid-cols-1 
         md:grid-cols-2 gap-12 items-center"
        >
          {" "}
          {/* ── LEFT: Card ── */}
          <div className="w-full max-w-[650px] rounded-2xl border border-white/5 bg-[#151b23] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400">
            {/* Top Section */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-blue-400 font-medium">
                  Full-Stack Developer Intern
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">SalesFam</h2>

                <p className="mt-1 text-sm text-zinc-400">Mar 2026 - Present</p>
              </div>

              <div className="h-14 w-14 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <span className="text-2xl">💻</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm leading-6 text-zinc-300">
              The Software as a Service (SaaS) delivery model has become
              prevalent across various business applications, encompassing
              office software, messaging tools, payroll processing systems,
              database management software, and management solutions
            </p>

            {/* Tech Stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Shadcn",
                "PostgreSQL",
                "Prisma",
                "Vercel AI SDK",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">
              <div>
                <p className="text-xs text-zinc-500">Team</p>
                <p className="text-sm font-medium text-white">
                  Remote Collaboration
                </p>
              </div>

              <Link
                to={"https://www.salesfam.com/"}
                className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
              >
                View Project
              </Link>
            </div>
          </div>
          {/* ── RIGHT: Big Title ── */}
          <div className="text-start md:text-right order-1 md:order-2">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Work <br />
              <span className="text-blue-500">Experience</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed md:ml-auto">
              Building real-world{" "}
              <strong className="text-gray-200">full-stack products</strong> as
              a developer intern, turning ideas into shipped, production-ready
              features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
