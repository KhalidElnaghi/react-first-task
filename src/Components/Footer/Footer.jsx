import React from "react";

export default function Footer() {
  return (
    <>
      <div className="upper-section text-white text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-3">
              <h2 className=" text-uppercase">location</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 p-3">
              <h2>AROUND THE WEB</h2>
              <ul className="p-0">
                <li>
                  <i className="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin-in"></i>
                </li>
                <li>
                  <i className="fa-solid fa-globe"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 p-3">
              <h2 className=" text-uppercase">ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-section text-center py-4">
        <p className="m-0">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
