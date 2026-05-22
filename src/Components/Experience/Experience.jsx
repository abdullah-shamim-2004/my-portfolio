import { useEffect, useRef, useState } from "react";
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

const responsibilities = [
  { icon: <FiTerminal />, label: "Developing full-stack web applications" },
  { icon: <FiServer />, label: "Building & integrating RESTful APIs" },
  { icon: <FiCode />, label: "Writing clean, maintainable code" },
  { icon: <FiGlobe />, label: "Building responsive UI interfaces" },
  { icon: <FiGitBranch />, label: "Collaborating in agile sprints & reviews" },
  { icon: <FiLayers />, label: "Full-stack feature ownership" },
];

const techStack = [
  { icon: <SiReact />, label: "React" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiGit />, label: "Git" },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex items-center"
      style={{ background: "#0d1117" }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* ── LEFT: Card ── */}
        <div
          className={`w-full lg:w-[55%] transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div
            className="rounded-2xl p-7 relative overflow-hidden"
            style={{
              background: "#131c2b",
              border: "1px solid rgba(16,185,129,0.25)",
              boxShadow: "0 0 40px rgba(16,185,129,0.05)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #10b981, transparent)",
              }}
            />

            {/* ── Card Header ── */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Icon box */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }}
                >
                  <MdWork className="text-emerald-400 text-xl" />
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">
                    Full-Stack Developer Intern
                  </h3>
                  <p
                    className="text-sm font-semibold mt-0.5"
                    style={{ color: "#10b981" }}
                  >
                    EVU
                  </p>
                </div>
              </div>

              {/* Date badge */}
              <div
                className="flex-shrink-0 text-center px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#10b981",
                  lineHeight: "1.4",
                }}
              >
                2024 —<br />
                Present
              </div>
            </div>

            {/* ── Divider label ── */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px" style={{ background: "#10b981" }} />
              <div
                className="w-7 h-px"
                style={{ background: "rgba(16,185,129,0.4)" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(16,185,129,0.7)" }}
              >
                Responsibilities & Tech
              </span>
            </div>

            {/* ── Responsibilities Grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
              {responsibilities.map(({ icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 hover:border-emerald-500/30"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#10b981", fontSize: "0.85rem" }}>
                    {icon}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(200,210,220,0.8)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Divider label ── */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px" style={{ background: "#10b981" }} />
              <div
                className="w-7 h-px"
                style={{ background: "rgba(16,185,129,0.4)" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(16,185,129,0.7)" }}
              >
                Tech Stack
              </span>
            </div>

            {/* ── Tech Stack Grid ── */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {techStack.map(({ icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 hover:border-emerald-500/40 group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="text-base transition-colors duration-200 group-hover:text-emerald-400"
                    style={{ color: "#10b981" }}
                  >
                    {icon}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "rgba(200,210,220,0.85)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Active badge */}
            <div className="mt-5 flex items-center gap-2">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#10b981",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Currently Active
              </span>
              <span
                className="text-xs"
                style={{ color: "rgba(150,160,180,0.6)" }}
              >
                · On-site · Internship
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Big Title ── */}
        <div
          className={`w-full lg:w-[45%] text-center lg:text-left transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.25s" }}
        >
          <h2
            className="font-black leading-none mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 6rem)",
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            Work
          </h2>
          <h2
            className="font-black leading-none mb-6"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 6rem)",
              color: "#10b981",
              letterSpacing: "-0.03em",
            }}
          >
            Experience
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(160,175,195,0.85)", maxWidth: "360px" }}
          >
            Building real-world{" "}
            <strong style={{ color: "#e2e8f0" }}>full-stack products</strong> as
            a developer intern, turning ideas into shipped, production-ready
            features.
          </p>
        </div>
      </div>

      {/* Google Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap"
      />
    </section>
  );
}
