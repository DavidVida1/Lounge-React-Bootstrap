import CircleType from "circletype";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

//import of AOS + CircleType + minislider

const Home = () => {
  const circleInstance = useRef();

  useEffect(() => {
    //Custom.js
    new CircleType(circleInstance.current).radius(50);
    AOS.init({
      duration: 700,
      easing: "ease",
      once: true,
    });

    window.addEventListener("scroll", () => {
      circleInstance.current.firstChild.style.transform =
        "rotate(" + window.pageYOffset + "deg)";
    });

    let tinyslider = function () {
      let el = document.querySelectorAll(".review-slider");

      if (el.length > 0) {
        let slider = tns({
          container: ".review-slider",
          items: 1,
          center: true,
          loop: false,
          mouseDrag: true,
          slideBy: 1,
          axis: "horizontal",
          swipeAngle: true,
          speed: 700,
          nav: true,
          controls: false,
          responsive: {
            900: { edgePadding: 30, items: 2 },
          },
        });
      }
    };
    tinyslider();
  }, []);

  return (
    <>
      <div className="circles-bg-navbar-hero-section-wrap">
        <section className="hero-section ">
          <div className="circles">
            <span className="circle-1"></span>
            <span className="circle-2"></span>
            <span className="circle-3"></span>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-between ">
              <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-up">
                <div id="circle-type" ref={circleInstance}>
                  <span>· Exquisite · Drinks</span>
                </div>
                <h1>Provides the best service for you.</h1>
                <div className="row">
                  <div className="col-lg-10">
                    <p>
                      Aenean posuere risus mauris, non euismod odio mollis sit
                      amet. Nunc ac auctor dui, elementum luctus ipsum. Nullam
                      bibendum congue dignissim
                    </p>
                  </div>
                </div>
                <div className="btns-wrap">
                  <a href="#ourDrinks" className="btn btn-secondary me-2">
                    Menu
                  </a>
                  <a href="#" className="btn btn-primary me-2">
                    Book a table
                  </a>
                </div>

                <div className="social-icons">
                  <div className="social-icons-inner">
                    <a href="#">
                      <span className="fa-brands fa-facebook-f"></span>
                    </a>
                    <a href="#">
                      <span className="fa-brands fa-twitter"></span>
                    </a>
                    <a href="#">
                      <span className="fa-brands fa-instagram"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="200">
                <div className="img-wrap">
                  <div className="bg-down"></div>
                  <img
                    src="./images/svg/whisky.svg"
                    alt="image whisky"
                    className="float-image"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  ></img>
                  <img
                    src="./images/svg/hero.svg"
                    alt="image whisky"
                    className="img-fluid img-hero"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
