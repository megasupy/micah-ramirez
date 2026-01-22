import React from "react";
import "../../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

export default function CoreMarketDescription(props) {
  return <div
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="mb-3">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faMobileAlt} className="default-icons-color section-header-text-small w-0 h-0 lg:w-auto lg:h-auto lg:mr-3"/>
        <p className="section-header-text-small m-0">CoreMarket: Project Manager, App Developer</p>
      </div>
      <p className="section-header-subtext-small m-0 text-center">August 2025 – December 2025</p>
    </div>
    <ul className="text-left space-y-2 list-disc pl-4">
      <li>Led as part of a team of 4, planning tasks and deadlines to ensure completion of our mock product marketplace.</li>
      <li>Implemented the mobile frontend in Flutter, including authentication, Stripe payments, and interaction with a MongoDB backend.</li>
    </ul>
    <div className="mt-6 default-button self-center items-center">
      <FontAwesomeIcon icon={faGlobe} className="default-icons-color mr-3"/>
      <a title="CoreMarket" href="https://coremarket.csprojects.dev/" target="_blank">
        View Site
      </a>
    </div>
    <div className="mt-2 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a title="CoreMarket GitHub" href="https://github.com/cachille061/large-project" target="_blank">
        View Github Repository
      </a>
    </div>
  </div>;
}
