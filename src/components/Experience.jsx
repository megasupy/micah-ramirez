import React, {Profiler, useRef} from "react";
import "../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  // Create refs for each section you want to scroll to
  const dataAnnotationRef = useRef(null);
  const healthStreamRef = useRef(null);
  const calvaryChapelRef = useRef(null);

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
    <Profiler id={"Experience"} onRender={onRender}>
      <ul className="default-paragraph-div">
        <p className="section-header-text pb-8">Experience</p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => scrollToSection(dataAnnotationRef)}
            className="projects-buttons"
          >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>
            DataAnnotation.tech
          </button>
          <button
            onClick={() => scrollToSection(healthStreamRef)}
            className="projects-buttons"
          >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>
            HealthStream
          </button>
          <button
            onClick={() => scrollToSection(calvaryChapelRef)}
            className="projects-buttons"
          >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>
            Calvary Chapel Orlando
          </button>
        </div>
        <p className="pt-2"></p>
        
        {/* DataAnnotation.tech */}
        <div ref={dataAnnotationRef} className="indent-paragraph-container-2">
          <div className="mb-3">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="default-icons-color section-header-text-small mr-3"/>
              <p className="section-header-text-small m-0">DataAnnotation.tech: Programming Task Contributor</p>
            </div>
            <p className="section-header-subtext-small m-0 ml-11">March 2025 - Present</p>
          </div>
          <ul className="text-left space-y-2 list-disc pl-4">
            <li>Reviewed AI generated code across languages like Javascript and Python for correctness, readability, and instruction following.</li>
            <li>Identified and fixed logic, syntax, and reasoning errors in AI responses to improve output quality.</li>
          </ul>
        </div>

        {/* HealthStream */}
        <div ref={healthStreamRef} className="indent-paragraph-container-2">
          <div className="mb-3">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="default-icons-color section-header-text-small mr-3"/>
              <p className="section-header-text-small m-0">HealthStream: Software Developer Intern</p>
            </div>
            <p className="section-header-subtext-small m-0 ml-11">June 2025 – December 2025</p>
          </div>
          <ul className="text-left space-y-2 list-disc pl-4">
            <li>Resolved front-end and back-end production issues using Angular and ASP.NET, improving application reliability.</li>
            <li>Wrote SQL Server queries to identify and reverse damage caused by bugs.</li>
            <li>Implemented features according to specific user requests, improving functionality and increasing user satisfaction.</li>
            <li>Researched and developed a successful pitch for a new project.</li>
          </ul>
        </div>

        {/* Calvary Chapel Orlando */}
        <div ref={calvaryChapelRef} className="indent-paragraph-container-2">
          <div className="mb-3">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="default-icons-color section-header-text-small mr-3"/>
              <p className="section-header-text-small m-0">Calvary Chapel Orlando: Custodian, Volunteer Coordinator</p>
            </div>
            <p className="section-header-subtext-small m-0 ml-11">August 2022 – June 2025</p>
          </div>
          <ul className="text-left space-y-2 list-disc pl-4">
            <li>Maintained standards of cleanliness for 400+ attendees through regular inspections to identify and address maintenance issues.</li>
            <li>Communicated effectively with teams of 5+ volunteers to swiftly address cleaning needs and prepare for events.</li>
          </ul>
        </div>
      </ul>
    </Profiler>
  );
}
