import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import "../index.css";
import AboutMe from "../components/AboutMe.jsx"
import Projects from "../components/Projects.jsx"

export default function Home() {
  useEffect(() => {
    document.querySelector("#themeColor").setAttribute("content", "#E5E7EB");
  });

  const Background = ({ children }) => (
    <div className="default-background-color">
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
          <AboutMe/>
          <Projects/>
        </IndentContainer>
      </div>
    </Background>
  );9
}
