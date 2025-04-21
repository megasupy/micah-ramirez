import React, {Profiler, useRef} from "react";
import "../index.css";
import SSC from "./EducationComponents/SSC.jsx"
import UCF from "./EducationComponents/UCF.jsx"
import EducationButtons from "./EducationComponents/EducationButtons.jsx";

export default function Education() {
  // Create refs for each section you want to scroll to
  const ucfRef = useRef(null);
  const sscRef = useRef(null);

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
    <Profiler id={"Education"} onRender={onRender}>
      <ul className="default-paragraph-div">
        <p className="section-header-text pb-8">Education</p>
        {/*<EducationButtons onClick={() => scrollToSection(ucfRef)} onClick1={() => scrollToSection(sscRef)}>*/}
        <p className="pt-2"></p>
        <UCF ref={ucfRef}/>
        <SSC ref={sscRef}/>

      </ul>
    </Profiler>
  );
}