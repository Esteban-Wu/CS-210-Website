import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from "react-scroll";
import David from "./David.mp4";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <header id="home">

        <nav className="navbar" id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>

          <ul id="nav" style={{ backgroundColor: 'black', fontFamily: 'Marion' }}>
            <li className="current">
              <Link
                className="link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
              >
                Mercedes-Benz AI Palette
              </Link>
            </li>

            <li>
              <Link
                className="link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="link"
                activeClass="active"
                to="prototype"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
              >
                Prototype
              </Link>
            </li>

            <li>
              <Link
                className="link"
                activeClass="active"
                to="process"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
              >
                Process
              </Link>
            </li>

            <li>
              <Link
                className="link"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
              >
                Team
              </Link>
            </li>
          </ul>
        </nav>


      <div className="banner">
      <video className="fullscreen-video" controls autoPlay>
        <source src={David} type="video/mp4" />
      </video>
      </div>
      <h1>Mercedes-Benz AI Palette</h1>
      <h3>Conversational AI Personas</h3>
      </header>
      

    );
  }
}

export default Header;
