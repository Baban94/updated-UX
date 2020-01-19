import React, { Component } from "react";
import Glacierpic from "../Glacierpic.png";
import GlacierSizeButton from "../Components/GlacierSizeButton";
import AOS from "aos";
import "../aos.css";

AOS.init();

class GlacierSize extends Component {
  state = {
    GlacierEmission: [],
    indexYear: 0
  };
  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ GlacierEmission: data });
  }
  handleYearFilter = Year => {
    let index = this.state.GlacierEmission.findIndex(
      co2 => co2.Year === parseInt(Year)
    );
    if (index !== -1) {
      this.setState({ indexYear: index });
    } else {
      alert("Year could not be found in data");
    }
  };
  render() {
    return (
      <div
        className="Glacier-section"
        id="GlacierEmission"
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-delay="40"
      >
        <img src={Glacierpic} id="Glacierpicture" alt="Glacier melting" />
        <div className="GlacierTextSection">
          <h2 id="glacierHeading"> Glacier size</h2>
          <p id="glacierText">
            <span className="ItalicText">
              Like we told you before there are some risks with global warming.
              A major risk with global warming is that glaciers starts to melt.
            </span>
            <h3>How does this affect me then?</h3>
            Think about this; when glaciers melt, the sea level increases. This
            means that the ground you are standing on might be covered in water
            if the sea level gets even higher than it is. In a near future it is
            possible that many cities close to the sea will be under water if we
            don’t make the temperature decrease!
            <h3>Think about the animals, what happens to them?</h3>
            It is not only humans that will be affected by the decreasing
            glacier sizes. Our planet consists of millions of animals. They will
            of course also be affected. Most animals that live close to the sea,
            or for example polar bears that spend most of their time on the ice,
            will be forced to get into the water when the ice melts.
            <h3>Can´t we just move to another place?</h3>
            <p id="glacierText">
              Yes, you can move, but this doesn’t mean that you are the only
              one. If a lot of people need to move from their homes, other
              places will be overpopulated. When a place gets overpopulated it
              means that there are to many people on the same place.
            </p>
          </p>

          <div className="GlacierButton">
            <GlacierSizeButton></GlacierSizeButton>
          </div>
        </div>
      </div>
    );
  }
}
export default GlacierSize;
