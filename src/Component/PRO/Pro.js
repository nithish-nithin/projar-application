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
import OurProject from "../OurProject/OurProject";
import Dp from "../ Dp/Dp";
import S6i1 from "./ sec6-assets/child1.png";
import S6i2 from "./ sec6-assets/child2.png";
import S6i3 from "./ sec6-assets/child3.png";
import S6i4 from "./ sec6-assets/child4.png";
import S6i5 from "./ sec6-assets/child5.png";
import S6i6 from "./ sec6-assets/child6.png";
import Ps from "./ sec6-assets/ps.png";
import Ai from "./ sec6-assets/ai.png";
import Fig from "./ sec6-assets/fig.png";
import Pr from "./ sec6-assets/pr.png";
import Ax from "./ sec6-assets/ax.png";
import Sk from "./ sec6-assets/sk.png";
import Inv from "./ sec6-assets/inv.png";
import Ae from "./ sec6-assets/ae.png";
import Dp2 from "../ Dp2/Dp2";
import Carosel from "../ carosel/Carosel.js";
import Form from "../ form/Form";
import Foot from "../ footer/Foot.js";

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
            <br /> create tailor-made{" "}
            <span className="sec3-con-subpara-span">
              user interface design that lead to <br />
              increased user retention, engagement & loyality.
            </span>
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
      <section className="sec4">
        <OurProject />
      </section>
      <section className="sec5">
        <Dp />
      </section>
      <section className="sec6">
        <div className="sec6-head">
          We’re all pissed-off optimists. <br />
          That’s what motivates us to <br />
          do our best work.
        </div>
        <div className="parent">
          <div className="child1">
            <div className="child-img">
              <img src={S6i1} alt="" />
              <span className="sec6-span">Initials & Consultation</span>
            </div>
            <div className="child-para">
              Discuss and share the information about your business including
              scope, timeline, and budget tell us about your business goals.
            </div>
          </div>
          <div className="child2">
            <div className="child-img">
              <img src={S6i2} alt="" />
              <span className="sec6-span">Define & Research</span>
            </div>
            <div className="child-para">
              Do a brief research on your project and define the best project
              solution for you. We will work together to create the website
              contents, If you have an existing website, its time for you to
              give us your content.
            </div>
          </div>
          <div className="child3">
            <div className="child-img">
              <img src={S6i3} alt="" />
              <span className="sec6-span">Concept & Planning</span>
            </div>
            <div className="child-para">
              Define a concept base on defined outcome form step, we will build
              a website architecture and a sitemap.
            </div>
          </div>
          <div className="child4">
            <div className="child-img">
              <img src={S6i4} alt="" />
              <span className="sec6-span"> Production & Prototype</span>
            </div>
            <div className="child-para">
              Design a prototype site (in some cases including custom codes) and
              graphic elements.
            </div>
          </div>
          <div className="child5">
            <div className="child-img">
              <img src={S6i5} alt="" />
              <span className="sec6-span"> Reviews & Revisions</span>
            </div>
            <div className="child-para">
              Revise your website to meet your best concerns. We review your
              idea to make sure is best for layout.
            </div>
          </div>
          <div className="child6">
            <div className="child-img">
              <img src={S6i6} alt="" />
              <span className="sec6-span">Finishing & Lauch</span>
            </div>
            <div className="child-para">
              Final review of your website to make sure all works better & Its
              time to go live.
            </div>
          </div>
        </div>
        <div className="design-icons">
          <div className="di1">
            <img src={Ps} alt="" />
          </div>
          <div className="di2">
            <img src={Ai} alt="" />
          </div>
          <div className="di3">
            <img src={Fig} alt="" />
          </div>
          <div className="di4">
            <img src={Pr} alt="" />
          </div>
          <div className="di5">
            <img src={Ax} alt="" />
          </div>
          <div className="di6">
            <img src={Sk} alt="" />
          </div>
          <div className="di7">
            <img src={Inv} alt="" />
          </div>
          <div className="di8">
            <img src={Ae} alt="" />
          </div>
        </div>
      </section>
      <section className="sec7">
        <Dp2 />
      </section>
      <section className="sec8">
        <Carosel />
      </section>
      <section className="sec9">
        <Form />
      </section>
      <section className="sec10">
        <Foot />
      </section>
    </div>
  );
}

export default Pro;
