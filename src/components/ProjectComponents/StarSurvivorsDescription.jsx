import React from "react";
import "../../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

export default function StarSurvivorsDescription(props) {
  return <div
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="mb-3">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faGamepad} className="default-icons-color section-header-text-small mr-3"/>
        <p className="section-header-text-small m-0">Star Survivors: Unity Game Developer</p>
      </div>
      <p className="section-header-subtext-small m-0 ml-11">August 2025 – December 2025</p>
    </div>
    <ul className="text-left space-y-2 list-disc pl-4">
      <li>Worked with a student team of 4, using C# and Unity to create a game about surviving enemies while completing objectives.</li>
      <li>Developed dynamic, interactive UI components, including menus, weapon displays, and moving objective indicators.</li>
      <li>Implemented sound mixing, music, sound effects, some VFX, and some shaders.</li>
      <li>Contributed to all aspects of the project, including initial project architecture, balancing, and bug fixes.</li>
    </ul>
    <div className="mt-6 default-button self-center items-center">
      <FontAwesomeIcon icon={faGamepad} className="default-icons-color mr-3"/>
      <a title="Play Star Survivors" href="https://megasupy.itch.io/star-survivors" target="_blank">
        Play Star Survivors
      </a>
    </div>
  </div>;
}
