import styled from "styled-components";
import CircleType from "circletype";
import React, { useEffect, useRef } from "react";
import AOS from "aos";

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
  }, []);

  return (
    <>
      <div className="circles-bg-navbar-hero-section-wrap">
        <div className="circles">
          <span className="circle-1"></span>
          <span className="circle-2"></span>
          <span className="circle-3"></span>
        </div>

        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center justify-content-between ">
              <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-up">
                <div id="circle-type" ref={circleInstance}>
                  <span>· Exquisite · Drinks</span>
                </div>
                <h1>Provide the best service for you.</h1>
                <div className="row">
                  <div className="col-lg-10">
                    <p>
                      Aenean posuere risus mauris, non euismod odio mollis sit
                      amet. Nunc ac auctor dui, elementum luctus ipsum. Nullam
                      bibendum congue dignissim.
                    </p>
                  </div>
                </div>
                <div className="btns-wrap">
                  <a href="#" className="btn btn-secondary me-2">
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
                    src="images/svg/whisky.svg"
                    alt="image whisky"
                    className="float-image"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  ></img>
                  <img
                    src="images/svg/hero.svg"
                    alt="image whisky"
                    className="img-fluid img-hero"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        className="special-drink-section drink-section"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 text-center mx-auto" data-aos="fade-up">
              <h2 className="heading">Our Drinks</h2>
              <p className="drink-info">
                Aenean posuere risus mauris, non euismod odio mollis sit amet.
                Nunc ac auctor dui, elementum luctus ipsum.
              </p>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="drink-wrap h-100 active">
                <a href="#" className="drink-thumbnail">
                  <img
                    src="images/svg/drink1.svg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <span className="price">$12</span>
                </a>
                <div className="drink-body">
                  <h3>
                    <a href="#">Ciroc Tonic</a>
                  </h3>
                  <p>
                    Aenean posuere risus mauris, non euismod odio mollis sit
                    amet.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="drink-wrap h-100 ">
                <a href="#" className="drink-thumbnail">
                  <img
                    src="images/svg/drink2.svg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <span className="price">$18</span>
                </a>
                <div className="drink-body">
                  <h3>
                    <a href="#">Hot Mama</a>
                  </h3>
                  <p>
                    Aenean posuere risus mauris, non euismod odio mollis sit
                    amet.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="drink-wrap h-100 ">
                <a href="#" className="drink-thumbnail">
                  <img
                    src="images/svg/drink3.svg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <span className="price">$17</span>
                </a>
                <div className="drink-body">
                  <h3>
                    <a href="#">La Piña</a>
                  </h3>
                  <p>
                    Aenean posuere risus mauris, non euismod odio mollis sit
                    amet.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="drink-wrap h-100 ">
                <a href="#" className="drink-thumbnail">
                  <img
                    src="images/svg/drink4.svg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <span className="price">$16</span>
                </a>
                <div className="drink-body">
                  <h3>
                    <a href="#">Ciroc Martini</a>
                  </h3>
                  <p>
                    Aenean posuere risus mauris, non euismod odio mollis sit
                    amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="welcome-to-lounge">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-wrap">
                <img
                  src="images/svg/drink-alone.svg"
                  alt="Image"
                  class="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="heading">Welcome to Our Lounge</h2>
              <div className="row">
                <div className="col-lg-9">
                  <p>
                    Aenean posuere risus mauris, non euismod odio mollis sit
                    amet. Nunc ac auctor dui, elementum luctus ipsum. Nullam
                    bibendum congue dignissim.
                  </p>
                  <div>
                    <a href="#" className="btn btn-secondary me-2">
                      Menu
                    </a>
                    <a href="#" className="btn btn-primary">
                      Book a table
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
