import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGamepad, faGlobe, faTerminal, faUtensils} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ProjectButtons(props) {
  return <div className="text-center ">

    {/* Navigation buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <button
        onClick={props.onClick}
        className="projects-buttons"
      >
        <FontAwesomeIcon icon={faGlobe} className="mr-2"/>
        Portfolio Website
      </button>
      <button
        onClick={props.onClick1}
        className="projects-buttons "
      >
        <FontAwesomeIcon icon={faUtensils} className="mr-2"/>
        Pantry App
      </button>
      <button
        onClick={props.onClick2}
        className="projects-buttons "
      >
        <FontAwesomeIcon icon={faTerminal} className="mr-2"/>
        Bash Clone
      </button>
      <button
        onClick={props.onClick3}
        className="projects-buttons"
      >
        <FontAwesomeIcon icon={faGamepad} className="mr-2"/>
        Game Jam
      </button>
    </div>
  </div>;
}