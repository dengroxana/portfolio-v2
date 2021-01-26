import React from "react";
import "./Header.css";
import bridge from "../assets/brooklyn-bridge.jpg"


function Header() {
  return (
    <div id="Header">
      {/* <img src={bridge} alt="" className="bridge"/> */}
      <div className="header-container">
        <h1>
          Hello! My name is Roxana & I'm a <span className="title">Software Engineer</span> based in NYC.
        </h1>
      </div>
      
    </div>
  );
}

export default Header;
