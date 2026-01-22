import React from "react";
import "../../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function ShaderSandboxDescription(props) {
  return <div
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="mb-3">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCode} className="default-icons-color section-header-text-small mr-3"/>
        <p className="section-header-text-small m-0">Shader Sandbox: C++ Developer</p>
      </div>
      <p className="section-header-subtext-small m-0 ml-11">August 2025 - Present</p>
    </div>
    <ul className="text-left space-y-2 list-disc pl-4">
      <li>Contributed to an AGILE team of 6, attending standups and collaborating to integrate features across the OpenGL rendering engine.</li>
      <li>Built an object inspector using Dear ImGUI to change an object's shader, uniforms, and other rendering properties at runtime.</li>
      <li>Implemented a GLSL parser to dynamically extract uniform variables from shaders as the user edits shader code.</li>
      <li>Participated in decision making on project architecture and licensing. Authored 20 pages of the project's design document.</li>
    </ul>
    <div className="mt-6 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a title="Shader Sandbox GitHub" href="https://github.com/alecbkr/shader-sandbox" target="_blank">
        View Github Repository
      </a>
    </div>
  </div>;
}
