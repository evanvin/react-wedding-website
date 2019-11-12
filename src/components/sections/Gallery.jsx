import React from "react";
import Carousel from "nuka-carousel";

import img9 from "../../assets/img/hero9.jpg";
import img10 from "../../assets/img/hero10.jpg";
import img11 from "../../assets/img/hero11.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="gallery gallery-1">
          <Carousel
            className="image-slider"
            autoplay={true}
            renderTopCenterControls={({ currentSlide }) => <div />}
            renderCenterLeftControls={({ previousSlide }) => <div />}
            renderCenterRightControls={({ nextSlide }) => <div />}
          >
            <div
              className="background-image-holder fadeIn"
              style={{
                background: `url(${img9}) 50% 50%`,
                transform: `translateY(0px)`
              }}
            />
            <div
              className="background-image-holder"
              style={{
                background: `url(${img10}) 50% 50%`
              }}
            />

            <div
              className="background-image-holder"
              style={{
                background: `url(${img11}) 50% 50%`
              }}
            />
          </Carousel>
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
