import React from "react";
import Nav from "./sections/Nav";
import Home from "./sections/Home";
import Clock from "./sections/Clock";
import Wedding from "./sections/Wedding";
import Accomm from "./sections/Accomm";
import Story from "./sections/Story";
import Registry from "./sections/Registry";
import Gallery from "./sections/Gallery";
import Things from "./sections/Things";
import Footer from "./sections/Footer";
import Confetti from "react-confetti";
import Covid from "./sections/Covid";

import PasswordPage from "./PasswordPage";

import { checkCookie, checkCovidCookie } from "./password";

class Site extends React.Component {
  state = { fullHeight: 0, party: false, showCovid: !checkCovidCookie() };
  website = React.createRef();

  handleSuccess = () => {
    this.forceUpdate();
  };

  componentDidMount = () => {
    const that = this;
    setTimeout(function() {
      that.setState({ fullHeight: that.website.current.offsetHeight });
    }, 1000);
  };

  isPartyTime = () => {
    this.setState({ party: true });
  };

  covid = (flag) =>{
    console.log(flag)
    console.log(this.state.showCovid)
    this.setState({showCovid: flag})
  }

  render() {
    return (
      <React.Fragment>
        {checkCookie() ? (
          <React.Fragment>
            {this.state.party ? (
              <Confetti
                numberOfPieces={1500}
                gravity={0.08}
                tweenDuration={100}
                width={window.innerWidth}
                height={this.state.fullHeight}
              />
            ) : null}
            <div id="website-content" ref={this.website}>
              <Nav covid={this.covid}/>
              <div className="main-container">
                <Home />
                {!this.state.party ? (
                  <Clock isPartyTime={this.isPartyTime} />
                ) : null}
                {this.state.showCovid && <Covid covid={this.covid} showCovid={this.state.showCovid}/>}
                <Wedding />
                <Accomm />
                <Registry />
                <Story />
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
