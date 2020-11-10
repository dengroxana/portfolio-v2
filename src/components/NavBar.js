import React from "react";
import "./NavBar.css";
import avatar from "../assets/avatar.jpeg";

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
      </ul>
    </div>
  );
}

export default NavBar;
