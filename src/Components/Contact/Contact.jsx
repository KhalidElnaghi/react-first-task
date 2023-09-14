import React from "react";
import HeadingStyle2 from "../HeadingStyle/HeadingStyle2";

export default function Contact() {
  return (
    <div className="main-section2 contact">
      <h1 className="fw-bolder pt-4">CONATCT SECTION</h1>
      <HeadingStyle2 />
      <div className="container">
        <form className="w-100">
          <input className="w-100 border-0 border-bottom mb-5" placeholder="name" type="text" />
          <input className="w-100 border-0 border-bottom mb-5" placeholder="age" type="text" />
          <input className="w-100 border-0 border-bottom mb-5" placeholder="email" type="email" />
                  <input className="w-100 border-0 border-bottom mb-5" placeholder="password" type="password" />
                  <button className="click">send message</button>
              </form>
              
      </div>
    </div>
  );
}
