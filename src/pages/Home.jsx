import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import "../index.css";
import AboutMe from "../components/AboutMe.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  useEffect(() => {
    document.querySelector("#themeColor").setAttribute("content", "#E5E7EB");
  });

  const Background = ({ children }) => (
    <div className="default-background-color">{children}</div>
  );
  const IndentContainer = ({ children, className }) => (
    <div className={className}>{children}</div>
  );

  const Copyright = () => (
    <p className="default-text-small text-center pb-4">
      <br />© 2025 Micah Ramirez. All rights reserved.
    </p>
  );

  return (
    <Background>9
      <Header />
      <div className="default-content-container top-nav-buffer">
        <IndentContainer className="indent-paragraph-container">
          <AboutMe />
          <hr className="default-line-break" />
          <Contact />
          {/*<Projects/>*/}
        </IndentContainer>
        <Copyright />
      </div>
    </Background>
  );
  9;
}
