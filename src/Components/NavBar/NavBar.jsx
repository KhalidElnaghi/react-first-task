import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  let [navBarHeight, setNavBarHeight] = useState(false);
  const handleNavBarHeight = () => {
    if (window.scrollY >= 85) {
      setNavBarHeight(true);
    } else {
      setNavBarHeight(false);
    }
  };
  window.addEventListener("scroll", handleNavBarHeight);
  return (
    <>
      <nav
        className={
          navBarHeight
            ? "navbar navbar-expand-lg fixed-top"
            : "navbar navbar-expand-lg fixed-top py-4"
        }
      >
        <div className="container">
          <NavLink className="navbar-brand text-white fw-bolder fs-2" to="home">
            START FRAMEWORK
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link text-white fw-bolder" to="about">
                ABOUT
              </NavLink>
              <NavLink className="nav-link text-white fw-bolder mx-2" to="portfolio">
                PORTFOLIO
              </NavLink>
              <NavLink className="nav-link  text-white fw-bolder" to="contact">
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
