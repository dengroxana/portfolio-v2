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
            Consectetur magna deserunt ex amet sint excepteur cillum sit dolor
            commodo ea cillum voluptate cillum. Velit in nostrud irure commodo
            qui incididunt incididunt nisi elit sint sunt officia non laboris.
            Exercitation velit ex magna magna cupidatat aliqua minim laborum
            sint. Laborum aliqua irure aliqua ad laborum deserunt. Lorem magna
            ullamco exercitation dolor minim incididunt velit in aliqua tempor
            elit proident culpa amet.
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
            Qui minim voluptate consequat cupidatat et pariatur eu non. Commodo
            duis laboris sit eu ex nisi laboris eu officia tempor. Pariatur
            pariatur id mollit laborum fugiat ullamco excepteur pariatur. Sint
            excepteur et minim occaecat amet ut dolor. Dolor dolore ex pariatur
            commodo consequat nulla minim Lorem anim magna excepteur
            consectetur. Pariatur esse amet tempor sint. Officia eiusmod non
            minim ipsum eu exercitation nulla id culpa officia laborum veniam.
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
            Qui minim voluptate consequat cupidatat et pariatur eu non. Commodo
            duis laboris sit eu ex nisi laboris eu officia tempor. Pariatur
            pariatur id mollit laborum fugiat ullamco excepteur pariatur. Sint
            excepteur et minim occaecat amet ut dolor. Dolor dolore ex pariatur
            commodo consequat nulla minim Lorem anim magna excepteur
            consectetur. Pariatur esse amet tempor sint. Officia eiusmod non
            minim ipsum eu exercitation nulla id culpa officia laborum veniam.
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
            Qui minim voluptate consequat cupidatat et pariatur eu non. Commodo
            duis laboris sit eu ex nisi laboris eu officia tempor. Pariatur
            pariatur id mollit laborum fugiat ullamco excepteur pariatur. Sint
            excepteur et minim occaecat amet ut dolor. Dolor dolore ex pariatur
            commodo consequat nulla minim Lorem anim magna excepteur
            consectetur. Pariatur esse amet tempor sint. Officia eiusmod non
            minim ipsum eu exercitation nulla id culpa officia laborum veniam.
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
