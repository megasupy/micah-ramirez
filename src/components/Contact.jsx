import React, { useState, useEffect, useRef } from "react";
import Header from "./Header.jsx";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const phoneNumber = "407-721-0851";
  const email = "mi770395@ucf.edu";

  function ClipboardClickable({ copyCheckValue, timeDuration=1500}) {
    const [showCopyText, setShowCopyText] = useState(false);
    const timeoutRef = useRef(null);
    return (
      <div>
        {showCopyText ? <p className="default-text-small pl-2 inline">Copied!</p> : (
        <button
          title="Copy to clipboard"
          onClick={() => {
            // Copy to clipboard and show text
            navigator.clipboard.writeText(copyCheckValue);
            setShowCopyText(true);

            // Wipe the previous timer and start a new one to shut off the text
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              setShowCopyText(false);
            }, timeDuration)
          }}
        >
          <FontAwesomeIcon
            icon={faCopy}
            className="default-icons-color pl-4 default-icon-clickable"
          />
        </button>
        )}
      </div>
    );
  }

  return (
    <div className="default-paragraph-div">
      <p className="section-header-text">Contact</p>
      <div className="flex flex-row pb-8 default-text-normal">
        <FontAwesomeIcon icon={faPhone} className=" default-icons-color self-center" />
        <p className="pl-8">{phoneNumber}</p>
        <ClipboardClickable copyCheckValue={phoneNumber} />
      </div>
      <div className="flex flex-row pb-12 default-text-normal">
        <FontAwesomeIcon icon={faEnvelope} className=" default-icons-color self-center" />
        <p className="pl-8">{email}</p>
        <ClipboardClickable copyCheckValue={email} />
      </div>
    </div>
  );
}
