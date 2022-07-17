import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import Uu from "../ carosel/ assest/circles.svg";
import Fff from "../ carosel/ assest/fff.png";

function Carosel() {
  return (
    <div>
      <div className="carousel">
        <Carousel showThumbs={false} infiniteLoop={true}>
          <div className="car">
            <div className="sec8-img">
              <img src={Uu} alt="" />
            </div>
            <div className="secc">
              <img src={Fff} alt="" />
            </div>
            <div className="sec8-con">Testimonial</div>
            <div className="sec8-para">
              We are a design company that emotes and innovates.
            </div>
            <div className="sec8-head">Osla olsen</div>
            <div className="sec8-par">
              Its more than 12 years now. They contribute in all our digital
              needs, from strategy to implementation. We engaged Prodjar – as
              our strategic design partner for defining effective communication
              design
            </div>
          </div>
          <div className="car">
            <div className="sec8-img">
              <img src={Uu} alt="" />
            </div>
            <div className="secc">
              <img src={Fff} alt="" />
            </div>
            <div className="sec8-con">Testimonial</div>
            <div className="sec8-para">
              We are a design company that emotes and innovates.
            </div>
            <div className="sec8-head">Osla olsen</div>
            <div className="sec8-par">
              Its more than 12 years now. They contribute in all our digital
              needs, from strategy to implementation. We engaged Prodjar – as
              our strategic design partner for defining effective communication
              design
            </div>
          </div>
          <div className="car">
            <div className="sec8-img">
              <img src={Uu} alt="" />
            </div>
            <div className="secc">
              <img src={Fff} alt="" />
            </div>
            <div className="sec8-con">Testimonial</div>
            <div className="sec8-para">
              We are a design company that emotes and innovates.
            </div>
            <div className="sec8-head">Osla olsen</div>
            <div className="sec8-par">
              Its more than 12 years now. They contribute in all our digital
              needs, from strategy to implementation. We engaged Prodjar – as
              our strategic design partner for defining effective communication
              design
            </div>
          </div>
          <div className="car">
            <div className="sec8-img">
              <img src={Uu} alt="" />
            </div>
            <div className="secc">
              <img src={Fff} alt="" />
            </div>
            <div className="sec8-con">Testimonial</div>
            <div className="sec8-para">
              We are a design company that emotes and innovates.
            </div>
            <div className="sec8-head">Osla olsen</div>
            <div className="sec8-par">
              Its more than 12 years now. They contribute in all our digital
              needs, from strategy to implementation. We engaged Prodjar – as
              our strategic design partner for defining effective communication
              design
            </div>
          </div>
          <div className="car">
            <div className="sec8-img">
              <img src={Uu} alt="" />
            </div>
            <div className="secc">
              <img src={Fff} alt="" />
            </div>
            <div className="sec8-con">Testimonial</div>
            <div className="sec8-para">
              We are a design company that emotes and innovates.
            </div>
            <div className="sec8-head">Osla olsen</div>
            <div className="sec8-par">
              Its more than 12 years now. They contribute in all our digital
              needs, from strategy to implementation. We engaged Prodjar – as
              our strategic design partner for defining effective communication
              design
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Carosel;
