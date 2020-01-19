import React, { Component } from "react";
import Quiz from "./Quiz";

class StartQuizButton extends Component {
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
      <div className="Quiz-section2">
        <h2 className="quizheading">Test your knowledge in a quiz</h2>
        {this.state.showMe ? (
          <div>
            <Quiz />
          </div>
        ) : null}

        <button className="startbutton" onClick={() => this.operation()}>
          Start
        </button>
      </div>
    );
  }
}

export default StartQuizButton;
