import React, { Component } from "react";
import GlobalChart from "./GlobalChart";
import Modal from "react-modal";
class GlobalWarmingButton extends Component {
  constructor() {
    super();
    this.state = {
      GlobalEmission: [],
      indexYear: 250,
      isActive: false
    };
  }

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      GlobalEmission: data.sort((a, b) =>
        a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
      )
    });
  }

  componentWillMount() {
    Modal.setAppElement("body");
  }
  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <div className="content">
        <button className="diagramknapp" onClick={this.toggleModal}>
          Show the graph!
        </button>

        <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
          <button className="closebutton" onClick={this.toggleModal}></button>
          <div className="container">
            <h1 style={{ textAlign: "center" }}> Global Temperature Graph</h1>
            <div className="ChartAndText">
              <p className="GlobalChartInfo">
                The graph is showing how the average global <br></br>{" "}
                temperature has changed from 1880 to 2016.
                <br></br>As you can see, it keeps getting warmer.
              </p>
              <div className="globalparent">
                <div className="GlobalChart">
                  <GlobalChart
                    GlobalEmission={this.state.GlobalEmission}
                    onYearFilter={this.handleYearFilter}
                  ></GlobalChart>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default GlobalWarmingButton;
