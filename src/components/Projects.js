import React from "react";
import "./Projects.css";
import sharkys from "../assets/sharkys.png";
import chatroom from "../assets/chatroom.png";
import hangry from "../assets/hangry-helper.png";
import wyd from "../assets/wyd.png";

function Projects() {
  return (
    <div id="Projects">
      <h1>Projects</h1>
      <div>
        <div>
          <h2>Sharky's NJ</h2>

          <img src={sharkys} alt="" className="project-thumb" />
          <p>
           Built using React.js and CSS.
          </p>
          <button>
            <a
              href="https://sharkysnj.netlify.app/"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
          </button>
          <button>
            <a
              href="https://github.com/dengroxana/sharkys-wings-nj"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
        <div>
          <h2>ChatRoom</h2>
          <img src={chatroom} alt="" className="project-thumb" />
          <p>
            Built using Socket.io, React.js, Node.js, and CSS.
          </p>
          <button>
            <a
              href="http://high-hill.surge.sh/"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
          </button>
          <button>
            <a
              href="https://github.com/dengroxana/chat-app"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
        <div>
          <h2>Hangry Helper</h2>
          <img src={hangry} alt="" className="project-thumb" />
          <p>
            Built using React.js, CSS, and Ruby on Rails.
          </p>
          <button>
            <a
              href="https://hangry-helper.netlify.app/"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
          </button>
          <button>
            <a
              href="https://github.com/dengroxana/hangry-helper"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
        <div>
          <h2>WYD</h2>
          <img src={wyd} alt="" className="project-thumb" />
          <p>
           Built using JavaScript, HTML/CSS, Bored API, and GIPHY API.
          </p>
          <button>
            <a
              href="http://wydapp.surge.sh/"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
          </button>
          <button>
            <a
              href="https://github.com/dengroxana/wyd-app"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
