import React from "react";
import "../../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

export default function SmallProjectsDescription(props) {
  return <div
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="flex items-center mb-3">
      <FontAwesomeIcon icon={faLaptopCode} className="default-icons-color section-header-text-small mr-3"/>
      <p className="section-header-text-small m-0">Small Projects & Hackathons: Various Roles</p>
      <p className="section-header-subtext-small m-0 ml-auto">August 2021 – Present</p>
    </div>
    <ul className="text-left space-y-2 list-disc pl-4">
      <li>Built a Raspberry PI Pico W web server that lets users control a lightbulb remotely from the browser.</li>
      <li>Developed Portfolio Website that can use a C# REST API to send messages.</li>
      <li>Knight Hacks 8: Developed a python backend in 36 hours for TouchGrass, a website that recognizes images using Google's Gemini API.</li>
      <li>2024 GMTK Game Jam: Programmed ScaleBot's Ascent, a procedurally generated climbing game created in 96 hours using Unity.</li>
      <li>2021 GMTK Game Jam: Designed levels, art, and music for a puzzle game called Family Gathering created in 48 hours using Unity.</li>
    </ul>
    <div className="mt-6 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a title="Portfolio GitHub" href="https://github.com/megasupy/micah-ramirez" target="_blank">
        View Github Repository (Portfolio)
      </a>
    </div>
    <div className="mt-2 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a title="MessageAPI GitHub" href="https://github.com/megasupy/MessageAPI" target="_blank">
        View Github Repository (REST API)
      </a>
    </div>
    <div className="mt-2 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a title="TouchGrass GitHub" href="https://github.com/Eddiewithaneye/touchgrass" target="_blank">
        View Github Repository (TouchGrass)
      </a>
    </div>
    <div className="mt-2 default-button self-center items-center">
      <FontAwesomeIcon icon={faGamepad} className="default-icons-color mr-3"/>
      <a title="ScaleBot's Ascent" href="https://megasupy.itch.io/scalebotsascent" target="_blank">
        Play ScaleBot's Ascent
      </a>
    </div>
    <div className="mt-2 default-button self-center items-center">
      <FontAwesomeIcon icon={faGamepad} className="default-icons-color mr-3"/>
      <a title="Family Gathering" href="https://itjustismatthew.itch.io/family-gathering" target="_blank">
        Play Family Gathering
      </a>
    </div>
  </div>;
}
