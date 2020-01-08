import React from "react";
import Countdown from "react-countdown-now";

class Clock extends React.Component {
  renderer = ({ days, hours, minutes, seconds }) => {
    // Render a countdown
    return (
      <div className="row">
        <div className="col-sm-2 col-sm-offset-2">
          <div className="clock-item">
            <h1>{days}</h1>
            days
          </div>
        </div>
        <div className="col-sm-2">
          <div className="clock-item">
            <h1>{hours}</h1>
            hours
          </div>
        </div>
        <div className="col-sm-2 ">
          <div className="clock-item">
            <h1>{minutes}</h1>
            minutes
          </div>
        </div>
        <div className="col-sm-2 ">
          <div className="clock-item">
            <h1>{seconds}</h1>
            seconds
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <section className="clock details details-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <Countdown
                date={"8/8/2020"}
                // date={Date.now() + 5000}
                renderer={this.renderer}
                onComplete={this.props.isPartyTime}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Clock;
