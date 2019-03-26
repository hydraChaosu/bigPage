import React from "react";
import "../styles/Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#contact">contact</a>
        </li>
        <li>
          <a href="#content">about</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
