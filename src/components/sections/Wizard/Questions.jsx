import React from "react";
import _ from "lodash";
import Dropdown from "./Dropdown";
import data from "./things.js";

const FOOD_VALUE_KEY = {
  "I could eat": "Small",
  "Pretty hungry": "Medium",
  Hangry: "Large",
  "The Basics": "No",
  "All the Options": "Yes",
  "Real Quick": "<30",
  "Some time to kill": "30-60",
  "Nowhere to be": "60+"
};

class One extends React.Component {
  render() {
    const { onSelect } = this.props;
    const list = [
      "What are you looking to do?",
      "Eat",
      "Drink",
      "Explore",
      "Shop"
    ];

    return (
      <Dropdown list={list} onSelect={onSelect} questionTitle={"questionOne"} />
    );
  }
}

class Question extends React.Component {
  render() {
    const { choice, resultsReady } = this.props;
    switch (choice) {
      case "Eat":
        return <Eat resultsReady={resultsReady} />;
      case "Drink":
        return <Drink resultsReady={resultsReady} />;
      case "Explore":
        return <Explore resultsReady={resultsReady} />;
      case "Shop":
        return <Shop resultsReady={resultsReady} />;
      default:
        break;
    }
    return null;
  }
}

class Eat extends React.Component {
  state = { choices: {}, breakfast: null };

  getResults = () => {
    const { options, breakfast } = this.state;
    let categories = ["Gastropub", "Food"];
    if (breakfast == null) {
      categories.push("Breakfast");
    } else if (breakfast) {
      categories = ["Breakfast"];
    }

    let eatData = data.filter(item => {
      return categories.includes(item.group);
    });
    eatData = _.filter(eatData, options);
    this.props.resultsReady(eatData);
  };

  onSelect = (choice, questionTitle, idx) => {
    let { options } = this.state;

    if (idx == 0) {
      if (questionTitle == "breakfast") {
        this.setState({ breakfast: null });
      } else {
        delete options[questionTitle];
      }
    } else {
      if (questionTitle != "breakfast") {
        if (
          ["portionSize", "goodSelectionOfLibations", "time"].includes(
            questionTitle
          )
        ) {
          choice = FOOD_VALUE_KEY[choice];
        }
        options = Object.assign({ [questionTitle]: choice }, options);
      } else {
        this.setState({ breakfast: choice == "Yes" });
      }
    }
    this.setState({ options });
  };

  render() {
    return (
      <div className="eat-section">
        <div className="col-md-6 col-xs-12">
          <Dropdown
            list={["Hunger Level", "I could eat", "Pretty hungry", "Hangry"]}
            questionTitle="portionSize"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            list={["Drink Variety", "The Basics", "All the Options"]}
            questionTitle="goodSelectionOfLibations"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            list={["Cost", "$", "$$", "$$$"]}
            questionTitle="cost"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            questionTitle="time"
            onSelect={this.onSelect}
            list={["Time", "Real Quick", "Some time to kill", "Nowhere to be"]}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            list={["Breakfast", "Yes", "No"]}
            questionTitle="breakfast"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            list={["Vegetarian Options", "Yes", "No"]}
            questionTitle="vegetarianOptions"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2">
          <div className="btn" onClick={this.getResults}>
            Show Results
          </div>
        </div>
      </div>
    );
  }
}

class Drink extends React.Component {
  render() {
    let drinkData = data.filter(item => {
      return ["Drinkery", "Gastropub"].includes(item.group);
    });

    drinkData = _.orderBy(
      drinkData,
      ["topPersonalRecommendation", "asc"],
      ["caitsFavoriteBeer", "asc"],
      ["evansFavoriteBeer", "asc"]
    );

    this.props.resultsReady(drinkData);
    return null;
  }
}

class Explore extends React.Component {
  render() {
    const exploreData = data.filter(item => {
      return ["Beautifulness", "Fun", "Hiking"].includes(item.group);
    });
    this.props.resultsReady(exploreData);
    return null;
  }
}

class Shop extends React.Component {
  render() {
    const shopData = data.filter(item => {
      return ["Shopping"].includes(item.group);
    });
    this.props.resultsReady(shopData);
    return null;
  }
}

export { One, Question };
