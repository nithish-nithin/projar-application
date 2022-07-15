import React from "react";
import "./Dp.css";
import Item1 from "../PRO/asset/cd.png";
import Item2 from "../PRO/asset/be.png";
import Item3 from "../PRO/asset/wm.png";
import Item4 from "../PRO/asset/dm.png";

function Dp() {
  return (
    <div>
      <div className="sec5-con-head">Development Process</div>
      <div className="sec5-con-para">
        Masterpieces are always crafted with
        <br />
        <span className="sec5-span">
          undying passion, a dash of craziness and a<br /> lot of discipline.
        </span>
      </div>
      <div className="boxes">
        <div className="box1">
          <div className="box1-img">
            <img src={Item1} alt="" />
          </div>
          <div className="box-head">Branding</div>
          <div className="box-para">
            We believe in creating perfect designs that are clearly positioned
            and crafted giving an unique look that communicates the right
            message to the target audience. Brand management, Brand Identity
            Design, Logo Design, Art Direction, Brand consulting are some of the
            Branding services that we do.
          </div>
        </div>
        <div className="box2">
          <div className="box1-img">
            <img src={Item2} alt="" />
          </div>
          <div className="box-head">Development</div>
          <div className="box-para">
            Offering more than just website design, we indulge in providing
            consultation from concepts to the final design. A best website to
            represent your products or services is all that we will aim at.
            Security, DevOps and Testing will be done.
          </div>
        </div>
        <div className="box3">
          <div className="box1-img">
            <img src={Item3} alt="" />
          </div>
          <div className="box-head">Interaction</div>
          <div className="box-para">
            Making Client - focused interfaces and plan frameworks that can give
            a great experience to the clients. App and Web design, User
            Interface, Usability, User experience, Design system and UX
            Consulting are some of the services we provide.
          </div>
        </div>
        <div className="box4">
          <div className="box1-img">
            <img src={Item4} alt="" />
          </div>
          <div className="box-head">Advertising</div>
          <div className="box-para">
            Creating strategic campaign products and services with a plan of
            conversion-rate-optimization in every medium; targeted material
            designs always make the right impressions. Graphic design,
            Videography, Photography, Animation, Motion Graphics and 3D
            Production are few of the services we indulge in.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dp;
