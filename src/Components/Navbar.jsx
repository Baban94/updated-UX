import React, { Component } from "react";
//import { Link } from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../logo.png";

class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="nav" id="navbar">
        <img
          src={logo}
          className="nav-logo"
          alt="Logo"
          onClick={this.scrollToTop}
        />
        <div className="nav-content">
          <ul>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="GlobalWarming"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Global Warming
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="GlacierEmission"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Glacier Size
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="CO2Emission"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                CO2Emission
              </Link>
            </li>

            <li className="nav-item2">
              <Link
                activeClass="active"
                to="Quiz-section2"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Quiz
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
