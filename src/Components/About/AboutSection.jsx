import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-gray-900 min-h-[60vh] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE – Normal Text */}
          <div className="text-gray-300">
            <p className="text-lg leading-relaxed mb-6">
              Hi, I'm{" "}
              <span className="text-white font-semibold">Abdullah Shamim</span>,
              a frontend-focused MERN Stack Developer. I like building clean,
              fast, and usable web applications that don't fall apart when real
              people use them.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I started with the basics — HTML, CSS, and JavaScript — then moved
              into React, Next.js, Express, and MongoDB. Most of my work comes
              from personal and practice projects, but I treat them like real
              products, not just course assignments.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              What I enjoy most is turning rough ideas into working UI. I care
              about structure, readability, and performance so projects stay
              manageable as they grow.
            </p>

            <p className="text-lg leading-relaxed">
              I'm still early in my career, but I'm serious about improving. I
              value clear communication, honest feedback, and building things
              with quality in mind.
            </p>
          </div>

          {/* RIGHT SIDE – About Me Title */}
          <div className="text-center md:text-right">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6">
              About <br />
              <span className="text-blue-500">Me</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed md:ml-auto">
              A short introduction about who I am, how I work, and what I care
              about as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
