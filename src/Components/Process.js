import React, { Component } from "react";
import Fade from "react-reveal";

class Process extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="process" className="section-background process-background" style={{backgroundImage: `images/car_interior.png`}}>
        <Fade left duration={1000} distance="40px">
          <div className="row" style={{ marginBottom: "40px" }}>
            <div className="twelve columns collapsed body-text center-text">
              <h2 style={{ fontFamily: 'Marrion', fontSize: 32 }}>Process</h2>
              <p>Here are the steps we took in our design and development process.</p>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "40px" }}>
            <div className="three columns center-text">
              <img src="images/icon.png" alt="Icon"/>
              <p className="bold-body-text">Needfinding</p>
              <p className="body-text">Insert a brief description.</p>
              <a href={"#"} className="button btn primary-btn">
                <span className="button-text">Link</span>
              </a>
            </div>
            <div className="three columns center-text">
              <img src="images/icon.png" alt="Icon"/>
              <p className="bold-body-text">PRD</p>
              <p className="body-text">Insert a brief description.</p>
              <a href={"#"} className="button btn primary-btn">
                <span className="button-text">Link</span>
              </a>
            </div>          
            <div className="three columns center-text">
              <img src="images/icon.png" alt="Icon"/>
              <p className="bold-body-text">Car Monitor App</p>
              <p className="body-text">Insert a brief description.</p>
              <a href={"#"} className="button btn primary-btn">
                <span className="button-text">Link</span>
              </a>
            </div>          
            <div className="three columns center-text">
              <img src="images/icon.png" alt="Icon"/>
              <p className="bold-body-text">LLMs</p>
              <p className="body-text">Insert a brief description.</p>
              <a href={"#"} className="button btn primary-btn">
                <span className="button-text">Link</span>
              </a>
            </div> 
          </div>
          <div className="row">
            <div className="three columns center-text">
              <img src="images/icon.png" alt="Icon"/>
              <p className="bold-body-text">MiniCar</p>
              <p className="body-text">Insert a brief description.</p>
              <a href={"#"} className="button btn primary-btn">
                <span className="button-text">Link</span>
              </a>
            </div>
            <div className="three columns center-text">
              <img src="images/icon.png" alt="Icon"/>
              <p className="bold-body-text">Computer Vision</p>
              <p className="body-text">Insert a brief description.</p>
              <a href={"#"} className="button btn primary-btn">
                <span className="button-text">Link</span>
              </a>
            </div>          
            <div className="three columns center-text">
              <img src="images/icon.png" alt="Icon"/>
              <p className="bold-body-text">Demo Video</p>
              <p className="body-text">Insert a brief description.</p>
              <a href={"#"} className="button btn primary-btn">
                <span className="button-text">Link</span>
              </a>
            </div>          
            <div className="three columns center-text">
              <img src="images/icon.png" alt="Icon"/>
              <p className="bold-body-text">Poster & Pitch</p>
              <p className="body-text">Insert a brief description.</p>
              <a href={"#"} className="button btn primary-btn">
                <span className="button-text">Link</span>
              </a>
            </div> 
          </div>
        
        </Fade>
      </section>
    );
  }
}

export default Process;
