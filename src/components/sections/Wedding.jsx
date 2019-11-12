import React from "react";

class Wedding extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a id="wedding" className="in-page-link"></a>

        <section className="details details-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>Ceremony &amp; Reception</h2>
                <h6>
                  Join us for our intimate ceremony
                  <br /> then get ready to party.
                </h6>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-md-offset-2 col-sm-6 text-center feature">
                <h6>Ceremony</h6>
                <h4>Montrose Vineyard</h4>
                <p>
                  2:30pm - 3:30pm
                  <br />
                  65 Chilvers Avenue
                  <br />
                  Flinders Ranges, Vic
                </p>
                <a href="#rsvp" className="btn inner-link" target="default">
                  RSVP Here
                </a>
              </div>

              <div className="col-md-4 col-sm-6 text-center feature">
                <h6>Reception</h6>
                <h4>Waterworks</h4>
                <p>
                  4:30pm - Late
                  <br />
                  20 Winooski Falls Way
                  <br />
                  Winooski, VT
                </p>
                <a href="#rsvp" className="btn inner-link" target="default">
                  RSVP Here
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Wedding;
