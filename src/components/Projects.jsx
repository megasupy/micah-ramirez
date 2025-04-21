import React, {Profiler, useRef} from "react";
import "../index.css";
import PortfolioSiteDescription from "./ProjectComponents/PortfolioSiteDescription.jsx";
import PantryAppDescription from "./ProjectComponents/PantryAppDescription.jsx";
import ProjectButtons from "./ProjectComponents/ProjectButtons.jsx";
import BashCloneDescription from "./ProjectComponents/BashCloneDescription.jsx";
import ScaleBotDescription from "./ProjectComponents/ScaleBotDescription.jsx";

export default function Projects() {
  // Create refs for each section you want to scroll to
  const portfolioRef = useRef(null);
  const pantryAppRef = useRef(null);
  const bashCloneRef = useRef(null);
  const gameJamRef = useRef(null);

  function scrollToSection(ref) {
    const refY = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: refY - 40,
      behavior: 'smooth',
    })
  }

  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
  }

  return (
    <Profiler id={"Projects"} onRender={onRender}>
      <ul className="default-paragraph-div">
        <p className="section-header-text pb-8">Projects</p>
        <ProjectButtons onClick={() => scrollToSection(portfolioRef)} onClick1={() => scrollToSection(pantryAppRef)}
                 onClick2={() => scrollToSection(bashCloneRef)} onClick3={() => scrollToSection(gameJamRef)}/>
        <p className="pt-2"></p>
        <PortfolioSiteDescription ref={portfolioRef}/>
        <PantryAppDescription ref={pantryAppRef}/>
        <BashCloneDescription ref={bashCloneRef}/>
        <ScaleBotDescription ref={gameJamRef}/>
      </ul>
    </Profiler>
  );
}