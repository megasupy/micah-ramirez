import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ScaleBotDescription(props) {
  return <li
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="flex items-center mb-3">
      <FontAwesomeIcon icon={faGamepad} className="default-icons-color section-header-text-small mr-3"/>
      <p className="section-header-text-small m-0">ScaleBot's Ascent</p>
    </div>
    <ul className="text-left space-y-2 list-disc pl-4">
      <li>Designed physics-based movement, dynamic audio systems, and procedural level generation for Unity
        Engine using C#.
      </li>
      <li>Developed a playable game in 48 hours with a team of 3 developers.</li>
    </ul>
    <div className="mt-6 default-button self-center">
      <FontAwesomeIcon icon={faGamepad} className="default-icons-color mr-3"/>
      <a title="Play Scalebot's Ascent on Itch.io" href="https://itch.io/embed-upload/11261341?color=333333" target="_blank">
        Play ScaleBot's Ascent
      </a>
    </div>
  </li>;
}