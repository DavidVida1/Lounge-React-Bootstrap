import styled from "styled-components";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-section" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <a href="#" className="footer-logo d-block mb-4">
                <img
                  src="./images/svg/logo-footer.svg"
                  alt="lounge logo"
                  className="img-fluid"
                />
              </a>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                mollis orci lorem, nec suscipit leo placerat eget. Learn More
                <a href="#">Learn more</a>
              </p>
              <div>
                <h3 className="footer-heading">Opening</h3>
                <ul className="opening-hours list-unstyled">
                  <li>
                    <span>Monday-Friday</span>
                    <span> 2:00 pm to 2:00 am</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>4:00 pm to 3:00 am</span>
                  </li>

                  <li>
                    <span>Sunday</span>
                    <span>CLOSED</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <h3 className="footer-heading NDN"> Navigation</h3>
                  <ul className="list-unstyled links">
                    <li>
                      <a href="#">Menu</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                    <li>
                      <a href="#">Main Drinks</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 ">
                  <h3 className="footer-heading NDN"> Drinks</h3>
                  <ul className="list-unstyled links">
                    <li>
                      <a href="#">Vodka</a>
                    </li>
                    <li>
                      <a href="#">Gin</a>
                    </li>
                    <li>
                      <a href="#">Whisky</a>
                    </li>
                    <li>
                      <a href="#">Scotch</a>
                    </li>
                    <li>
                      <a href="#">Rhum</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                  <h3 className="footer-heading NDN"> Navigation</h3>
                  <ul className="list-unstyled socials">
                    <li>
                      <a href="#">
                        <span className="fa fa-brands fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-brands fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-brands fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-md-6">
              © 2023 Restaurant. All Rights Reserved
            </div>
            <div className="col-md-6 text-left text-md-end">
              <a href="#" className="me-md-5">
                Terms of Service
              </a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
