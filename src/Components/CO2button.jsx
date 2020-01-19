import React, { Component } from "react";
import Modal from "react-modal";
import Polarbearchart from "../Polarbearchart.png";
import CO2chart from "./CO2chart";
class CO2button extends Component {
  constructor() {
    super();
    this.state = {
      Co2Emission: [],
      indexYear1: 0,
      indexYear2: 0,
      isActive: false
    };
  }
  componentWillMount() {
    Modal.setAppElement("body");
  }
  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ Co2Emission: data });
  }
  handleYearFilter = (chartName, Year) => {
    let index = this.state.Co2Emission.findIndex(
      co2 => co2.Year === parseInt(Year)
    );

    if (index !== -1) {
      switch (chartName) {
        case "Pie1":
          this.setState({ indexYear1: index });
          break;
        case "Pie2":
          this.setState({ indexYear2: index });
          break;
      }
    } else {
      alert("Year could not be found in data");
    }
  };

  render() {
    return (
      <div className="Graphpage">
        <button
          className="diagramknapp"
          onClick={this.toggleModal}
          style={{ marginTop: "70px" }}
        >
          Show the graph!
        </button>
        <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
          <button className="closebutton" onClick={this.toggleModal}></button>
          <h1 style={{ textAlign: "center" }}>CO2 Emission graph</h1>

          <div className="Polarbearchart">
            {" "}
            <img src={Polarbearchart} alt="Polarbear with chart" />
          </div>
          <h2 className="howtouse">How to use:</h2>
          <p className="howtograph">
            The pie chart describes{" "}
            <span className="boldtext">
              how much carbon dioxide is released in the atmosphere for each
              year.
            </span>
            Think of slicing a cake, every piece is of different size. The
            diagram then shows how big every size is. The pieces in the chart
            consists of Gas fuel, Liquid fuel, Solid fuel and Cement. Follow the
            steps below! There are two different charts where you can compare
            CO2 emission changes between the years.
            <br></br>
            <div role="list" class="ui ordered list">
              {" "}
              <li class="item">
                <span className="boldtext">
                  Write a year in the search box, then click the enter button.
                </span>
              </li>{" "}
              <li class="item">
                <span className="boldtext">
                  {" "}
                  The chart will show different pieces with different amounts of
                  Co2 commission.
                </span>
              </li>{" "}
              <li class="item">
                <span className="boldtext">
                  {" "}
                  Every colour contains a single piece in the chart.
                </span>
              </li>{" "}
              <li class="item">
                <span className="boldtext">
                  {" "}
                  The value in the pie chart is ton.
                </span>
              </li>
            </div>
          </p>
          <co2chart>
            <CO2chart
              chartName="Pie1"
              Co2Emission={this.state.Co2Emission[this.state.indexYear1]}
              onYearFilter={this.handleYearFilter}
            ></CO2chart>

            <CO2chart
              chartName="Pie2"
              Co2Emission={this.state.Co2Emission[this.state.indexYear2]}
              onYearFilter={this.handleYearFilter}
            ></CO2chart>
          </co2chart>
        </Modal>
      </div>
    );
  }
}

export default CO2button;
