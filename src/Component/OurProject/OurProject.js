import React from "react";
import "./OurProject.css";
import C1img1 from "./ asset/ card1/ c1img1.png";
import C1img2 from "./ asset/ card1/ c1img2.png";
import C2img1 from "./ asset/ card2/ c2img1.png";
import C2img2 from "./ asset/ card2/ c2img2.png";
import C3img1 from "./ asset/ card3/ card3img1.png";
import C3img2 from "./ asset/ card3/ c3img2.png";
import C4img1 from "./ asset/ card4/ cardimg1.png";
import C4img2 from "./ asset/ card4/ c4img2.png";

function OurProject() {
  return (
    <div>
      <div className="sec4-head">Our Projects</div>
      <div className="sec4-para">
        We did projects for many startups and brands
      </div>
      <div className="items">
        <div className="item1">
          <div className="item1-con">Retail Scan - In-Store Solutions </div>
          <div className="item1-con2">
            With a pan India field footprint and a whole new thinking on
            delivering measurable value to our clients, we try to unearth every
            conceivable store related issue that affects execution and sales of
          </div>
          <div className="sec4-card1">
            <div className="item1-img1">
              <img src={C1img1} alt="" />
            </div>
            <div className="item1-img2">
              <img src={C1img2} alt="" />
            </div>
          </div>
        </div>
        <div className="item2">
          <div className="item1-con">KnoMo - Finanical Tracking </div>
          <div className="item1-con2">
            Learn How to track your money like a pro. KnoMo (#knowyourmoney )
            enables you to keep track of all your transactions and also reduces
            time, energy, costs associated with it. Lets KnoMo!
          </div>
          <div className="sec4-card1">
            <div className="item2-img1">
              <img src={C2img1} alt="" />
            </div>
            <div className="item2-img2">
              <img src={C2img2} alt="" />
            </div>
          </div>
        </div>
        <div className="item3">
          <div className="item1-con">VoxGuru - Music Learning </div>
          <div className="item1-con2">
            VoxGuru is your best destination for music learning. Be it Carnatic,
            Hindustani or Voice Culture, we bring you over 600+ high quality
            lessons with an amazing audio visual experience!
          </div>
          <div className="sec4-card1">
            <div className="item3-img1">
              <img src={C3img1} alt="" />
            </div>
            <div className="item3-img2">
              <img src={C3img2} alt="" />
            </div>
          </div>
        </div>
        <div className="item4">
          <div className="item1-con">VoxGuru - Music Learning </div>
          <div className="item1-con2">
            VoxGuru is your best destination for music learning. Be it Carnatic,
            Hindustani or Voice Culture, we bring you over 600+ high quality
            lessons with an amazing audio visual experience!
          </div>
          <div className="sec4-card1">
            <div className="item4-img1">
              <img src={C4img1} alt="" />
            </div>
            <div className="item4-img2">
              <img src={C4img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProject;
