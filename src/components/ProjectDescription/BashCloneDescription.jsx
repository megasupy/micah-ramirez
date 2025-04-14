import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTerminal} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

export default function BashCloneDescription(props) {
  return <li
    ref={props.ref}
    className="indent-paragraph-container-2"
  >
    <div className="flex items-center mb-3">
      <FontAwesomeIcon icon={faTerminal} className="default-icons-color section-header-text-small mr-3"/>
      <p className="section-header-text-small m-0">Bash Clone</p>
    </div>
    <ul className="text-left list-disc pl-4">
      <li>Developed a custom shell in C, implementing Linux system calls (such as fork, exec, pipe, and dup2) for
        command execution.
      </li>
      <li>Added support for piping and I/O redirection, enabling seamless command chaining.</li>
      <li>Built and tested the shell using a Makefile for easy compilation and execution.</li>
    </ul>
    <div className="mt-6 default-button self-center items-center">
      <FontAwesomeIcon icon={faGithub} className="default-icons-color mr-3"/>
      <a href="https://github.com/megasupy/micah-ramirez" target="_blank">
        View Github Repository
      </a>
    </div>
  </li>;
}