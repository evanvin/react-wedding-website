import React from "react";
import Nav from "./sections/Nav";
import Home from "./sections/Home";
import Wedding from "./sections/Wedding";
import Accomm from "./sections/Accomm";
import Story from "./sections/Story";
import Registry from "./sections/Registry";
import Gallery from "./sections/Gallery";
import Things from "./sections/Things";
import Footer from "./sections/Footer";

import PasswordPage from "./PasswordPage";

import { checkCookie } from "./password";

class Site extends React.Component {
  handleSuccess = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <React.Fragment>
        {checkCookie() ? (
          <React.Fragment>
            <div className="testtest">
              <Nav />
              <div className="main-container">
                <Home />
                <Wedding />
                <Accomm />
                <Story />
                <Registry />
                <Gallery />
                <Things />
                <Footer />
              </div>
            </div>
          </React.Fragment>
        ) : (
          <PasswordPage handleSuccess={this.handleSuccess} />
        )}
      </React.Fragment>
    );
  }
}

export default Site;
