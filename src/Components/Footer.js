import React, { Component } from "react";
import Fade from "react-reveal";
import { Link } from "react-scroll";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns body-text">
              <ul className="copyright">
                <li>&copy; Copyright 2024 Team KERBY</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <Link
              className="link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              <i className="icon-up-open"></i>
            </Link>

            {/* <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a> */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
