import React from "react";
import Carousel from "nuka-carousel";

import r1 from "../../assets/img/r1.png";
import r2 from "../../assets/img/r2.png";
import r3 from "../../assets/img/r3.png";
import r4 from "../../assets/img/r4.png";
import r5 from "../../assets/img/r5.png";
import r6 from "../../assets/img/r6.png";

class Registry extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a id="registry" className="in-page-link"></a>

        <section className="registry registry-1 bg-secondary">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>Give the gift of presents</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-6 text-center">
                <a href="#">
                  <img alt="Registry" src={r1} />
                </a>
              </div>

              <div className="col-md-4 col-sm-6 text-center">
                <a href="#">
                  <img alt="Registry" src={r2} />
                </a>
              </div>

              <div className="col-md-4 col-sm-6 text-center">
                <a href="#">
                  <img alt="Registry" src={r3} />
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-6 text-center">
                <a href="#">
                  <img alt="Registry" src={r4} />
                </a>
              </div>

              <div className="col-md-4 col-sm-6 text-center">
                <a href="#">
                  <img alt="Registry" src={r5} />
                </a>
              </div>

              <div className="col-md-4 col-sm-6 text-center">
                <a href="#">
                  <img alt="Registry" src={r6} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Registry;
