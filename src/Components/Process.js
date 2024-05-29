import React, { Component } from "react";
import Fade from "react-reveal";

class Process extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="process" className="section-background process-background">
        <Fade left duration={1000} distance="40px">
          <div className="row" style={{ marginBottom: "30px" }}>
            <div className="twelve columns collapsed body-text center-text">
              <h2 style={{ fontFamily: 'Marrion', fontSize: 32 }}>Process</h2>
              <p>Here are the steps we took in our design and development process.</p>
            </div>
          </div>

          <div className="row" style={{ marginBottom: "60px" }}>
            <div className="three columns center-text" style={{ marginTop: "30px" }}>
              <div className="process-icon">
                <img src="images/icon_rocket.svg" alt="Icon"/>
              </div>
              <p className="bold-body-text">Product Proposal</p>
              <p className="body-text">We wrote a product requirements document (PRD) and presented it to our Mercedes liaisons.</p>
              <a href={"documents/prd.pdf"} className="custom-button btn primary-btn">
                <span className="button-text">Proposal (PDF)</span>
              </a>
            </div>
            <div className="three columns center-text" style={{ marginTop: "30px" }}>
              <div className="process-icon">
                <img src="images/icon_announce.svg" alt="Icon"/>
              </div>
              <p className="bold-body-text">HQ Presentation</p>
              <p className="body-text">We traveled to the Mercedes-Benz HQ in Germany to present our idea and initial prototype.</p>
              <a href={"documents/germany_presentation.pdf"} className="custom-button btn primary-btn">
                <span className="button-text">Slides (PDF)</span>
              </a>
            </div>          
            <div className="three columns center-text" style={{ marginTop: "30px" }}>
              <div className="process-icon">
                <img src="images/icon_charts.svg" alt="Icon"/>
              </div>
              <p className="bold-body-text">System Diagram</p>
              <p className="body-text">We created a system diagram to illustrate how our various components interact with each other.</p>
              <a href={"images/diagram.png"} className="custom-button btn primary-btn">
                <span className="button-text">Diagram (PNG)</span>
              </a>
            </div>          
            <div className="three columns center-text" style={{ marginTop: "30px" }}>
              <div className="process-icon">
                <img src="images/icon_coins.svg" alt="Icon"/>
              </div>
              <p className="bold-body-text">Contract of Deliverables</p>
              <p className="body-text">We identified our key performance indicators and listed what we will deliver by the end of Spring quarter.</p>
              <a href={"documents/cod.pdf"} className="custom-button btn primary-btn">
                <span className="button-text">Deliverables (PDF)</span>
              </a>
            </div> 
          </div>
          <div className="row process-icon">
            <div className="three columns center-text" style={{ marginTop: "30px" }}>
              <div className="process-icon">
                <img src="images/icon_person.svg" alt="Icon"/>
              </div>
              <p className="bold-body-text">Real Customer Profile</p>
              <p className="body-text">We connected with two people who are our target customers and created profiles for them.</p>
              <a href={"https://www.canva.com/design/DAGDUmHMKT4/vKJZDT8G63vg2QXlM3Hb_g/view?utm_content=DAGDUmHMKT4&utm_campaign=designshare&utm_medium=link&utm_source=editor"} className="custom-button btn primary-btn">
                <span className="button-text">Profile (Canva)</span>
              </a>
            </div>
            <div className="three columns center-text" style={{ marginTop: "30px" }}>
              <div className="process-icon">
                <img src="images/icon_rocket2.svg" alt="Icon"/>
              </div>
              <p className="bold-body-text">MVP</p>
              <p className="body-text">We built our minimum viable prototype using Android, Python, Firebase, Arduino, and a minicar.</p>
              <a href={"#"} className="custom-button btn secondary-btn">
                <span className="button-text">Coming Soon</span>
              </a>
            </div>          
            <div className="three columns center-text" style={{ marginTop: "30px" }}>
              <div className="process-icon">
                <img src="images/icon_support.svg" alt="Icon"/>
              </div>
              <p className="bold-body-text">Product Launch</p>
              <p className="body-text">We launched our product to external users, measured our KPIs, and improved our MVP based on feedback.</p>
              <a href={"#"} className="custom-button btn secondary-btn">
                <span className="button-text">Coming Soon</span>
              </a>
            </div>          
            <div className="three columns center-text" style={{ marginTop: "30px" }}>
              <div className="process-icon">
                <img src="images/icon_announce2.svg" alt="Icon"/>
              </div>
              <p className="bold-body-text">Demo Video</p>
              <p className="body-text">Watch this video for a concise overview of the Mercedes-Benz AI Palette and to witness it in action.</p>
              <a href={"#"} className="custom-button btn secondary-btn">
                <span className="button-text">Coming Soon</span>
              </a>
            </div> 
          </div>
        
        </Fade>
      </section>
    );
  }
}

export default Process;
