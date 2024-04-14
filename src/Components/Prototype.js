import React, { Component } from "react";
import Slide from "react-reveal";

class Prototype extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    return (
      <section id="prototype">
        <Slide left duration={1300}>
          <div className="row">
            <div className="seven columns main-col" style={{ height: '220px' }}>
              <div className="floating-image-container">
                <img
                  className="floating-image"
                  src="images/visual.png"
                  alt="Visual"
                />
              </div>
            </div>
            <div className="five columns body-text">
              <h2 style={{ fontFamily: 'Marrion', fontSize: 32 }}>Prototype</h2>
              <p>Try out our most recent prototype of the Mercedes-Benz AI Palette on your tablet.</p>
              <row>
                <ul className="social">
                  <a href={"#"} className="button btn primary-btn">
                  <span className="button-text">Download</span>
                  </a>
                  <a href={"#"} className="button btn secondary-btn">
                  <span className="button-text">GitHub</span>
                  </a>
                </ul>
              </row>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Prototype;
