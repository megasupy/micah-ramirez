import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { faPhp } from "@fortawesome/free-brands-svg-icons";

//import HCaptcha from "@hcaptcha/react-hcaptcha"; // Still figuring out how to impliment this, for now it will have to be insecure.
//const CAPTCHA_SITE_KEY = "ce74ee62-81aa-406c-ad22-e1144fc8853a";
const MY_EMAIL = "mi770395@ucf.edu";
const API_URL = "https://csapi.micahramirez.tech/api/message";

export default function Contact() {
  //const [captchaToken, setCaptchaToken] = useState(null);
  const [messageResult, setMessageResult] = useState(null);
  const [messageResultIsError, setMessageResultIsError] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [fetchText, setFetchText] = useState(<p />);

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
          <button className="default-button-inactive px-4">{copyText}</button>
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

  async function handleSubmit() {
    // Check if input is correct
    let error;
    if (userName == "") {
      error = "Error: Invalid name!";
    } else if (userEmail == "") {
      error = "Error: Invalid email address!";
    } else if (userMessage == "") {
      error = "Error: Message is Empty!";
      //} else if (!captchaToken) {
      //error = "Error: Must complete Captcha!"
    } else if (honeypot !== "") {
      error =
        "Error: You are likely a bot. Please reload the page, enter your information manually, or send me an email.";
    }
    if (error) {
      setMessageResult(error);
      setMessageResultIsError(true);
      alert(error);
      return;
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MessageText: userMessage,
        Name: userName,
        Email: userEmail,
      }),
    });
    /*
    .catch((err) => {
      setMessageResult(
        "Message could not be sent. Please try again or message me some other way."
      );
      console.log(err);
      setMessageResultIsError(true);
      alert(
        "Message could not be sent. Please try again or message me some other way."
      );
      return;
    }
    )
    */
    setMessageResult("Message Sent!");
    setMessageResultIsError(false);
    alert("Message Sent!");
    setUserEmail("");
    setUserName("");
    setUserMessage("");
  }

  useEffect(() => {
    const func = async () => {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const responseJson = await response.json();
      console.log(responseJson);
      const text = [];
      for (let line of responseJson) {
        text.push({
          email: line.email,
          name: line.name,
          text: line.messageText,
        });
        console.log(text);
      }

      const newFetchText = (
        <div>
          {text.map((line) =>
            <p className="break-words break-all">
              {line.email} {line.name} {line.text}
            </p>
          )}
        </div>
      );
      setFetchText(
        newFetchText
      );

      console.log("responseText", responseJson);
      console.log(response);
      console.log(newFetchText);
    };
    func();
  }, []);

  return (
    <>
      <div className="default-paragraph-div">
        <p className="section-header-text">Contact Me</p>
        <p className="default-text-normal">
          Please contact me directly at{" "}
          <span className="default-text-emphasis">{MY_EMAIL}</span>, send me a
          message on LinkedIn, or send me a message through this form.
        </p>
        <ClipboardClickable
          className="p-2"
          copyCheckValue={MY_EMAIL}
          title="Copy email to clipboard"
          timeDuration={3000}
          copyText="Email copied!"
        />
        {/**This is the form. */}
        <div className="py-4">
          <div className="default-paragraph-div items-center flex-col">
            <input
              className="w-12/12 default-textbox mb-4"
              placeholder="Your Name"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <input
              className="w-12/12 default-textbox mb-4"
              placeholder="Your Email"
              value={userEmail}
              onChange={(event) => {
                setUserEmail(event.target.value);
              }}
            />
            <input
              className="w-12/12 default-textbox mb-4 pb-60"
              placeholder="Your Message"
              value={userMessage}
              onChange={(event) => {
                setUserMessage(event.target.value);
              }}
            />
            <input
              className="w-0 h-0"
              placeholder="Phone Number"
              value={honeypot}
              onChange={(event) => {
                setHoneypot(event.target.value);
              }}
            />
          </div>
          {/*<HCaptcha sitekey={CAPTCHA_SITE_KEY} onVerify={(token) => setCaptchaToken(token)*/}
          <button className="default-button px-4" onClick={handleSubmit}>
            Send Form
          </button>
          {messageResultIsError ? (
            <p className="text-red-700 pb-2">{messageResult}</p>
          ) : (
            <p className="text-green-700 pb-2">{messageResult}</p>
          )}
          
        </div>
        {/*fetchText*/}
      </div>
    </>
  );
}
