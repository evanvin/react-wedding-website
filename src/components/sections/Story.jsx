import React from "react";
import Carousel from "nuka-carousel";

import img4 from "../../assets/img/small4.jpg";
import img3 from "../../assets/img/small3.jpg";
import img2 from "../../assets/img/small2.jpg";
import signature from "../../assets/img/signature.png";

class Story extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a id="story" className="in-page-link"></a>

        <section className="story story-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
                <Carousel
                  className="image-slider"
                  autoplay={true}
                  renderTopCenterControls={({ currentSlide }) => <div />}
                  renderCenterLeftControls={({ previousSlide }) => <div />}
                  renderCenterRightControls={({ nextSlide }) => <div />}
                >
                  <img alt="Photo" src={img4} />
                  <img alt="Photo" src={img3} />
                  <img alt="Photo" src={img2} />
                </Carousel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 text-center">
                <h2>It started with a kiss…</h2>
                <p>
                  I guess you could call this a typical "boy meets girl in bar"
                  story but with a twist! Boy buys girl a drink, girl gives boy
                  phone number. Two months and several thousand kilometers later
                  and said boy and girl are head over heels for each other. Fast
                  forward to today and we're settling down in our first home
                  ready to tie the knot.
                </p>
                <img alt="Signature" src={signature} />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Story;
