import React, {useRef} from "react";
import {Link} from "react-router-dom";
import "../index.css"; // For repeated styles like header-text



export default function Navbar({scrollFunction} ) {

  return (
    <div className="top-nav-container">
      <div className="top-nav-text-container">
        <button onClick={() => scrollFunction("Home")}>
          <span className="top-nav-text">Home</span>
        </button>
        <button onClick={() => scrollFunction("Projects")}>
          <span className="top-nav-text">Projects</span>
        </button>
        <button onClick={() => scrollFunction("Contact")}>
          <span className="top-nav-text">Contact</span>
        </button>
        <a
          href="https://drive.google.com/file/d/13pCza1JXytY4O31E-PpYopt89LvTupPr/view?usp=sharing"
          target="_blank"
        >
          <span className="top-nav-text">Resumé</span>
        </a>
      </div>
    </div>
  );
}
