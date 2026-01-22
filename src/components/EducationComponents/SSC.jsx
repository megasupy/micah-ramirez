import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function SSC(props) {
  return <li
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="mb-3">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faGraduationCap} className="default-icons-color section-header-text-small w-0 h-0 lg:w-auto lg:h-auto lg:mr-3"/>
        <div className="flex flex-col">
          <p className="section-header-text-small py-1 m-0">Seminole State College of Florida</p>
          <p className="section-header-text-small m-0 font-normal pt-0">Associate in Arts Degree</p>
        </div>
      </div>
      <p className={"section-header-subtext-small m-0 text-center"}>Graduated December 2023</p>
    </div>
    <ul className="text-left list-disc pl-4">
      <li>3.9 GPA</li>
    </ul>
  </li>;
}