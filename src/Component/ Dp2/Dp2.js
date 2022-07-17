import React from "react";
import "./Dp2.css";
import Dp21 from "./ asset/dp2icon1.png";
import Dp22 from "./ asset/dp2icon2.png";
import Dp23 from "./ asset/dp2icon3.png";
import Dp24 from "./ asset/dp2icon4.png";

function Dp2() {
  return (
    <div>
      <div className="sec7-con-head">Development Process</div>
      <div className="sec7-con-para">
        Masterpieces are always crafted with
        <br />
        <span className="sec7-span">
          undying passion, a dash of craziness and a<br /> lot of discipline.
        </span>
      </div>
      <div className="sec7-boxes">
        <div className="sec7-box1">
          <div className="sec7-box1-img">
            <img src={Dp21} alt="" />
          </div>
          <div className="sec7-box-head">Web Application Development</div>
          <div className="sec7-box-para">
            Often referred to as a web app, every company would love to have
            it’s own web app to showcase their works and get their product out
            there for the audience’s easy reach. Our talented bunch of app
            developers will get that done for you in no time.
          </div>
        </div>
        <div className="sec7-box2">
          <div className="sec7-box1-img">
            <img src={Dp22} alt="" />
          </div>
          <div className="sec7-box-head">
            Mobile App Development (Cross-platform)
          </div>
          <div className="sec7-box-para">
            From the person living in the hills to the person living on the
            oceans, everyone has a mobile phone and everyone has their own
            needs. With a mobile app, you put your product to the eyes farthest
            from you and yet get traction. Do it with us and get your product to
            get the best of you.
          </div>
        </div>
        <div className="sec7-box3">
          <div className="sec7-box1-img">
            <img src={Dp23} alt="" />
          </div>
          <div className="sec7-box-head">Wordpress App Development</div>
          <div className="sec7-box-para">
            Creating and customising plugins and themes that will improve
            Wordpress itself or to create entirely new products is a
            professional’s job with a sense of commitment - which we strive to
            offer through our experience.
          </div>
        </div>
        <div className="sec7-box4">
          <div className="sec7-box1-img">
            <img src={Dp24} alt="" />
          </div>
          <div className="sec7-box-head">
            Desktop App development (Electron)
          </div>
          <div className="sec7-box-para">
            In contrast to the Web-based application, desktop app can
            stand-alone in a laptop or computer, which will give you more
            frequency of usage and visibility. Get it done with us for easier
            reach and professional touch.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dp2;
