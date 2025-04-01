import React from "react";
import MePic from "../assets/me-pic.png";
import { Link } from "react-router-dom";
import "../index.css"; // For repeated styles like header-text

export default function Header() {
  return (
    <div class="absolute top-0 mt-4 left-1/2 transform -translate-x-1/2 flex h-16 w-3xl flex-row items-center justify-center top-nav-bg-color shadow-lg rounded-full">
      {/*<div class="h-full max-w-full p-3 flex-shrink-0">
        <img
          src={MePic}
          alt="Image of me"
          class="h-full max-w-full rounded-full drop-shadow-md"
        />
      </div>*/}
      <div class="pr-8 flex-row justify-between space-x-16">
        <Link to="/">
          <span class="top-nav-text">Home</span>
        </Link>
        <Link to="/contact">
          <span class="top-nav-text">Contact</span>
        </Link>
        <a
          href="https://drive.google.com/file/d/13pCza1JXytY4O31E-PpYopt89LvTupPr/view?usp=sharing"
          target="_blank"
        >
          <span class="top-nav-text">Resume</span>
        </a>
      </div>
    </div>
  );
}
