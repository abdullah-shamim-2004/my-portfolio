import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import PortfolioHero from "../Components/Bannar/PortfolioHero ";
import EducationJourney from "../Components/Education/EducationJourney";
import SkillsSection from "../Components/Skills/SkillsSection";
import ProjectsSection from "../Components/Projects/ProjectsSection";
import ConnectSection from "../Components/Connect/ConnectSection";
import Footer from "../Components/Footer/Footer";
import AboutSection from "../Components/About/AboutSection";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <PortfolioHero></PortfolioHero>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <EducationJourney></EducationJourney>
        <ProjectsSection></ProjectsSection>
        <ConnectSection></ConnectSection>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
