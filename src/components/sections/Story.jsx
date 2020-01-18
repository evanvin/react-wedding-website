import React from "react";
import Carousel from "nuka-carousel";

import normal from "Images/story_normal.jpg";
import abnormal from "Images/story_abnormal.jpg";
import story from "Images/story.gif";
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
                  wrapAround={true}
                  autoplayInterval={6000}
                  renderTopCenterControls={({ currentSlide }) => <div />}
                  renderCenterLeftControls={({ previousSlide }) => <div />}
                  renderCenterRightControls={({ nextSlide }) => <div />}
                >
                  <img alt="Photo" src={normal} />
                  <img alt="Photo" src={abnormal} />
                </Carousel>
                {/* <img src={story} height={600} /> */}
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
                <h2>Do “opposites attract”?</h2>
                <p>
                  Is it true that “opposites attract”? In our case, it could not be more true! Most days, and in many ways, we are polar opposites. Evan is energetic, loud, outgoing, goofy, and has a love for the holidays. Caitlyn is quiet, patient, epistemophilic, and has a love for teaching. While Evan loves cooking, Caitlyn loves her grubhub app. While Caitlyn loves watching and playing sports, Evan loves drinking beer while Caitlyn is watching or playing sports.  In spite of our many differences, we share a love for our work in the technology industry, for travelling and for trying new things. We share a love for our families, friends and our rescue pup, Max. We share a love for one another and for helping each other grow into the best versions of ourselves, as individuals and as partners.
  <br/><br/>
   After five years together, one thing that is easy for us to agree on, is that we are both excited to share our special day with all of our friends and family.
  
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
