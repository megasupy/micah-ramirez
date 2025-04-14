import React from "react";
import "../index.css";
import Icons from "./Icons.jsx";

// Needs to be wrapped in a container div of some sort.
export default function AboutMe() {
  return (
    <>
      <div className="default-paragraph-div py-10">
        <p className="default-text-color default-text-big font-bold">
          Hello! My name is
          <br/>
          <span className="default-text-emphasis default-text-big font-bold">
            Micah Ramirez
          </span>
        </p>
      </div>
      <hr className="default-line-break"/>
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
      <Icons/>
    </>
  );
}
