import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Splash from "./Components/Splash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true,
      foo: "bar",
      resumeData: {}
    };
    this.handlerOnClick = this.handlerOnClick.bind(this);

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  handlerOnClick() {
    this.setState({splash: !this.state.splash})
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
      {
        (this.state.splash) ? 
          (
            <Splash handler={this.handlerOnClick} />
          ) :
          (
            <div>
              <Header data={this.state.resumeData.main} />
              <About data={this.state.resumeData.main} />
              <Resume data={this.state.resumeData.resume} />
              <Portfolio data={this.state.resumeData.portfolio} />
              <Contact data={this.state.resumeData.main} />
              <Footer data={this.state.resumeData.main} />
            </div>
          )
      }
      </div>
    );
  }
}

export default App;
