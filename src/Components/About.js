import React, { Component, useState } from "react";
import Fade from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  render() {
    if (!this.props.data) return null;

    // Settings for the carousel
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnDotsHover: true,
      customPaging: function (i) {
        return (
          <a>
            <img src={this.state.slideIndex === i ? `images/dot_filled.png` : `images/dot_empty.png`} />
          </a>
        );
      }.bind(this), // Binding to access the state
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };

    return (
      <section id="about" className="about-background section-background">
        <Fade duration={1000}>
          <div className="row">
              <div className="twelve columns main-col body-text">
                <h2 style={{ fontFamily: 'Marrion', fontSize: 32 }}>About</h2>
                <Slider {...settings} style={{paddingTop: 60, paddingBottom: 100}}>

                  <div className="row">
                    <div className="seven columns main-col body-text">
                      <p>The Mercedes-Benz AI Palette is a set of <span className="bold-body-text red">conversational AI personas</span> that a 
                        driver can interact with. We crafted three personas — Football Commentator, Old Sport, and Art & Nature — to mimic the 
                        speech and personality of renowned figures like Peter Drury, Frank Sinatra, and David Attenborough. Powered by GenAI, 
                        these personas engage in <span className="bold-body-text red">dialogue</span>, react to <span className="bold-body-text red">events</span> such 
                        as turns, accelerations, and offer <span className="bold-body-text red">persona-specific interactions</span>.
                      </p>
                    </div>
                    <div className="five columns" style={{ height: '220px' }}>
                      <div className="floating-image-container">
                        <img
                          className="floating-image"
                          src="images/about_visual1.png"
                          alt="Visual"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="seven columns main-col body-text">
                      <p>We built our personas in an app on the <span className="bold-body-text red">Android</span> platform using  
                        <span className="bold-body-text red"> conversational LLMs</span> and 
                        <span className="bold-body-text red"> text-to-speech</span> synthesis. <span className="bold-body-text red">Fine-tuned</span> on specific 
                        datasets for each real-world figure, our models capture their distinct style, voice, and tone. This ensures that conversations feel authentic 
                        and sound like a real friend.
                      </p>
                    </div>
                    <div className="five columns" style={{ height: '220px' }}>
                      <div className="floating-image-container">
                        <img
                          className="floating-image"
                          src="images/about_visual2.png"
                          alt="Visual"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="seven columns main-col body-text">
                      <p>Each persona not only engages in conversations with the driver but also reacts to various 
                        <span className="bold-body-text red"> driving events detected with sensors</span> mounted on a physical minicar. We aim to implement two events 
                        (honking and acceleration) as high-priority goals in our MVP, with three additional events (turning, parking, maintaining distance from other vehicles) 
                        set as stretch goals.
                      </p>
                    </div>
                    <div className="five columns" style={{ height: '350px' }}>
                      <div className="floating-image-container">
                        <img
                          className="floating-image"
                          src="images/about_visual3.jpeg"
                          alt="Visual"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="seven columns main-col body-text">
                      <p>Additionally, each persona offers unique features: the Football Commentator provides updates on 
                        <span className="bold-body-text red"> football news</span>, the Old Sport 
                        <span className="bold-body-text red"> introduces new songs</span>, and Art & Nature utilizes computer vision to 
                        <span className="bold-body-text red"> narrate landscapes</span> and <span className="bold-body-text red"> respond to the driver’s gestures</span>.
                      </p>
                    </div>
                    <div className="five columns" style={{ height: '220px' }}>
                      <div className="floating-image-container">
                        <img
                          className="floating-image"
                          src="images/about_visual6.png"
                          alt="Visual"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="seven columns main-col body-text">
                      <p>To optimize performance within the vehicle, we strive to <span className="bold-body-text red">minimize the system size</span> while maintaining 
                        the aforementioned functionality. Specifically, our <span className="bold-body-text red">LLMs and text-to-speech models are limited to 2B parameters</span>, 
                        suitable for embedded systems. Additionally, we utilize <span className="bold-body-text red">LangChain</span> for conversation retention and 
                        <span className="bold-body-text red"> RAG</span> for domain-specific knowledge insertion to enhance conversation quality.
                      </p>
                    </div>
                    <div className="five columns" style={{ height: '220px' }}>
                      <div className="floating-image-container">
                        <img
                          className="floating-image"
                          src="images/about_visual5.png"
                          alt="Visual"
                        />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
