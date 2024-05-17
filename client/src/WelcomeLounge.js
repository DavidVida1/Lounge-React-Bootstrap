import React from "react";

const WelcomeLounge = () => {
  return (
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
                  Aenean posuere risus mauris, non euismod odio mollis sit amet.
                  Nunc ac auctor dui, elementum luctus ipsum. Nullam bibendum
                  congue dignissim.
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
  );
};

export default WelcomeLounge;
