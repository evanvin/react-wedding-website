import React from "react";

import banner from "Images/church_street.jpg";

class Footer extends React.Component {
  state = {
    holderTransformY: 0,
    parallax: "parallax"
  };

  sectionRef = React.createRef();

  componentDidMount() {
    if (
      !/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
        navigator.userAgent || navigator.vendor || window.opera
      )
    ) {
      if (window.requestAnimationFrame) {
        this.parallaxBackground();
        window.addEventListener("scroll", () => {
          requestAnimationFrame(this.parallaxBackground);
        });
      }
    } else {
      this.setState({ parallax: "" });
    }
  }

  parallaxBackground = () => {
    const scrollTop = window.pageYOffset;
    const scrollBottom = scrollTop + window.screen.availHeight;
    const elemTop = this.sectionRef.current.offsetTop;
    const elemBottom = this.sectionRef.current.offsetHeight;
    if (scrollBottom > elemTop && scrollTop < elemBottom) {
      this.setState({ holderTransformY: (scrollBottom - elemTop) / 7 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <section
          className={`details details-2 overlay ${this.state.parallax}`}
          ref={this.sectionRef}
        >
          <div
            className="background-image-holder fadeIn"
            style={{
              background: `url(${banner}) 50% 50%`,
              transform: `translateY(${this.state.holderTransformY}px)`
            }}
          ></div>
        </section>
        <footer className="footer footer-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h6>© Copyright 2015 Medium Rare - All Rights Reserved</h6>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
