import React from "react";
import Header from "../components/Header.jsx";
import "../index.css"

export default function Home() {
  return (
    <div class="default-background-size default-background-color">
      <Header />
      <div class="pr-4 top-nav-buffer">
        <p class="text-gray-950 font-bold px-16 pb-1">About Me</p>
        <p class="text-gray-950 px-24">
          Hello! I am a Computer Science student in my junior year at UCF. I
          have a GPA of 3.9, a passion for software and technology, and I am
          looking to gain professional experience and contribute to meaningful
          projects, while also honing technical skills and deepening
          understanding of industry practices.
        </p>
      </div>
    </div>
  );
}
