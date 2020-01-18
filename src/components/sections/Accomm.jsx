import React from "react";

import banner from "Images/accommodation.jpg";

class Accomm extends React.Component {
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
        <a id="accomm" className="in-page-link"></a>

        <section
          className={`details accom-1 details-1 overlay ${this.state.parallax}`}
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
                <h2>Travel &amp; Accommodations</h2>
                {/* <h6>
                  Mention our names when making your accommodation
                  <br />
                  reservation to receive the group booking discount.
                </h6> */}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-6 text-center feature">
                <h4>
                  Burlington International <br />
                  Airport (BTV)
                </h4>
                <p>
                  Direct flights to BTV from <br />
                  DCA, IAD, and PHL
                </p>
                <a
                  href="https://www.btv.aero/"
                  className="btn btn-white"
                  target="default"
                >
                  Info
                </a>
              </div>
              <div className="col-md-6 col-sm-6 text-center feature">
                <h4>
                  Manchester-Boston <br />
                  Regional Airport (MHT)
                </h4>
                <p>
                  Direct flights to MHT from
                  <br />
                  DCA, IAD, BWI, and PHL
                </p>
                <a
                  href="https://www.flymanchester.com/"
                  className="btn btn-white"
                  target="default"
                >
                  Info
                </a>
              </div>
              {/* <div className="col-md-6 col-sm-6 text-center feature">
                <h4>Days Inn by Wyndham Colchester Burlington</h4>
                <p>
                  123 College Parkway
                  <br />
                  Colchester, VT 05446
                </p>
                <a href="#rsvp" className="btn btn-white" target="default">
                  RSVP Here
                </a>
              </div>
              <div className="col-md-6 col-md-offset-0 col-sm-6 col-sm-offset-3 text-center feature">
                <h4>Hampton Inn by Hilton Colchester</h4>
                <p>
                  42 Lower Mountain View Drive
                  <br />
                  Colchester, VT 05446
                </p>
                <a href="#rsvp" className="btn btn-white" target="default">
                  RSVP Here
                </a>
              </div> */}
            </div>

            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 text-center">
                <p>Stay tuned for more information on accommodations.</p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Accomm;
