import React from "react";
import HeadingStyle2 from "../HeadingStyle/HeadingStyle2";
import pic1 from "./imgs/port1.png";
import pic2 from "./imgs/port2.png";
import pic3 from "./imgs/port3.png";

export default function Portfolio() {
  return (
    <div className="main-section2 portfolio">
      <h1 className="fw-bolder pt-4">PORTFOLIO COMPONENT</h1>
      <HeadingStyle2 />
      <div className="container mt-4">
        <div className="row g-5">
          <div className="col-md-4 ">
            <div className="portfolio-card">
              <div className="layer">
                <i class="fa-solid fa-plus "></i>
              </div>
              <img className="w-100  " src={pic1} alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="portfolio-card">
              <div className="layer">
                <i class="fa-solid fa-plus "></i>
              </div>
              <img className="w-100  " src={pic2} alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="portfolio-card">
              <div className="layer">
                <i class="fa-solid fa-plus "></i>
              </div>
              <img className="w-100  " src={pic3} alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="portfolio-card">
              <div className="layer">
                <i class="fa-solid fa-plus "></i>
              </div>
              <img className="w-100  " src={pic1} alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="portfolio-card">
              <div className="layer">
                <i class="fa-solid fa-plus "></i>
              </div>
              <img className="w-100  " src={pic2} alt="" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="portfolio-card">
              <div className="layer">
                <i class="fa-solid fa-plus "></i>
              </div>
              <img className="w-100  " src={pic3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
