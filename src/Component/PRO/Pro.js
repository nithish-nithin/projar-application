import React from "react";
import "./Pro.css";
import Icon2 from "./asset/ratingIcon.png";
import Eyesicon from "./asset/eyesicon.png";
import Slash from "./asset/slash.png";
import Dbox1 from "./asset/dbox1.png";
import Dbox2 from "./asset/dbox2.png";
import Dbox3 from "./asset/dbox3.png";
import Webimgm from "./asset/ mwebicon.png";
import Webimgd from "./asset/dwebicon.png";
import Cd from "./asset/cd.png";
import Wmd from "./asset/wm.png";
import Be from "./asset/be.png";
import Dm from "./asset/dm.png";
function Pro() {
  return (
    <div>
      <section className="sec1-container">
        <div className="content">
          <div className="sec1-head">
            Extremely intellectual & <br />
            <span id="sec1-span">challenging Projects</span>
          </div>
          <div className="sec1-para">
            Our ultimate moto is fulfill the demand of <br />
            the buyers by making them satisfied with <br />
            proper file delivery.
          </div>
          <div className="sec1-M-boxes">
            <div className="mbox1">
              <img src={Eyesicon} alt="not found" />
              <div className="mbox1-num">+15</div>
              <div className="mbox1-sub">Branding & Design</div>
            </div>
            <div className="mbox2">
              <img src={Slash} alt=" not found" />
              <div className="mbox1-num">+12</div>
              <div className="mbox1-sub">Developmemt</div>
            </div>
            <div className="mbox3">
              <div className="mbox3-num">+12</div>
              <div className="mbox3-sub">Developmemt</div>
            </div>
          </div>
          <div className="sec1-d-boxes">
            <div className="dbox1">
              <img src={Dbox1} alt="" />
            </div>
            <div className="dbox2">
              <img src={Dbox2} alt="" />
            </div>
            <div className="dbox3">
              <img src={Dbox3} alt="" />
            </div>
          </div>
        </div>
        <div className="sec1-para2">
          A Global Design Agency that enables solutions
          <br /> through Research, Design & Development
        </div>

        <div className="asset-right"></div>
      </section>
      <section className="sec2">
        <div className="imges">
          <div className="sec2-icon2">
            <img src={Icon2} alt="NOT FOUND" />
          </div>
        </div>
        <div className="sec2-con">
          Trusted by 23+ Clients, across industry <br />
          verticals, worldwide since 2019.
        </div>
        <div className="sec1-clients">
          <div className="client1"></div>
          <div className="client1"></div>
          <div className="client1"></div>
          <div className="client1"></div>
          <div className="client1"></div>
          <div className="lientc1"></div>
        </div>
      </section>
      <section className="sec3">
        <div className="sec3-content">
          <div className="sec3-con-head">Our Service</div>
          <div className="sec3-con-para">
            Taking high level concepts & turning them into <br />
            functional, engaging products.
          </div>
          <div className="sec3-con-subpara">
            The breadth and depth of our experience allows us to
            <br /> create tailor-made user interface design that lead to <br />
            increased user retention, engagement & loyality.
          </div>
          <div className="sec3-img">
            <img src={Webimgm} alt="not found" />
          </div>
          <div className="webimgd">
            <img src={Webimgd} alt="not found" />
          </div>
          <div className="sec3-img-sub-container">
            <div className="sec3-icon1">
              <div>
                <img src={Cd} alt="" />
              </div>
              <div className="sec3-icon-head">Creative Design</div>
            </div>
            <div className="sec3-icon-para">
              Eyes grab more colours and have more attention than anything else.
              <br />
              Bright colours and appealing designs can make you want to buy/
              <br />
              think more about the product. To put a design together with the
              <br />
              colours, our team of experts will help you.
            </div>
            <div className="sec3-icon2">
              <div>
                <img src={Wmd} alt="" />
              </div>
              <div className="sec3-icon-head">Web & Mobile Development</div>
            </div>
            <div className="sec3-icon3">
              <div>
                <img src={Be} alt="" />
              </div>
              <div className="sec3-icon-head">Backend</div>
            </div>
            <div className="sec3-icon4">
              <div>
                <img src={Dm} alt="" />
              </div>
              <div className="sec3-icon-head">Digitial Marketing</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pro;
