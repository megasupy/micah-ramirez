import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <div class="bg-gradient-to-r from-gray-200 to-gray-100 h-screen w-screen">
      <Header />
      <div class="pr-4">
        <p class="text-gray-950 font-bold p-8 pb-2">About Me</p>
        <p class="text-gray-950 pl-12">
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
