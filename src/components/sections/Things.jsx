import React from "react";

class Things extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a id="things" className="in-page-link"></a>

        <section className="rsvp rsvp-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1>Things to Do in Burlington, Vermont</h1>
                <p>
                  We love Vermont and want our guests to fully enjoy everything
                  that it has to offer. Listed are a few of our
                  <br />
                  favorites, Cait's old haunts, and some local staples. Thank
                  you for coming to celebrate our big day with us!
                </p>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-sm-12 text-center">
                Add map and a food selector quiz HERE. For the map, add best
                creamie spots, cait's college haunts, best bagel places, hiking
                places
                <p>
                  <iframe
                    src="https://batchgeo.com/map/5af464342bdfa0cb762510d65b38bc4f"
                    style={{ frameBorder: "0", width: "100%", height: "750px" }}
                    // frameborder="0"
                  ></iframe>
                </p>
              </div>
            </div> */}

            <div className="row">
              <div className="col-sm-12 text-center">
                Stay tuned: More information on things to do while in Burlington
                soon to come.
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Things;
