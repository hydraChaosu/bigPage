import React from "react";
import About from "./About";
import Projects from "./Projects";
import "../styles/Content.scss";
const Content = () => {
  return (
    <div className="content">
      <About />
      <Projects />
    </div>
  );
};

export default Content;
