import React from "react";

import banner from "../../assets/img/hero2.jpg";

class Home extends React.Component {
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
    const scrollBottom = scrollTop + window.innerHeight;
    const elemTop = this.sectionRef.current.offsetTop;
    const elemBottom = this.sectionRef.current.offsetHeight;
    if (scrollBottom > elemTop && scrollTop < elemBottom) {
      this.setState({ holderTransformY: scrollTop / 7 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <a id="home" className="in-page-link"></a>
        <section
          className={`header header-3 overlay-primary ${this.state.parallax}`}
          ref={this.sectionRef}
        >
          <div
            className="background-image-holder fadeIn"
            style={{
              background: `url(${banner}) 50% 50%`,
              transform: `translateY(${this.state.holderTransformY}px)`
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1>Evan &amp; Caitlyn</h1>
                <h6>Join us August 8th for our wedding.</h6>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
