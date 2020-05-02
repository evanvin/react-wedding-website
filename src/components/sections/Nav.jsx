import React from "react";
import { Link } from "react-scroll";

class Nav extends React.Component {
  state = { scrolled: "", mobile: "" };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ scrolled: window.pageYOffset > 0 ? "scrolled" : "" });
    });
  }

  toggleMobile = () => {
    this.setState({ mobile: this.state.mobile === "" ? "nav-open" : "" });
  };

  createLink = (to, label) => {
    return (
      <li>
        <Link
          activeClass="active"
          to={to}
          spy={true}
          smooth={true}
          duration={800}
          onClick={this.toggleMobile}
        >
          {label}
        </Link>
      </li>
    );
  };

  render() {
    const { scrolled, mobile } = this.state;

    return (
      <div className="nav-container">
        <nav
          className={`nav nav-1 transparent light fixed ${scrolled} ${mobile}`}
        >
          <a href="#" className="logo">
            <span>Caitlyn &amp; Evan</span>
          </a>
          <ul className="menu">
            {this.createLink("home", "Home")}
            {this.createLink("wedding", "Wedding")}
            {this.createLink("accomm", "Travel & Accomm")}
            {this.createLink("registry", "Registry")}
            {this.createLink("story", "Story")}
            {this.createLink("things", "Things To Do")}
            <li>
              <a href="#" onClick={e=> this.props.covid(true)}>COVID</a>
            </li>
          </ul>
          <div className="mobile-toggle" onClick={this.toggleMobile}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
