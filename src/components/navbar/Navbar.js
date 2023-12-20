import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //hamburger menu will get mounted when window size <= 960
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            className="logo"
            src="/images/victor-logo.svg"
            alt="Victor Logo"
          />
          Victor Education
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/course" className="nav-links" onClick={closeMobileMenu}>
              课程列表
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              论坛
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              关于我们
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              登陆
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">登陆</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
