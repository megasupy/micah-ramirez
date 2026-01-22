import React, {Profiler, useRef} from "react";
import "../index.css";
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
        <p className="section-header-text pb-8">Projects</p>
        <p className="pt-2"></p>
        <ShaderSandboxDescription ref={shaderSandboxRef}/>
        <CoreMarketDescription ref={coreMarketRef}/>
        <StarSurvivorsDescription ref={starSurvivorsRef}/>
        <SmallProjectsDescription ref={smallProjectsRef}/>
      </ul>
    </Profiler>
  );
}
