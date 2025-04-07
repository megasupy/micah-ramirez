import React, { useState, useRef } from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const myEmail = "mi770395@ucf.edu";
  const [messageError, setMessageError] = useState(null);
  const [messageSent, setMessageSent] = useState(null);
  let userEmail = "";
  let userName = "";
  let userMessage = "";

  function ClipboardClickable({
    copyCheckValue,
    timeDuration = 1500,
    title = "Copy to clipboard",
    copyText = "Copied!",
    className,
  }) {
    const [showCopyText, setShowCopyText] = useState(false);
    const timeoutRef = useRef(null);
    return (
      <div className={className}>
        {showCopyText ? (
          <button className="default-button px-4">{copyText}</button>
        ) : (
          <button
            className="default-button px-4"
            title={title}
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
              }, timeDuration);
            }}
          >
            {/*
            <FontAwesomeIcon
              icon={faCopy}
              className="default-text-normal default-icons-color pl-2 default-icon-clickable"
            />
            */}
            Copy Email
          </button>
        )}
      </div>
    );
  }

  function sendMessage() {
    // Check if input is correct
    let error;
    if (userName == "") {
      error = "Error: Invalid name!";
    } else if (userEmail == "") {
      error = "Error: Invalid email address!";
    } else if (userMessage == "") {
      error = "Error: Message is Empty!";
    }
    if (error) {
      setMessageError(error);
      alert(error);
      return;
    } else {
      setMessageError(null);
      setMessageSent("Message Sent!");
    }
  }

  // Broken right now, I'm going to bed.
  function MessageBox({ className }) {
    return (
      <div className={className}>
        <div className="default-paragraph-div items-center flex-col">
          <input
            className="w-12/12 default-textbox mb-4"
            placeholder="Your Name"
            value={userName}
            onChange={(event ) => userName = event.target.value}
          />
          <input
            className="w-12/12 default-textbox mb-4"
            placeholder="Your Email"
            value={userEmail}
            onChange={(event ) => userEmail = event.target.value}
          />
          <input
            className="w-12/12 default-textbox mb-4 pb-60"
            placeholder="Your Message"
            value={userMessage}
            onChange={(event ) => userMessage = event.target.value}
          />
        </div>
        <p className="text-red-700 pb-2">{messageError}</p>
        <p className="text-green-700 pb-2">{messageSent}</p>
        <button className="default-button px-4" onClick={sendMessage}>
          Send Form
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="default-paragraph-div">
        <p className="section-header-text">Contact Me</p>
        <p className="default-text-normal">
          Please contact me directly at{" "}
          <span className="default-text-emphasis">{myEmail}</span> or through
          this form.
        </p>
        <ClipboardClickable
          className="p-2"
          copyCheckValue={myEmail}
          title="Copy email to clipboard"
          timeDuration={3000}
          copyText="Email copied!"
        />
        {/*
        <div className="flex flex-row pt-4 pb-8">
          <FontAwesomeIcon
            icon={faPhone}
            className=" default-icon-small-medium default-icons-color self-center"
          />
          <p className="pl-8">{phoneNumber}</p>
          <ClipboardClickable copyCheckValue={phoneNusmber} />
        </div>
        */}
        <MessageBox className="py-4" />
      </div>
    </>
  );
}
