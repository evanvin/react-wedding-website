import React from "react";
import {
  checkPassword,
  generateCookie,
  createValidCookieString
} from "./password";

class PasswordPage extends React.Component {
  state = { password: "", shake: false };

  onKeyPress = e => {
    if (e.which === 13) {
      this.handleClick();
    }
  };

  handleChange = e => {
    this.setState({ password: e.target.value });
  };

  handleClick = () => {
    const success = checkPassword(this.state.password);

    if (success) {
      // Create cookie
      generateCookie();

      // Force re-render of parent
      this.props.handleSuccess();
    } else {
      // Clear password field
      this.notify();
      this.setState({ password: "" });
    }
  };

  notify = () => {
    this.setState({
      shake: true
    });
    setTimeout(() => {
      this.setState({
        shake: false
      });
    }, 1000);
  };

  render() {
    const animate = this.state.shake ? "animated shake error" : "";

    return (
      <React.Fragment>
        <div className="password-page">
          <div className=" container">
            <div className="row">
              <div className="col-sm-12 text-center form-section">
                <input
                  type="password"
                  name="your-name-names"
                  className={animate}
                  placeholder="Password"
                  onChange={this.handleChange}
                  onKeyPress={this.onKeyPress}
                  value={this.state.password}
                />
              </div>
              <div className="col-sm-12 text-center">
                <button onClick={this.handleClick}>ENTER</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PasswordPage;
