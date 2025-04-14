import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function PantryAppDescription(props) {
  return <li
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="flex items-center mb-3">
      <FontAwesomeIcon icon={faUtensils} className="default-icons-color section-header-text-small mr-3"/>
      <p className="section-header-text-small m-0">Pantry Management App</p>
    </div>
    <ul className="text-left space-y-2 list-disc pl-4">
      <li>Implemented 2 interactive pages in React Native and JavaScript, handling both the frontend and backend.
      </li>
      <li>Integrated PostgreSQL via Supabase for authentication and database management, ensuring secure,
        user-specific access to data.
      </li>
      <li>Parsed JSON data fetched from TheMealDB API to display 300+ recipes dynamically based on user data.</li>
    </ul>
    <div className="mt-6 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a href="https://github.com/megasupy/micah-ramirez" target="_blank">
        View Github Repository
      </a>
    </div>
  </li>;
}