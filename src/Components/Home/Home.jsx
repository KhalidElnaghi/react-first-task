import React from "react";
import avatar from "./imgs/avataaars.svg";
import HeadingStyle from "../HeadingStyle/HeadingStyle";
export default function Home() {
  return (
    <div className="main-section home">
      <img src={avatar} height="300" alt="avatar-pic" />
          <h1 className="text-white fw-bolder pt-3">START FRAMEWORK</h1>
          <HeadingStyle />
          <p className="pt-4">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
