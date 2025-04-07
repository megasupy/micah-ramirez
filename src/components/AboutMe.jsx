import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Needs to be wrapped in a container div of some sort.
export default function AboutMe() {
  return (
    <>
      <div className="default-paragraph-div py-10">
        <p className="default-text-color default-text-big font-bold">
          Hello! My name is
          <br />
          <span className="default-text-emphasis default-text-big font-bold">
            Micah Ramirez
          </span>
        </p>
      </div>
      <hr className="default-line-break" />
      <div className="default-paragraph-div">
        <p className="section-header-text">About Me</p>
        <p className="default-text-color">
          I am a junior computer science student at University of Central Florida with a 3.9 GPA and a passion
          for developing efficient software. My coursework at UCF has given me a
          strong understanding of data structures and algorithms, and from my
          side projects I have acquired a solid foundation in full-stack
          development with React, Node.js, React Native, and Supabase. My
          ultimate goal is to improve lives with software, so I am eager to
          apply my skills to make a real impact.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-16 pt-10 pb-8">
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
      </div>
    </>
  );
}
