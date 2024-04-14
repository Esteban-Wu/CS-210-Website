import React, { Component } from "react";
import { Fade } from "react-reveal";

class Team extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="team">
        <Fade bottom duration={1000}>
          <div className="row">
            <div className="twelve columns collapsed body-text center-text">
              <h2 style={{ fontFamily: 'Marrion', fontSize: 32 }}>Team</h2>
              <p>cs210mercedes@gmail.com</p>
            </div>
            <div class="row" className="twelve columns collapsed body-text center-text" style={{ marginBottom: "200px" }}>
              <div className="one columns"/>
              <div className="two columns">
                <img src="images/profile_pic.png" alt="Profile pic"/>
                <p>Katherine C. '24</p>
              </div>
              <div className="two columns">
                <img src="images/profile_pic.png" alt="Profile pic"/>
                <p>Esteban W. '24</p>
              </div>
              <div className="two columns">
                <img src="images/profile_pic.png" alt="Profile pic"/>
                <p>Ryan K. '24</p>
              </div>
              <div className="two columns">
                <img src="images/profile_pic.png" alt="Profile pic"/>
                <p>Will F. '25</p>
              </div>
              <div className="two columns">
                <img src="images/profile_pic.png" alt="Profile pic"/>
                <p>Yannie T. '24</p>
              </div>
              <div className="one columns"/>
            </div>
          </div>
        </Fade>        
      </section>
    );
  }
}

export default Team;
