import React from "react";
import "../../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function PortfolioSiteDescription(props) {
  return <div
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="flex items-center mb-3">
      <FontAwesomeIcon icon={faGlobe} className="default-icons-color section-header-text-small mr-3"/>
      <p className="section-header-text-small m-0">Portfolio Website</p>
    </div>
    <ul className="text-left space-y-2 list-disc pl-4">
      <li>Designed and developed this personal portfolio website using React.js and Tailwind CSS.</li>
      <li>Implemented smooth scrolling navigation and interactive UI components for improved user experience.</li>
      <li>Integrated with Supabase backend for contact form submissions.</li>
    </ul>
    <div className="mt-6 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a href="https://github.com/megasupy/micah-ramirez" target="_blank">
        View Github Repository
      </a>
    </div>
  </div>;
}