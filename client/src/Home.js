import styled from "styled-components";
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

      <section
        className="special-drink-section drink-section"
        data-aos="fade-up"
        id="ourDrinks"
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
                    src="./images/svg/drink1.svg"
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
                    src="./images/svg/drink2.svg"
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
                    src="./images/svg/drink3.svg"
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
                    src="./images/svg/drink4.svg"
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
            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-up">
              <div className="img-wrap-welcome">
                <img
                  src="./images/svg/drinkAlone.svg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div
              className="col-lg-6 ps-lg-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
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
      <section className="barman-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 scrollworkbg" data-aos="fade-up">
              <h2 className="heading mb-3"> Our Expert Barman</h2>
              <p className="mb-5 pe-lg-5">
                Aenean posuere risus mauris, non euismod odio mollis sit amet.
                Nunc ac auctor dui, elementum luctus ipsum. Nullam bibendum
                congue dignissim.
              </p>
              <ul className="custom-list list-unstyled mb-3 clearfix">
                <li>Aenean posuere risus mauris, non euismod odio.</li>
                <li>Aenean posuere risus mauris, non euismod odio.</li>
                <li>Aenean posuere risus mauris, non euismod odio.</li>
                <li>Aenean posuere risus mauris, non euismod odio.</li>
                <li>Aenean posuere risus mauris, non euismod odio.</li>
                <li>Aenean posuere risus mauris, non euismod odio.</li>
              </ul>
              <div>
                <a href="#" className="btn btn-secondary me-2">
                  Menu
                </a>
                <a href="#" className="btn btn-primary">
                  Book a table
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 ps-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="./images/svg/barman.svg"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="review-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="heading mb-3">Our Happy Customers</h2>
              <p className="mb-4">
                Aenean posuere risus mauris, non euismod odio mollis sit amet.
                Nunc ac auctor dui, elementum luctus ipsum.
              </p>
            </div>
          </div>
        </div>
        <div
          className="review-slider-wrap text-center"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <div className="review-slider">
            <div className="item">
              <div className="row justify-content-center">
                <div className="col-lg-11 mx-auto">
                  <div className="review-block text-center">
                    <div className="author-pic">
                      <img
                        src="./images/svg/person-1.svg"
                        alt="Sonia Lopez"
                        className="img-fluid"
                      />
                    </div>
                    <div className="star mb-3">
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                    </div>
                    <blockquote className="mb-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin mollis orci lorem, nec suscipit leo placerat eget.
                        Nulla euismod orci in odio euismod, in blandit ligula
                        bibendum. Maecenas rutrum, justo eu dignissim rhoncus,
                        tortor lorem pretium ex, ac auctor nisl mi eget ex.
                        Aliquam rutrum est neque, ac blandit velit vulputate
                        vel.
                      </p>
                    </blockquote>
                    <div className="author-info">
                      <h3 className="font-weight-bold">Sonia Lopez</h3>
                      <span className="career d-block mb-3">
                        CEO &amp; Founder, XYZ Inc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*second item start*/}
            <div className="item">
              <div className="row justify-content-center">
                <div className="col-lg-11 mx-auto">
                  <div className="review-block text-center">
                    <div className="author-pic">
                      <img
                        src="./images/svg/person-2.svg"
                        alt="George Lucas"
                        className="img-fluid"
                      />
                    </div>
                    <div className="star mb-3">
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                    </div>
                    <blockquote className="mb-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin mollis orci lorem, nec suscipit leo placerat eget.
                        Nulla euismod orci in odio euismod, in blandit ligula
                        bibendum. Maecenas rutrum, justo eu dignissim rhoncus,
                        tortor lorem pretium ex, ac auctor nisl mi eget ex.
                        Aliquam rutrum est neque, ac blandit velit vulputate
                        vel.
                      </p>
                    </blockquote>
                    <div className="author-info">
                      <h3 className="font-weight-bold">George Lucas</h3>
                      <span className="career d-block mb-3">
                        CEO &amp; Founder, XYZ Inc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*second item end*/}
            {/*third item start*/}
            <div className="item">
              <div className="row justify-content-center">
                <div className="col-lg-11 mx-auto">
                  <div className="review-block text-center">
                    <div className="author-pic">
                      <img
                        src="./images/svg/person-3.svg"
                        alt="Andrew Lucas"
                        className="img-fluid"
                      />
                    </div>
                    <div className="star mb-3">
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                      <img
                        src="./images/svg/star.svg"
                        alt="star"
                        className="img-fluid"
                      />
                    </div>
                    <blockquote className="mb-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin mollis orci lorem, nec suscipit leo placerat eget.
                        Nulla euismod orci in odio euismod, in blandit ligula
                        bibendum. Maecenas rutrum, justo eu dignissim rhoncus,
                        tortor lorem pretium ex, ac auctor nisl mi eget ex.
                        Aliquam rutrum est neque, ac blandit velit vulputate
                        vel.
                      </p>
                    </blockquote>
                    <div className="author-info">
                      <h3 className="font-weight-bold">Andrew Lucas</h3>
                      <span className="career d-block mb-3">
                        CEO &amp; Founder, XYZ Inc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*third item end*/}
          </div>
        </div>
      </section>
      <section
        className="subscribe-section"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="container">
          <div className="subscribe-wrap">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center subscribe-form-wrap">
                <h3>Get our Promo Code by Subscribing to Our Newsletter</h3>
                <form action="#" className="subscribe-form">
                  <input
                    typpe="email"
                    placeholder="enter your email"
                    className="form-control"
                  />
                  <button className="btn btn-primary">subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
