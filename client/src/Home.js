import styled from "styled-components";
import CircleType from "circletype";
import React, { useEffect, useRef } from "react";

const Home = () => {
  const circleInstance = useRef();
  useEffect(() => {
    new CircleType(circleInstance.current).radius(50);
  }, []);

  return (
    <>
      <section class="hero-section">
        <div class="container">
          <div class="row align-items-center justify-content-between ">
            <div class="col-lg-6 mb-5 mb-lg-0 ">
              <div id="circle-type" ref={circleInstance}>
                · Exquisite · Drinks
              </div>
              <h1>Provide the best food for you.</h1>
              <div class="row">
                <div class="col-lg-10">
                  <p>
                    Aenean posuere risus mauris, non euismod odio mollis sit
                    amet. Nunc ac auctor dui, elementum luctus ipsum. Nullam
                    bibendum congue dignissim.
                  </p>
                </div>
              </div>
              <div class="btns-wrap">
                <a href="#" class="btn btn-secondary me-2">
                  Menu
                </a>
                <a href="#" class="btn btn-primary me-2">
                  Book a table
                </a>
              </div>
              <div class="social-icons">
                <div class="social-icon-inner">
                  <a href="#">
                    <span class="fa-brands fa-facebook"></span>
                  </a>
                  <a href="#">
                    <span class="fa-brands fa-twitter"></span>
                  </a>
                  <a href="#">
                    <span class="fa-brands fa-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="img-wrap">
                <div class="bg-down"></div>
                <img
                  src="images/svg/whisky.svg"
                  alt="image whisky"
                  class="float-image"
                ></img>
                <img
                  src="images/svg/hero.svg"
                  alt="image whisky"
                  class="img-fluid img-hero"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
