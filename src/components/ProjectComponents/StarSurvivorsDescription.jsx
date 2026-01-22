import React from "react";
import "../../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

export default function StarSurvivorsDescription(props) {
  return <div
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="flex items-center mb-3">
      <FontAwesomeIcon icon={faGamepad} className="default-icons-color section-header-text-small mr-3"/>
      <p className="section-header-text-small m-0">Star Survivors: Unity Game Developer</p>
      <p className="section-header-subtext-small m-0 ml-auto">August 2025 – December 2025</p>
    </div>
    <ul className="text-left space-y-2 list-disc pl-4">
      <li>Worked with a student team of 4, using C# and Unity to create a game about surviving enemies while completing objectives.</li>
      <li>Developed dynamic, interactive UI components, including menus, weapon displays, and moving objective indicators.</li>
      <li>Implemented sound mixing, music, sound effects, some VFX, and some shaders.</li>
      <li>Contributed to all aspects of the project, including initial project architecture, balancing, and bug fixes.</li>
    </ul>
    {/* Add links here when provided */}
  </div>;
}
