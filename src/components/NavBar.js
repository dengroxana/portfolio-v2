import React from "react";
import "./NavBar.css";
import avatar from "../assets/avatar.jpg";
import resume from "../assets/rdeng-v4.pdf"

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
          <a href="#">About Me</a>
        </li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href={resume} target="_blank">Resume</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
