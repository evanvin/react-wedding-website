import React from "react";
import { Animated } from "react-animated-css";
import * as Q from "./Questions";
import ThingsMap from "./ThingsMap";
import Switch from "./Switch";
import FormattedResults from "./FormattedResults";

class Wizard extends React.Component {
  state = {
    question: 1,
    q1Choice: null,
    showResults: false,
    results: [],
    showFirstQuestion: true,
    toggleQuiz: false
  };

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showFirstQuestion && !this.state.showFirstQuestion) {
      this.setState({
        showFirstQuestion: true
      });
    }
  }

  reset = () => {
    this.setState({
      question: 1,
      q1Choice: null,
      showResults: false,
      results: [],
      showFirstQuestion: false
    });
  };
  resultsReady = results => {
    this.setState({ showResults: true, results });
  };

  switchToggled = toggleQuiz => {
    this.setState({ toggleQuiz });
  };

  showToggledContent = () => {
    const {
      q1Choice,
      showResults,
      results,
      showFirstQuestion,
      toggleQuiz
    } = this.state;

    if (toggleQuiz) {
      //true = Show Map
      return (
        <div className="row">
          <ThingsMap />
        </div>
      );
    }

    //Else, false = Show Quiz
    return (
      <React.Fragment>
        <div className="row">
          {showFirstQuestion && (
            <div className="col-md-8 col-md-offset-2 col-xs-12">
              <Q.One onSelect={this.onQuestionOneSelection} />
            </div>
          )}
        </div>
        <br />
        {q1Choice && (
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-xs-12">
              <Animated
                key="question-set"
                isVisible={q1Choice != null}
                animationIn="fadeIn"
              >
                {this.selectQuestionSet(q1Choice)}
              </Animated>
            </div>
          </div>
        )}
        <br />
        {showResults && (
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-xs-12">
              <Animated
                key="formatted-results"
                isVisible={true}
                animationIn="fadeIn"
              >
                <FormattedResults results={results} />
              </Animated>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };

  selectQuestionSet = choice => {
    return (
      <Q.Question
        reset={this.reset}
        resultsReady={this.resultsReady}
        choice={choice}
      />
    );
  };

  render() {
    return (
      <div className="wizard">
        <div className="row">
          <Switch switchToggled={this.switchToggled} />
        </div>
        {this.showToggledContent()}
      </div>
    );
  }
}

export default Wizard;
