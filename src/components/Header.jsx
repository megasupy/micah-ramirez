import React, { useState, useEffect } from "react";
import MePic from "../assets/me-pic.png";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div class="h flex h-32 flex-row items-center justify-between bg-gradient-to-r from-blue-200 to-green-200 shadow-lg">
      <div class="h-full max-w-full p-3 flex-shrink-0">
        <img
          src={MePic}
          alt="Image of me"
          class="h-full max-w-full rounded-full drop-shadow-md"
        />
      </div>
      <div class="pr-8 flex-row justify-between space-x-16">
        <Link to="/">
          <span class="header-text">Home</span>
        </Link>
        <Link to="/contact">
          <span class="header-text">Contact</span>
        </Link>
        <a
          href="https://drive.google.com/file/d/13pCza1JXytY4O31E-PpYopt89LvTupPr/view?usp=sharing"
          target="_blank"
        >
          <span class="header-text">Resume</span>
        </a>
      </div>
    </div>
  );
}
