import React from "react";
import FontAwesome from "react-fontawesome";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      selected: 0
    };
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

  close = timeOut => {
    this.setState({
      listOpen: false
    });
  };

  selectItem(choice, idx) {
    const { onSelect, questionTitle } = this.props;
    this.setState({
      selected: idx,
      listOpen: false
    });
    onSelect(choice, questionTitle, idx);
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const { list, questionTitle } = this.props;
    const { listOpen, selected } = this.state;
    return (
      <div className="dd-wrapper" key={`${questionTitle}-dropdown`}>
        <div className="dd-header" onClick={() => this.toggleList()}>
          {selected != 0 && <div className="floating-label">{list[0]}</div>}
          <div className="dd-header-title">{list[selected]}</div>
          {listOpen ? (
            <FontAwesome name="angle-up" size="2x" />
          ) : (
            <FontAwesome name="angle-down" size="2x" />
          )}
        </div>
        {listOpen && (
          <ul className="dd-list" onClick={e => e.stopPropagation()}>
            {list.map((item, idx) => (
              <li
                className="dd-list-item"
                key={`${questionTitle}-${item}-idx`}
                onClick={() => this.selectItem(item, idx)}
              >
                {item} {selected == idx && <FontAwesome name="check" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
