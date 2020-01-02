import React from "react";
import Carousel from "nuka-carousel";

import normal from "Images/story_normal.jpg";
import abnormal from "Images/story_abnormal.jpg";
import signature from "Images/signature.png";

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
                  <img alt="Photo" src={normal} />
                  <img alt="Photo" src={abnormal} />
                </Carousel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 text-center">
                <h2>Do “opposites attract”?</h2>
                <p>
                  In our case, it could not be more true! Most days and in many
                  ways, we are polar opposites. Evan is energetic, loud,
                  outgoing, goofy, and has a love for the holidays. Caitlyn is
                  epistemophilic, quiet, patient, and has a love for sports.
                  While Evan loves cooking, Caitlyn loves her Grubhub app. While
                  Caitlyn loves X, Evan loves Y.
                </p>
                {/* <img alt="Signature" src={signature} /> */}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Story;
