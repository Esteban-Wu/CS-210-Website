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
            </div>
            <div class="row" className="twelve columns collapsed body-text center-text" style={{ marginBottom: "200px" }}>
              <div className="one columns"/>
              <div className="two columns center-text">
                <div className="profile-pic-container">
                  <img src="images/katherine.jpeg" alt="Profile pic" className="profile-pic" />
                </div>
                <p>Katherine C. '24</p>
              </div>
              <div className="two columns center-text">
                <div className="profile-pic-container">
                  <img src="images/esteban.jpeg" alt="Profile pic" className="profile-pic" />
                </div>
                <p>Esteban W. '24</p>
              </div>
              <div className="two columns center-text">
                <div className="profile-pic-container">
                  <img src="images/ryan.jpg" alt="Profile pic" className="profile-pic" />
                </div>
                <p>Ryan K. '24</p>
              </div>
              <div className="two columns center-text">
                <div className="profile-pic-container">
                  <img src="images/will.jpeg" alt="Profile pic" className="profile-pic" />
                </div>
                <p>Will F. '25</p>
              </div>
              <div className="two columns center-text">
                <div className="profile-pic-container">
                  <img src="images/yannie.png" alt="Profile pic" className="profile-pic" />
                </div>
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
