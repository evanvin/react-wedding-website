import React from "react";

import r1 from "../../assets/img/r1.png";
import r2 from "../../assets/img/r2.png";
import r3 from "../../assets/img/r3.png";

class Registry extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a id="registry" className="in-page-link"></a>

        <section className="registry registry-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>Registry</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-6 text-center">
                <a href="https://www.crateandbarrel.com/gift-registry/evan-vinciguerra-and-caitlyn-bishop/r6091643" target="_blank">
                  <img alt="Crate & Barrel" src={r1} />
                </a>
              </div>

              <div className="col-md-4 col-sm-6 text-center">
                <a href="https://www.amazon.com/wedding/caitlyn-bishop-evan-vinciguerra-winooski-august-2020/registry/XWSQQCGFA5MR" target="_blank">
                  <img alt="Amazon" src={r2} />
                </a>
              </div>

              <div className="col-md-4 col-sm-6 text-center">
                <a href="https://www.cb2.com/gift-registry/caitlyn-bishop-and-evan-vinciguerra/r6079091" target="_blank">
                  <img alt="CB2" src={r3} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Registry;
