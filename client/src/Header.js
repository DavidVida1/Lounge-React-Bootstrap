import styled from "styled-components";
import React from "react";

const Header = () => {
  return (
    <>
      <div class="custom-navbar m-4">
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-6 col-lg-3 logo ">
              <a href="#">
                <img
                  src="images/svg/logo.svg"
                  alt="Lounge Logo"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-6 d-none d-lg-block text-center">
              <ul class="custom-nav mt-2">
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
            <div class="col-6 col-md-6 col-lg-3 text-end">
              <a href="#" class="btn btn-primary">
                Book a table
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
