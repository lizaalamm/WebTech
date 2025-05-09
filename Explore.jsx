import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons"; // Import the burger icon
import "./Explore.css";

const LoginButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  return (
    <div>
      {/* Burger Icon at the top center */}
      <div className="icon-container">
        <FontAwesomeIcon
          icon={faBurger}
          className={`burger-icon ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        />
      </div>

      {/* Logo at the leftmost side */}
      <div className="logo-container">
        <span
          className={`logo ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Big Bun Theory
        </span>
      </div>

      {/* New Explore Button with a link */}
      <div className="explore-button-container">
        <a
          href="https://vlogfied.com/vlogs/big-bun-theory-in-thrissur-by-madly-yummy-2/"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security feature to prevent issues with window.opener
        >
          <button
            className={`explore-button ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Explore Menu
          </button>
        </a>
      </div>
    </div>
  );
};

export default LoginButton;
