import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from "react-scroll";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav className="navbar" id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
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

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Mercedes-Benz AI Palette</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <Link
            className="link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
          >
            <i className="icon-down-circle"></i>
          </Link>
        </p>
      </header>
    );
  }
}

export default Header;
