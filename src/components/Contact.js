import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="Contact">
      <div className="email-form">
        <h1>Contact Me</h1>
        <form
          action="mailto:roxanadeng@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            <p>Name</p>
          </label>
          <span className="down"></span>

          <input type="text" name="Name"></input>

          <label>
            <p>Email</p>
          </label>
          <span className="down"></span>

          <input type="email" name="Email"></input>

          <label>
            <p>Message</p>
          </label>
          <span className="down"></span>

          <textarea name="Message" rows="10" cols="40"></textarea>
<br/>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
