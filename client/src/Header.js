import styled from "styled-components";
import React from "react";

const Header = () => {
  return (
    <div className="circles-bg-navbar-hero-section-wrap custom-index">
      <div className="custom-navbar py-4">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3 logo ">
              <a href="#">
                <img
                  src="images/svg/logo.svg"
                  alt="Lounge Logo"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-lg-6 d-none d-lg-block text-center">
              <ul className="custom-nav mt-2">
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className=" col-6 col-md-6 col-lg-3  text-end">
              <a href="#" className="btn btn-primary">
                Book a table
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
