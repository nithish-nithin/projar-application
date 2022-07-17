import React from "react";
import "./Foot.css";
import Sm from "../ footer/ assest/sm.png";

function Foot() {
  return (
    <div>
      <div className="sec10-para">Get in touch with us</div>
      <div className="sec10-head">
        We are a design company that emotes and innovates.
      </div>
      <div className="sec10-para2">
        We take responsibility to increase your business tremendously with
        technological advantage and support you to stand out uniquely and
        consistently in the market.
      </div>
      <div className="sec10-head2">Address</div>
      <div className="sec10-para3">
        75, S W Boag Rd, CIT Nagar East, T.Nagar, Chennai, Tamil Nadu 600017
      </div>
      <div className="sec10-head3">Contact Us</div>
      <div className="sec10-para4">+91 9715626138</div>
      <div className="sec10-img">
        <img src={Sm} alt="" />
      </div>
    </div>
  );
}

export default Foot;
