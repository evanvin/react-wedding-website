import React from "react";
import FontAwesome from "react-fontawesome";
import { data } from "../things.js";

class Wizard extends React.Component {
  state = { question: 1, q1Choice: null };

  onQuestionOnePick = choice => {
    console.log(choice);
  };

  render() {
    return (
      <div className="wizard">
        <a href="#rsvp" className="btn btn-white" target="default">
          RSVP Here
        </a>
        {/* <select>
          <option>Test</option>
        </select> */}
        <Questions />
      </div>
    );
  }
}

export default Wizard;

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      fruit: [
        {
          id: 0,
          title: "Apple",
          selected: false,
          key: "fruit"
        },
        {
          id: 1,
          title: "Orange",
          selected: false,
          key: "fruit"
        },
        {
          id: 2,
          title: "Grape",
          selected: false,
          key: "fruit"
        },
        {
          id: 3,
          title: "Pomegranate",
          selected: false,
          key: "fruit"
        },
        {
          id: 4,
          title: "Strawberry",
          selected: false,
          key: "fruit"
        }
      ]
    };
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp
    });
  };

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach(item => (item.selected = false));
    temp[id].selected = true;
    this.setState({
      [key]: temp
    });
  };

  render() {
    return (
      <Dropdown
        title="What are you looking for?"
        list={this.state.fruit}
        resetThenSet={this.resetThenSet}
      />
    );
  }
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    };
    this.close = this.close.bind(this);
  }

  componentDidUpdate() {
    const { listOpen } = this.state;
    setTimeout(() => {
      if (listOpen) {
        window.addEventListener("click", this.close);
      } else {
        window.removeEventListener("click", this.close);
      }
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.close);
  }

  close(timeOut) {
    this.setState({
      listOpen: false
    });
  }

  selectItem(title, id, stateKey) {
    this.setState(
      {
        headerTitle: title,
        listOpen: false
      },
      this.props.resetThenSet(id, stateKey)
    );
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen ? (
            <FontAwesome name="angle-up" size="2x" />
          ) : (
            <FontAwesome name="angle-down" size="2x" />
          )}
        </div>
        {listOpen && (
          <ul className="dd-list" onClick={e => e.stopPropagation()}>
            {list.map(item => (
              <li
                className="dd-list-item"
                key={item.id}
                onClick={() => this.selectItem(item.title, item.id, item.key)}
              >
                {item.title} {item.selected && <FontAwesome name="check" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
