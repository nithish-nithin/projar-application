import React from "react";
import "./Form.css";
import Icon from "./img/icon.png";

function Form() {
  return (
    <div>
      <div className="sec9-left">
        <div className="sec9-head">Let's talk</div>
        <div className="sec9-para">
          Is there a challenge your organization or <br />
          company needs help solving? We’d love <br />
          to discuss it.
        </div>
      </div>
      <div className="sec9-right">
        <div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Company" />
          <br />
          <br />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Budget" />
          <br />
          <br />
          <input
            type="text"
            className="in"
            placeholder="Tell us something about your project"
          />
        </div>
        <div className="sec9-img">
          <img src={Icon} alt="" />
          <span className="sec9-span">File size should not exceed 10MB</span>
        </div>

        <button className="sec9-btn">Send</button>
      </div>
    </div>
  );
}

export default Form;
