import React, { useEffect, }from "react";
import Header from "../components/Header.jsx";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.querySelector("#themeColor").setAttribute("content", "#E5E7EB")
  });
  return (
    <div class="default-background-size default-background-color">
      <Header />
      <div class="default-content-container top-nav-buffer">
        <div class="indent-paragraph-container">
          <div class="default-paragraph-div py-10">
            <p class="default-text-color default-text-big font-bold">
              Hello! My name is{" "}
              <span class="default-text-emphasis default-text-big font-bold">
                Micah Ramirez
              </span>
            </p>
          </div>
          <div class="default-paragraph-div pt-8">
            <p class="default-text-color font-bold pb-4">About Me</p>
            <p class="default-text-color">
              I am a junior computer science student with a 3.9 GPA and a
              passion for developing efficient software. My coursework at UCF
              has given me a strong understanding of data structures and
              algorithms, and from my side projects I have acquired a solid
              foundation in full-stack development with React, Node.js, React
              Native, and Supabase. My ultimate goal is to improve lives with
              software, so I am eager to apply my skills to make a
              real impact.
            </p>
          </div>
          <div class="flex flex-row justify-center gap-16 pt-8 pb-8">
            <a
              href="https://www.linkedin.com/in/micah-ramirez-588174310/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                class="size-16 default-icons-color"
              />
            </a>
            <a href="https://github.com/megasupy" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                class="size-16 default-icons-color"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
