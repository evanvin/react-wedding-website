import React from "react";
import ReactTooltip from "react-tooltip";
import { Animated } from "react-animated-css";
import Carousel from "nuka-carousel";
import FontAwesome from "react-fontawesome";
import * as Q from "./Questions";
import top from "Images/best.png";

class Wizard extends React.Component {
  state = {
    question: 1,
    q1Choice: null,
    showResults: false,
    results: [],
    showFirstQuestion: true
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

  formatResults = results => {
    if (Object.keys(results).length < 1) {
      return <h2>No Results</h2>;
    }
    return (
      <Carousel
        key="things-carousel"
        autoplay={true}
        wrapAround={true}
        autoplayInterval={10000}
      >
        {results.map((p, idx) => {
          return (
            <div key={`${p.name}-info-${idx}`}>
              <div className="col-lg-12">
                <figure className="things_figure">
                  <div
                    className="media"
                    style={{
                      backgroundImage: `url(${p.imageUrl})`
                    }}
                  ></div>
                  <figcaption className="things_caption">
                    <div className="row">
                      <div className="col-xs-12">
                        <h3>
                          {p.name}
                          {p.hasOwnProperty("note") && (
                            <React.Fragment>
                              &nbsp;
                              <FontAwesome
                                name="info-circle"
                                data-tip={p.note}
                                data-multiline={true}
                              />
                              <ReactTooltip
                                place="bottom"
                                type="dark"
                                effect="solid"
                              />
                            </React.Fragment>
                          )}
                        </h3>
                      </div>

                      <div className="col-xs-12">
                        {p.hasOwnProperty("topPersonalRecommendation") && (
                          <img
                            title="Top Recommendation"
                            src={top}
                            height={35}
                          />
                        )}
                      </div>
                      <br />

                      {(p.hasOwnProperty("caitsFavoriteBeer") ||
                        p.hasOwnProperty("evansFavoriteBeer")) && (
                        <React.Fragment>
                          <div className="col-xs-12">
                            <hr className="hr-text" data-content="FAVS" />
                          </div>
                          {this.getRecommendations(p)}
                        </React.Fragment>
                      )}

                      <br />
                      <div className="col-xs-6">
                        <a
                          target="_blank"
                          href={`http://maps.google.com/?q=${p.address}, ${p.city}, ${p.state} ${p.zipcode}`}
                        >
                          <FontAwesome
                            key={`${p.name}-location-${idx}`}
                            name="map-marker"
                          />
                        </a>
                      </div>

                      {p.hasOwnProperty("menutapList") && (
                        <div className="col-xs-6">
                          <a target="_blank" href={p.menutapList}>
                            <FontAwesome
                              key={`${p.name}-menu-${idx}`}
                              name="file-text-o"
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          );
        })}
      </Carousel>
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

  getRecommendations = p => {
    let r = [];

    if (p.hasOwnProperty("caitsFavoriteBeer")) {
      r.push(<div className="col-xs-12 fav-beer">{p.caitsFavoriteBeer}</div>);
    }

    if (p.hasOwnProperty("evansFavoriteBeer")) {
      r.push(<div className="col-xs-12 fav-beer">{p.evansFavoriteBeer}</div>);
    }

    return r;
  };

  render() {
    const { q1Choice, showResults, results, showFirstQuestion } = this.state;

    return (
      <div className="wizard">
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
                {this.formatResults(results)}
              </Animated>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Wizard;
