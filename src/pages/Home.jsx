import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.querySelector("#themeColor").setAttribute("content", "#E5E7EB");
  });

  const Background = ({ children }) => (
    <div className="default-background-size default-background-color">
      {children}
    </div>
  );
  const IndentContainer = ({ children, className }) => (
    <div className={className}>{children}</div>
  );
  return (
    <Background>
      <Header />
      <div className="default-content-container top-nav-buffer">
        <IndentContainer className="indent-paragraph-container">
          <div className="default-paragraph-div py-10">
            <p className="default-text-color default-text-big font-bold">
              Hello! My name is{" "}
              <span className="default-text-emphasis default-text-big font-bold">
                Micah Ramirez
              </span>
            </p>
          </div>
          <div className="default-paragraph-div pt-8">
            <p className="default-text-color font-bold pb-4">About Me</p>
            <p className="default-text-color">
              I am a junior computer science student with a 3.9 GPA and a
              passion for developing efficient software. My coursework at UCF
              has given me a strong understanding of data structures and
              algorithms, and from my side projects I have acquired a solid
              foundation in full-stack development with React, Node.js, React
              Native, and Supabase. My ultimate goal is to improve lives with
              software, so I am eager to apply my skills to make a real impact.
            </p>
          </div>
          <div className="flex flex-row justify-center gap-16 pt-8 pb-8">
            <a
              href="https://www.linkedin.com/in/micah-ramirez-588174310/"
              target="_blank"
            >
              {/**class instead of className because className doesn't work with the sizing for some reason */}
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
        </IndentContainer>
      </div>
    </Background>
  );9
}
