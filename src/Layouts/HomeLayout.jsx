import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import PortfolioHero from "../Components/Bannar/PortfolioHero ";
import EducationJourney from "../Components/Education/EducationJourney";
import SkillsSection from "../Components/Skills/SkillsSection";
import ProjectsSection from "../Components/Projects/ProjectsSection";
import ConnectSection from "../Components/Connect/ConnectSection";
import Footer from "../Components/Footer/Footer";
import AboutSection from "../Components/About/AboutSection";
import Experience from "../Components/Experience/Experience";
import ChatbotButton from "../Components/AiChat/ChatbotButton";

const HomeLayout = () => {
  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home */}
        <section id="home">
          <PortfolioHero />
        </section>

        {/* About */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Skills */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Education */}
        <section id="education">
          <EducationJourney />
        </section>

        {/* Projects */}
        <section id="projects">
          <ProjectsSection />
        </section>
        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Contact */}
        <section id="contact">
          <ConnectSection />
        </section>
        {/* Chat bot button */}
        <section>
          <ChatbotButton />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
