import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function EducationButtons(props) {
  return <div className="text-center ">

    {/* Navigation buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <button
        onClick={props.onClick}
        className="projects-buttons"
      >
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2"/>
        UCF
      </button>
      <button
        onClick={props.onClick1}
        className="projects-buttons "
      >
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2"/>
        SSC
      </button>
    </div>
  </div>;
}