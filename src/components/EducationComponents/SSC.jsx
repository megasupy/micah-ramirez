import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function SSC(props) {
  return <li
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="flex items-center">
      <FontAwesomeIcon icon={faGraduationCap} className="default-icons-color section-header-text-small mr-3"/>
      <p className="section-header-text-small py-1">Seminole State College of Florida</p>
    </div>
    <p className={"section-header-subtext-small pb-0"}>Associate in Arts Degree</p>
    <p className={"section-header-subtext-small"}>Graduated December 2023</p>
    <ul className="text-left list-disc pl-4">
      <li>3.9 GPA</li>
    </ul>
  </li>;
}