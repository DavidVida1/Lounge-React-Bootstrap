import React from "react";

const Barman = () => {
  return (
    <section className="barman-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 scrollworkbg" data-aos="fade-up">
            <h2 className="heading mb-3"> Our Expert Barman</h2>
            <p className="mb-5 pe-lg-5">
              Aenean posuere risus mauris, non euismod odio mollis sit amet.
              Nunc ac auctor dui, elementum luctus ipsum. Nullam bibendum congue
              dignissim.
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
  );
};

export default Barman;
