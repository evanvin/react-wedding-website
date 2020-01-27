import React from "react";
import Wizard from "./Wizard/Wizard";

class Things extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a id="things" className="in-page-link"></a>

        <section className="rsvp rsvp-1 things">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1>Things to Do in Burlington, Vermont</h1>
                <p>
                  We love Vermont and want our guests to fully enjoy everything
                  that it has to offer. Listed are a few of our <br />
                  favorites, Cait's old haunts, and some local staples. Thank
                  you for coming to celebrate our big day with us!
                </p>
              </div>
            </div>

            <br />
            <Wizard />
            <br />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Things;
