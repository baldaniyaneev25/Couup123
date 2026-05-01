import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" id="Hero">
      {/* Left Side */}
      <div className="nav-left">
        <div className="nav-text">
          <h4 className="logo" href="/">
            Couup Web Stdio
          </h4>
        </div>
      </div>

      {/* 🔥 Hamburger Icon (ADDED) */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Right Side */}
      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        <a href="#projects">Projects</a>
                <a href="#what-we-do">What We Do</a>
        <a href="#how-we-work">How We Work</a>



        <button className="chat-btn">
          <a href="#contact">Let's chat</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;