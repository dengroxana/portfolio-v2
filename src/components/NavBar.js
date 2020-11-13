import React from "react";
import "./NavBar.css";
import avatar from "../assets/avatar.jpg";
import resume from "../assets/rdeng-v4.pdf";
import linkedin from "../assets/linkedin.svg";
import octocat from "../assets/octocat.svg";

function NavBar() {
  return (
    <div id="Nav">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About-Me">About Me</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <a href={resume} target="_blank">
            Resume
          </a>
        </li>
      </ul>
      <div className="social">
      <a
        href="https://www.linkedin.com/in/roxanadeng/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="" />
      </a>
      <a
        href="https://github.com/dengroxana"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={octocat} alt="" />
      </a>
      </div>
    </div>
  );
}

export default NavBar;
