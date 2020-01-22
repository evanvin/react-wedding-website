import React from "react";
import { data } from "./things.js";
import * as Q from "./Questions";
import { Animated } from "react-animated-css";
import Carousel from "nuka-carousel";

class Wizard extends React.Component {
  state = { question: 1, q1Choice: null, showResults: false, results: [] };

  onQuestionOneSelection = q1Choice => {
    let question = 2;

    if (q1Choice == "What are you looking to do?") {
      question = 1;
      q1Choice = null;
    }

    this.setState({
      question,
      q1Choice
    });
  };

  resultsReady = results => {
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
                <Carousel slidesToShow={3}>
                  {results.map(item => {
                    return (
                      <div>
                        <h2>{item.name}</h2>
                        <img src={item.imageUrl} />
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
