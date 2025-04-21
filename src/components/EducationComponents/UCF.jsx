import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function UCF(props) {
  return <li
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="flex items-center mb-3">
      <FontAwesomeIcon icon={faGraduationCap} className="default-icons-color section-header-text-small mr-3"/>
      <p className="section-header-text-small m-0">University of Central Florida</p>
    </div>
    <ul className="text-left list-disc pl-4">
      <li>3.9 GPA
      </li>

    </ul>
  </li>;
}