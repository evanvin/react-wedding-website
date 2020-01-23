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
      <Dropdown
        key="question-one-dropdown"
        list={list}
        onSelect={onSelect}
        questionTitle={"questionOne"}
      />
    );
  }
}

class Question extends React.Component {
  render() {
    const { choice, resultsReady, reset } = this.props;
    switch (choice) {
      case "Eat":
        return <Eat key="eat" resultsReady={resultsReady} reset={reset} />;
      case "Drink":
        return <Drink key="drink" resultsReady={resultsReady} />;
      case "Explore":
        return <Explore key="explore" resultsReady={resultsReady} />;
      case "Shop":
        return <Shop key="shop" resultsReady={resultsReady} />;
      default:
        break;
    }
    return null;
  }
}

class Eat extends React.Component {
  state = { choices: {}, breakfast: null };

  getResults = () => {
    const { choices, breakfast } = this.state;
    let categories = ["Gastropub", "Food"];
    if (breakfast == null) {
      categories.push("Breakfast");
    } else if (breakfast) {
      categories = ["Breakfast"];
    }

    let eatData = data.filter(item => {
      return categories.includes(item.group);
    });
    eatData = _.filter(eatData, choices);
    this.props.resultsReady(eatData);
  };

  onSelect = (choice, questionTitle, idx) => {
    let { choices } = this.state;

    if (idx == 0) {
      if (questionTitle == "breakfast") {
        this.setState({ breakfast: null });
      } else {
        delete choices[questionTitle];
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
        choices = Object.assign({ [questionTitle]: choice }, choices);
      } else {
        this.setState({ breakfast: choice == "Yes" });
      }
    }
    this.setState({ choices });
  };

  render() {
    return (
      <div className="eat-section">
        <div className="col-md-6 col-xs-12">
          <Dropdown
            key="portionSize"
            list={["Hunger Level", "I could eat", "Pretty hungry", "Hangry"]}
            questionTitle="portionSize"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            key="goodSelectionOfLibations"
            list={["Drink Variety", "The Basics", "All the Options"]}
            questionTitle="goodSelectionOfLibations"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            key="cost"
            list={["Cost", "$", "$$", "$$$"]}
            questionTitle="cost"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            key="time"
            list={["Time", "Real Quick", "Some time to kill", "Nowhere to be"]}
            questionTitle="time"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            key="breakfast"
            list={["Breakfast", "Yes", "No"]}
            questionTitle="breakfast"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <Dropdown
            key="vegetarianOptions"
            list={["Vegetarian", "Yes", "No"]}
            questionTitle="vegetarianOptions"
            onSelect={this.onSelect}
          />
        </div>
        <div className="col-md-4 col-md-offset-2 col-xs-12">
          <div className="btn" onClick={this.getResults}>
            Show Results
          </div>
        </div>
        <div className="col-md-4 col-xs-12">
          <div className="btn" onClick={this.props.reset}>
            Reset
          </div>
        </div>
      </div>
    );
  }
}

class Drink extends React.Component {
  componentDidMount() {
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
  }
  render() {
    return null;
  }
}

class Explore extends React.Component {
  componentDidMount() {
    const exploreData = data.filter(item => {
      return ["Beautifulness", "Fun", "Hiking"].includes(item.group);
    });
    this.props.resultsReady(exploreData);
  }
  render() {
    return null;
  }
}

class Shop extends React.Component {
  componentDidMount() {
    const shopData = data.filter(item => {
      return ["Shopping"].includes(item.group);
    });
    this.props.resultsReady(shopData);
  }
  render() {
    return null;
  }
}

export { One, Question };
