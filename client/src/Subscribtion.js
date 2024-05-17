import React from "react";

const Subscription = () => {
  return (
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
  );
};

export default Subscription;
