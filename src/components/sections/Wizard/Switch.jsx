import React from "react";

class Switch extends React.Component {
  handleChange = e => {
    this.props.switchToggled(e.target.checked);
  };

  render() {
    return (
      <div className="switch">
        <label>
          QUIZ
          <input type="checkbox" onChange={this.handleChange} />
          <span className="lever"></span>
          MAP
        </label>
      </div>
    );
  }
}

export default Switch;
