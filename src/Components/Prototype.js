import React, { Component } from "react";
import Slide from "react-reveal";
import David from "./David.mp4";

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
      <section id="prototype" className="section-background prototype-background">
        <Slide left duration={1300}>
          <div className="row">
            <div className="seven columns main-col" style={{ height: '320px' }}>
              <div className="floating-image-container">
                <img
                  className="floating-image"
                  src="images/about_visual2.png"
                  alt="Visual"
                />
              </div>
            </div>
            <div className="five columns body-text">
              <h2 style={{ fontFamily: 'Marrion', fontSize: 32, marginBottom: 40 }}>Prototype</h2>
              <p>Try out our most recent prototype of the Mercedes-Benz AI Palette on your tablet.</p>
              <row>
                <ul className="social">
                  <a href={"https://drive.google.com/file/d/1D1imY8pfHdm_5SE7988-cvykN6elIAxN/view?usp=sharing"} className="button btn github-btn">
                    <i className="fa fa-download"></i><span className="button-text">Download</span>
                  </a>
                  <a href={"https://github.com/cs210/Mercedes1-2024-App"} className="button btn project-btn">
                    <i className="fa fa-github"></i><span className="button-text">GitHub</span>
                  </a>
                </ul>
              </row>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns" style={{ height: '320px', marginTop: '80px' }}>
              <p>Watch our use case simulation video to see the Mercedes car drive through a lush green forest,
                narrated by David Attenborough. This video showcases the immersive capabilities and user experience 
                enhancements made possible by our AI-driven personas.
              </p>
              <div style={{ width: '100%' }}>
                <video controls loop playsInline preload="metadata" style={{ width: '100%' }}>
                  <source src={David+"#t=0.1"} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Prototype;
