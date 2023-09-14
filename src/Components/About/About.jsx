import React from "react";
import HeadingStyle from "../HeadingStyle/HeadingStyle";

export default function About() {
  return (
    <div className=" main-section about">
      <h1 className="text-white fw-bolder">ABOUT COMPONENT</h1>
      <HeadingStyle />
      <div className="container mt-5 text-light">
        <div className="row">
          <div className="col-md-6 ps-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization
          </div>
          <div className="col-md-6 pe-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </div>
  );
}
