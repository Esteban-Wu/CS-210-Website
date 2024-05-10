import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Prototype from "./Components/Prototype";
import Team from "./Components/Team";
import Process from "./Components/Process";
import Splash from "./Components/Splash";
import { PopupWidget } from "react-calendly";

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
              <PopupWidget
                url="https://calendly.com/kerwy/user-testing"
                rootElement={document.getElementById("root")}
                text="Book a Test Session"
                textColor="#ffffff"
                color="#BC2C22"
              />
              <Header data={this.state.resumeData.main} />
              <About data={this.state.resumeData.main} />
              <Prototype data={this.state.resumeData.resume} />
              <Process data={this.state.resumeData.portfolio} />
              <Team data={this.state.resumeData.main} />
              <Footer data={this.state.resumeData.main} />
            </div>
          )
      }
      </div>
    );
  }
}

export default App;
