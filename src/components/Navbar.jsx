import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import "../index.css"; // For repeated styles like header-text

export default function Navbar({scrollFunction} ) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    scrollFunction(section);
  };

  const handleResumeClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop navbar - unchanged */}
      <div className="top-nav-container hidden sm:flex">
        <div className="top-nav-text-container">
          <div className="flex flex-row justify-between w-full">
            <button onClick={() => scrollFunction("Home")}>
              <span className="top-nav-text">Home</span>
            </button>
            <button onClick={() => scrollFunction("Education")}>
              <span className="top-nav-text">Education</span>
            </button>
            <button onClick={() => scrollFunction("Projects")}>
              <span className="top-nav-text">Projects</span>
            </button>
            <button onClick={() => scrollFunction("Experience")}>
              <span className="top-nav-text">Experience</span>
            </button>
            <button onClick={() => scrollFunction("Contact")}>
              <span className="top-nav-text">Contact</span>
            </button>
            <a
              href="https://drive.google.com/file/d/13pCza1JXytY4O31E-PpYopt89LvTupPr/view?usp=sharing"
              target="_blank"
            >
              <span className="top-nav-text">Resumé</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile hamburger button - top right, absolute */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-menu-button"
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl default-icons-color" />
      </button>

      {/* Mobile sidebar overlay backdrop */}
      {isMenuOpen && (
        <div 
          className="mobile-sidebar-backdrop"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile sidebar - slides from right */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'mobile-sidebar-open' : ''}`}>
        <div className="mobile-sidebar-content">
          <button onClick={() => handleNavClick("Home")} className="mobile-sidebar-item">
            <span className="top-nav-text">Home</span>
          </button>
          <button onClick={() => handleNavClick("Education")} className="mobile-sidebar-item">
            <span className="top-nav-text">Education</span>
          </button>
          <button onClick={() => handleNavClick("Projects")} className="mobile-sidebar-item">
            <span className="top-nav-text">Projects</span>
          </button>
          <button onClick={() => handleNavClick("Experience")} className="mobile-sidebar-item">
            <span className="top-nav-text">Experience</span>
          </button>
          <button onClick={() => handleNavClick("Contact")} className="mobile-sidebar-item">
            <span className="top-nav-text">Contact</span>
          </button>
          <a
            href="https://drive.google.com/file/d/13pCza1JXytY4O31E-PpYopt89LvTupPr/view?usp=sharing"
            target="_blank"
            onClick={handleResumeClick}
            className="mobile-sidebar-item"
          >
            <span className="top-nav-text">Resumé</span>
          </a>
        </div>
      </div>
    </>
  );
}
