import React, { useState } from "react";
import Navbar from "./Navbar.js";

const Header = () => {
  const [offCanvasMenu, setOffCanvasMenu] = useState(false);

  return (
    <>
      <Navbar setCanvas={setOffCanvasMenu} offMenuCanvas={offCanvasMenu} />

      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="icofont-close site-mobile-menu-close">
            <span className="js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <div className="circles-bg-navbar-hero-section-wrap custom-index">
        <div
          className="custom-navbar py-4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-3 logo ">
                <a href="#">
                  <img
                    src="./images/svg/logo.svg"
                    alt="Lounge Logo"
                    className="img-fluid"
                  />
                </a>
              </div>

              <div className="col-lg-9 d-none d-lg-block text-end">
                <ul className="custom-nav js-clone-nav mt-2">
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

              <div className="col-6 col-md-6 col-lg-3  text-end ">
                {/*<a href="#" className="btn btn-primary ">
                  Book a table
                </a>*/}

                <a
                  href="#"
                  className="ms-3 burger ml-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
                >
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
