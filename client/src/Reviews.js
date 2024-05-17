import React from "react";

const Reviews = () => {
  return (
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
                      Aliquam rutrum est neque, ac blandit velit vulputate vel.
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
                      Aliquam rutrum est neque, ac blandit velit vulputate vel.
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
                      Aliquam rutrum est neque, ac blandit velit vulputate vel.
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
  );
};

export default Reviews;
