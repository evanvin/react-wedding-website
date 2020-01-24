import React from "react";
import Carousel from "nuka-carousel";
import FontAwesome from "react-fontawesome";
import ReactTooltip from "react-tooltip";
import top from "Images/best.png";

const FormattedResults = props => {
  let getRecommendations = (p, idx) => {
    let r = [];

    if (p.hasOwnProperty("caitsFavoriteBeer")) {
      r.push(
        <div key={`${p.name}-cait-fav-${idx}`} className="col-xs-12 fav-beer">
          {p.caitsFavoriteBeer}
        </div>
      );
    }

    if (p.hasOwnProperty("evansFavoriteBeer")) {
      r.push(
        <div key={`${p.name}-evan-fav-${idx}`} className="col-xs-12 fav-beer">
          {p.evansFavoriteBeer}
        </div>
      );
    }

    return r;
  };

  if (Object.keys(props.results).length < 1) {
    return <h2>No Results</h2>;
  }
  return (
    <Carousel
      key="things-carousel"
      autoplay={true}
      wrapAround={true}
      autoplayInterval={10000}
    >
      {props.results.map((p, idx) => {
        return (
          <div key={`${p.name}-info-${idx}`}>
            <div className="col-lg-12">
              <figure className="things_figure">
                <div
                  className="media"
                  style={{
                    backgroundImage: `url(${p.imageUrl})`
                  }}
                ></div>
                <figcaption className="things_caption">
                  <div className="row">
                    <div className="col-xs-12">
                      <h3>
                        {p.name}
                        {p.hasOwnProperty("note") && (
                          <React.Fragment>
                            &nbsp;
                            <FontAwesome
                              name="info-circle"
                              data-tip={p.note}
                              data-multiline={true}
                            />
                            <ReactTooltip
                              place="bottom"
                              type="dark"
                              effect="solid"
                            />
                          </React.Fragment>
                        )}
                      </h3>
                    </div>

                    <div className="col-xs-12">
                      {p.hasOwnProperty("topPersonalRecommendation") && (
                        <img title="Top Recommendation" src={top} height={35} />
                      )}
                    </div>
                    <br />

                    {(p.hasOwnProperty("caitsFavoriteBeer") ||
                      p.hasOwnProperty("evansFavoriteBeer")) && (
                      <React.Fragment>
                        <div className="col-xs-12">
                          <hr className="hr-text" data-content="FAVS" />
                        </div>
                        {getRecommendations(p, idx)}
                      </React.Fragment>
                    )}

                    <br />
                    <div className="col-xs-6">
                      <a
                        target="_blank"
                        href={`http://maps.google.com/?q=${p.address}, ${p.city}, ${p.state} ${p.zipcode}`}
                      >
                        <FontAwesome
                          key={`${p.name}-location-${idx}`}
                          name="map-marker"
                        />
                      </a>
                    </div>

                    {p.hasOwnProperty("menutapList") && (
                      <div className="col-xs-6">
                        <a target="_blank" href={p.menutapList}>
                          <FontAwesome
                            key={`${p.name}-menu-${idx}`}
                            name="file-text-o"
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
export default FormattedResults;
