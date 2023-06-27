import styled from "styled-components";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <a href="#" className="footer-logo d-block mb-4">
                <img
                  src="../images/svg/logo-footer.svg"
                  alt="lounge logo"
                  className="img-fluid"
                />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                mollis orci lorem, nec suscipit leo placerat eget. Learn More
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
