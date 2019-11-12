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

class Site extends React.Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Site;
