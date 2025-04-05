import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="default-paragraph-div">
      <p className="section-header-text">Contact</p>
      <p className="default-text-color">
        <div className="flex flex-row pb-8">
          <FontAwesomeIcon
            icon={faPhone}
            class="size-8 default-icons-color"
          />
          <p className="pl-8 p">407-721-0851</p>
        </div>
        <div className="flex flex-row ">
          <FontAwesomeIcon
            icon={faEnvelope}
            class="size-8 default-icons-color"
          />
          <p className="pl-8 pb-8">mi770395@ucf.edu</p>
        </div>
      </p>
    </div>
  );
}
