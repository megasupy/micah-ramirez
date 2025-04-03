import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import "../index.css";

export default function Contact() {
  return (
    <div class="default-background-size default-background-color">
      {/*Top section with my picture and links*/}
      <Header />
      <div class="default-content-container top-nav-buffer">
        <span class="text-black font-bold p-8 pb-0">
          This is the route test page
        </span>
      </div>
    </div>
  );
}
