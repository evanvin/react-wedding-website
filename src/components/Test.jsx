import React from "react";

class Test extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="nav nav-1 transparent light fixed scrolled">
          <a href="index.html" className="logo">
            <span>Evan &amp; Caitlyn</span>
          </a>
          <ul className="menu">
            <li>
              <a href="#home" className="inner-link" target="default">
                Home
              </a>
            </li>
            <li>
              <a href="#wedding" className="inner-link" target="default">
                wedding
              </a>
            </li>
            <li>
              <a href="#accomm" className="inner-link" target="default">
                travel & accomm
              </a>
            </li>
            <li>
              <a href="#story" className="inner-link" target="default">
                story
              </a>
            </li>
            <li>
              <a href="#registry" className="inner-link" target="default">
                registry
              </a>
            </li>
            <li>
              <a href="#things" className="inner-link" target="default">
                things to do
              </a>
            </li>
          </ul>
          <div className="mobile-toggle">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Test;
