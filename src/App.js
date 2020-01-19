import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Home from "./sections/Home";
import GlobalWarming from "./sections/GlobalWarming";
import GlacierSize from "./sections/GlacierSize";
import CO2Emission from "./sections/CO2Emission";
import StartQuizButton from "./StartQuizButton";
//import Quiz from "./Quiz";
import "./assets/style.css";
import "./App.css";
import "./CO2button.css";

class App extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      showMe: false
    };
  }
  operation() {
    this.setState({
      showMe: true
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <GlobalWarming />
        <GlacierSize />
        <CO2Emission />
        <StartQuizButton />
      </div>
    );
  }
}
export default App;
