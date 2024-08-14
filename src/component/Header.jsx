import React from "react";
import { pageLinks } from "../data";
import "../style/Header.css";
import { useState } from "react";
import garden from "../Images/garden.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div className="title-logo">
              <h1>Garden Assistant</h1>
              <img src={garden} alt="garden" className="logo" />
            </div>

            <button
              type="button"
              className="nav-toggle"
              id="nav-toggle"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links">
            {pageLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className={`side-menu ${showMenu ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>

        {pageLinks.map((link) => (
          <a key={link.id} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </>
  );
};
export default Header;
