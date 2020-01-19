import React, { Component } from "react";
import GlacierChart from "./GlacierChart";
/*import "semantic-ui-css/semantic.min.css";*/
import Modal from "react-modal";

class GlacierSizeButton extends Component {
  constructor() {
    super();
    this.state = {
      GlacierEmission: [],
      isActive: false
    };
  }

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ GlacierEmission: data });
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
            <h1 style={{ textAlign: "center" }}> Glacier Size Graph</h1>
            <p className="GlacierChartInfo">
              The graph is showing how the mass of glaciers <br></br> has
              changed from 1945 to 2014.
              <br></br>As you can see, the mass has decreased with over 28 km3
              over these years. <br></br> This is because of the increasing
              global temperatures.
            </p>

            <div className="glacierparent">
              <div className="GlacierChart">
                <GlacierChart
                  GlacierEmission={this.state.GlacierEmission}
                ></GlacierChart>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default GlacierSizeButton;
