import React, {useRef, useState} from "react";
import "../index.css";
import supabase from "../scripts/supabase.js";

//import HCaptcha from "@hcaptcha/react-hcaptcha"; // Still figuring out how to impliment this, for now it will have to be insecure.
//const CAPTCHA_SITE_KEY = "ce74ee62-81aa-406c-ad22-e1144fc8853a";
const MY_EMAIL = "mi770395@ucf.edu";

export default function Contact() {
  //const [captchaToken, setCaptchaToken] = useState(null);
  const [messageResult, setMessageResult] = useState(null);
  const [messageResultIsError, setMessageResultIsError] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

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
      error = "Error: You are likely a bot. Please reload the page, enter your information manually, or send me an email."
    }
    if (error) {
      setMessageResult(error);
      setMessageResultIsError(true);
      alert(error);
      return;
    }

    const {data, error: supaError} = await supabase
      .from("messages_sent_to_me")
      .insert([{message: userMessage, name: userName, email: userEmail}]);
    if (supaError) {
      setMessageResult(
        "Message could not be sent. Please try again or message me some other way."
      );
      console.log(supaError);
      setMessageResultIsError(true);
      alert(
        "Message could not be sent. Please try again or message me some other way."
      );
      return;
    }
    setMessageResult("Message Sent!");
    setMessageResultIsError(false);
    alert("Message Sent!");
    setUserEmail("");
    setUserName("");
    setUserMessage("");
  }

  return (
    <>
      <div className="default-paragraph-div">
        <p className="section-header-text">Contact Me</p>
        <p className="default-text-normal">
          Please contact me directly at{" "}
          <span className="default-text-emphasis">{MY_EMAIL}</span>, send me a message on LinkedIn, or send me
          a message through this form.
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
      </div>
    </>
  );
}
