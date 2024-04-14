import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="seven columns main-col body-text">
              <h2 style={{ fontFamily: 'Marrion', fontSize: 32 }}>About</h2>
              <p>The Mercedes-Benz AI Palette is a set of <span className="bold-body-text red">conversational AI personas</span> that a 
                driver can interact with. We crafted three personas — Football Commentator, Old Sport, and Art & Nature — to mimic the 
                speech and personality of renowned figures like Peter Drury, Frank Sinatra, and David Attenborough. Powered by GenAI, 
                these personas engage in <span className="bold-body-text red">dialogue</span>, react to <span className="bold-body-text red">events</span> such 
                as turns and accelerations, and offer <span className="bold-body-text red">persona-specific interactions</span>.
              </p>
            </div>
            <div className="five columns" style={{ height: '220px' }}>
              <div className="floating-image-container">
                <img
                  className="floating-image"
                  src="images/visual.png"
                  alt="Visual"
                />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
