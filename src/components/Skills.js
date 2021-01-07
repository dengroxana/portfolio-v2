import React from "react";
import "./Skills.css";
import react from "../assets/React.svg";
import rails from "../assets/rails.svg";
import node from "../assets/node.svg";
import mongodb from "../assets/mongodb.svg";
import javascript from "../assets/javascript.svg";
import html from "../assets/HTML.png";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import responsive from "../assets/responsive.svg";
import command from "../assets/command.svg";
import postgres from "../assets/postgres.svg";
import python from "../assets/python.svg";

function Skills() {
  return (
    <div id="Skills">
      <h1>Skills</h1>
      <div className="icons">
        <img src={javascript} alt="" />
        <img src={react} alt="" />
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={responsive} alt="" />
        <img src={python} alt="" />
        <img src={rails} alt="" />
        <img src={node} alt="" />
        <img src={mongodb} alt="" />
        <img src={postgres} alt="" />
        <img src={git} alt="" />
        <img src={command} alt="" />
      </div>
    </div>
  );
}

export default Skills;
