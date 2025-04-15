import React, {useEffect, useRef} from "react";
import {Profiler} from "react";
import Header from "../components/Header.jsx";
import "../index.css";
import AboutMe from "../components/AboutMe.jsx";
import Contact from "../components/Contact.jsx";
import Projects from "../components/Projects.jsx";
import Education from "../components/Education.jsx";


export default function Home() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.querySelector("#themeColor").setAttribute("content", "#E5E7EB");
  });

  function handleScroll(refName) {
    let ref;
    switch (refName) {
      case "Home":
        ref = homeRef;
        break;
      case "Projects":
        ref = projectsRef;
        break;
      case "Contact":
        ref = contactRef;
        break;
      default: return;
    }
    const refY = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: refY - 40,
      behavior: 'smooth',
    })
  }

  const Background = ({children}) => (
    <div className="default-background-color default-background-size">{children}</div>
  );
  const IndentContainer = ({children, className}) => (
    <div className={className}>{children}</div>
  );

  const Copyright = () => (
    <p className="default-text-small text-center pb-4">
      <br/>© 2025 Micah Ramirez. All rights reserved.
    </p>
  );

  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
  }

  return (
    <Profiler id={"App"} onRender={onRender}>
      <Background>
        <Header scrollFunction={handleScroll}/>
        <div ref={homeRef}/>
        <div className="default-content-container top-nav-buffer">
          <IndentContainer className="indent-paragraph-container">
            <AboutMe/>
            <div ref={projectsRef}/>
            <hr className="default-line-break"/>
            <Projects/>
            <hr className="default-line-break" ref={contactRef}/>
            <Contact/>
          </IndentContainer>
          <Copyright/>
        </div>
      </Background>
    </Profiler>
  );
}
