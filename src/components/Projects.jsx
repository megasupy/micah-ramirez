import React, {Profiler, useRef} from "react";
import "../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faMobileAlt, faGamepad, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import ShaderSandboxDescription from "./ProjectComponents/ShaderSandboxDescription.jsx";
import CoreMarketDescription from "./ProjectComponents/CoreMarketDescription.jsx";
import StarSurvivorsDescription from "./ProjectComponents/StarSurvivorsDescription.jsx";
import SmallProjectsDescription from "./ProjectComponents/SmallProjectsDescription.jsx";

export default function Projects() {
  // Create refs for each section you want to scroll to
  const shaderSandboxRef = useRef(null);
  const coreMarketRef = useRef(null);
  const starSurvivorsRef = useRef(null);
  const smallProjectsRef = useRef(null);

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
        <p className="section-header-text pb-6 sm:pb-8">Projects</p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <button
            onClick={() => scrollToSection(shaderSandboxRef)}
            className="projects-buttons"
          >
            <FontAwesomeIcon icon={faCode} className="mr-2 w-auto h-auto"/>
            Shader Sandbox
          </button>
          <button
            onClick={() => scrollToSection(coreMarketRef)}
            className="projects-buttons"
          >
            <FontAwesomeIcon icon={faMobileAlt} className="mr-2 w-auto h-auto"/>
            CoreMarket
          </button>
          <button
            onClick={() => scrollToSection(starSurvivorsRef)}
            className="projects-buttons"
          >
            <FontAwesomeIcon icon={faGamepad} className="mr-2 w-auto h-auto"/>
            Star Survivors
          </button>
          <button
            onClick={() => scrollToSection(smallProjectsRef)}
            className="projects-buttons"
          >
            <FontAwesomeIcon icon={faLaptopCode} className="mr-2 w-auto h-auto"/>
            Small Projects
          </button>
        </div>
        <p className="pt-1 sm:pt-2"></p>
        <ShaderSandboxDescription ref={shaderSandboxRef}/>
        <CoreMarketDescription ref={coreMarketRef}/>
        <StarSurvivorsDescription ref={starSurvivorsRef}/>
        <SmallProjectsDescription ref={smallProjectsRef}/>
      </ul>
    </Profiler>
  );
}
