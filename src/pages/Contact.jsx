import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";

export default function Contact() {
  return (
    <div class="bg-gradient-to-r from-white to-gray-100 h-screen w-screen">
      {/*Top section with my picture and links*/}
      <Header />
      <span class="text-black font-bold p-8 pb-0">
        This is the route test page
      </span>
    </div>
  );
}
