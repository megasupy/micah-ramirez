import React from "react";
import "../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Icons() {
  return (<div className="flex flex-row justify-center gap-16 pt-10 pb-8">
    <a
      title="My Linkedin"
      href="https://www.linkedin.com/in/micah-ramirez-588174310/"
      target="_blank"
    >
      {/**class instead of className because className doesn't work with the sizing for some reason */}
      <FontAwesomeIcon
        icon={faLinkedin}
        className="default-icon-large default-icons-color default-icon-clickable"
      />
    </a>
    <a title="My GitHub" href="https://github.com/megasupy" target="_blank">
      <FontAwesomeIcon
        icon={faGithub}
        className="default-icon-large default-icons-color default-icon-clickable"
      />
    </a>
  </div>);
}