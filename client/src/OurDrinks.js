import React from "react";

const ourDrinks = () => {
  return (
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
                  Aenean posuere risus mauris, non euismod odio mollis sit amet.
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
                  Aenean posuere risus mauris, non euismod odio mollis sit amet.
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
                  Aenean posuere risus mauris, non euismod odio mollis sit amet.
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
                  Aenean posuere risus mauris, non euismod odio mollis sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourDrinks;
