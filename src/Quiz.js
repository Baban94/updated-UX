import React, { Component } from "react";
import "./assets/style.css";
import ReactDOM from "react-dom";
import quizService from "./quizService";
import QuestionBox from "./Components/QuestionBox";
import Result from "./Components/Result";

class Quiz extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };
  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  };
  playAgain = () => {
    /*this.getQuestions();*/
    this.setState({
      score: 0,
      responses: 0
    });
  };
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className="Quiz-section">
        <div className="containers">
          <div className="title">Quiz</div>
          {this.state.questionBank.length > 0 &&
            this.state.responses < 5 &&
            this.state.questionBank.map(
              ({ question, answers, correct, questionID }) => (
                <QuestionBox
                  question={question}
                  options={answers}
                  key={questionID}
                  selected={answer => this.computeAnswer(answer, correct)}
                />
              )
            )}

          {this.state.responses === 5 ? (
            <Result score={this.state.score} playAgain={this.playAgain} />
          ) : null}
        </div>
      </div>
    );
  }
}
export default Quiz;

ReactDOM.render(<Quiz />, document.getElementById("root"));