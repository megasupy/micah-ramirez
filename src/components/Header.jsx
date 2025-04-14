import React from "react";
import {Link} from "react-router-dom";
import "../index.css"; // For repeated styles like header-text

export default function Header() {
  return (
    <div className="top-nav-container">
      <div className="top-nav-text-container">
        <Link to="/">
          <span className="top-nav-text">Home</span>
        </Link>
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
