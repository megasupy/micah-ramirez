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
      <p className="section-header-text-small m-0">Portfolio Website & REST API</p>
    </div>
    <ul className="text-left space-y-2 list-disc pl-4">
      <li>Developed single-page frontend using React.js and Tailwind, then deployed it to a custom .tech domain via Github Pages</li>
      <li>Implemented smooth scrolling navigation and interactive UI components for seamless user experience.</li>
      <li>Developed a custom REST API using ASP.NET core and Azure PostgreSQL Flexible Server to handle contact form submissions.</li>
      <li>Hosted the REST API on an Nginx server running on an Azure virtual machine.</li>
    </ul>
    <div className="mt-6 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a title="https://github.com/megasupy/micah-ramirez" href="https://github.com/megasupy/micah-ramirez" target="_blank">
        View Github Repository (Portfolio)
      </a>
    </div>
    <div className="mt-2 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a title="https://github.com/megasupy/micah-ramirez" href="https://github.com/megasupy/MessageAPI" target="_blank">
        View Github Repository (REST API)
      </a>
    </div>
    <div className="mt-2 default-button self-center items-center">
      <FontAwesomeIcon icon={faGlobe} className="default-icons-color mr-3"/>
      <a title="https://www.micahramirez.tech" href="https://www.micahramirez.tech" target="_blank">
        View Site
      </a>
    </div>
  </div>;
}