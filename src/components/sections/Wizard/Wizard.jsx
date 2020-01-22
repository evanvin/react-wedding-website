import React from "react";
import { data } from "./things.js";
import * as Q from "./Questions";
import { Animated } from "react-animated-css";
import Carousel from "nuka-carousel";

class Wizard extends React.Component {
  state = { question: 1, q1Choice: null, showResults: false, results: [] };

  onQuestionOneSelection = q1Choice => {
    let question = 2;
    let showResults = this.state.showResults;

    if (q1Choice == "What are you looking to do?") {
      question = 1;
      q1Choice = null;
      showResults = false;
    }

    this.setState({
      question,
      q1Choice,
      showResults
    });
  };

  resultsReady = results => {
    console.log(results);
    this.setState({ showResults: true, results });
  };

  selectQuestionSet = choice => {
    return <Q.Question resultsReady={this.resultsReady} choice={choice} />;
  };

  render() {
    const { q1Choice, showResults, results } = this.state;

    return (
      <div className="wizard">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <Q.One onSelect={this.onQuestionOneSelection} />
          </div>
        </div>
        <br />
        {q1Choice && (
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-xs-12">
              <Animated isVisible={q1Choice != null} animationIn="fadeIn">
                {this.selectQuestionSet(q1Choice)}
              </Animated>
            </div>
          </div>
        )}
        <br />
        {showResults && (
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-xs-12">
              <Animated isVisible={true} animationIn="fadeIn">
                <Carousel>
                  {results.map(item => {
                    return (
                      <div className="cinfo_card">
                        <div className="col-lg-12">
                          <figure>
                            <div
                              className="media"
                              style={{
                                backgroundImage: `url(${item.imageUrl})`
                              }}
                            ></div>
                            <figcaption>
                              <div className="title">{item.name}</div>
                              {/* <svg
                                viewBox="0 0 200 200"
                                version="1.1"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <defs>
                                  <mask
                                    id="mask"
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                  >
                                    <rect
                                      id="alpha"
                                      x="0"
                                      y="0"
                                      width="100%"
                                      height="100%"
                                    ></rect>
                                    <text className="title" dx="50%" dy="2.5em">
                                      {item.group}
                                    </text>
                                    <text
                                      className="title name"
                                      dx="50%"
                                      dy="3.5em"
                                    >
                                      {item.name}
                                    </text>
                                  </mask>
                                </defs>
                                <rect
                                  id="base"
                                  x="0"
                                  y="0"
                                  width="100%"
                                  height="100%"
                                ></rect>
                              </svg> */}
                              <div className="caption_body">
                                <p>
                                  Enamel pin selvage health goth edison bulb,
                                  venmo glossier tattooed hella butcher cred
                                  iPhone.
                                </p>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </Animated>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Wizard;
