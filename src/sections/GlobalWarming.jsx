import React, { Component } from "react";
import Globalwarmingpic from "../Globalwarmingpic.png";
import GlobalWarmingButton from "../Components/GlobalWarmingButton";
import AOS from "aos";
import "../aos.css";

AOS.init();

class GlobalWarming extends Component {
  state = {
    CO2Emission: [],
    indexYear: 0
  };
  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ CO2Emission: data });
  }
  handleYearFilter = Year => {
    let index = this.state.CO2Emission.findIndex(
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
        className="Warming-section"
        id="GlobalWarming"
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-delay="40"
      >
        <img
          src={Globalwarmingpic}
          id="Globalbild"
          alt="Bild om global uppvärmning"
        />
        <h2 id="warmingheading">Global Warming </h2>
        <p id="warmingtext">
          <h3>How much do you know about global warming?</h3>
          <span className="ItalicText">
            Read the text and points below to refresh your knowledge or to learn
            something new!
          </span>
          <br></br>
          Global warming means just what it says, the weather is getting warmer.
          With warmer weather and higher temperature comes risks, such as
          glaciers starting to melt, and sea levels getting higher.
          <h3>But what causes global warming then?</h3>
          Several things are causing the temperature to rise, but some of them
          are extra bad. The most known thing to cause global warming is the CO2
          emissions. CO2 emissions come from the use of fossil fuels such as the
          fuel we use for vehicles with engines. There is also a lot of
          emissions from the clothing industry, everyday products and food
          items. Many of the factories all over the world need to make products,
          clothes and food healthy for us to use. Therefore they are using
          methods that causes emissions.
          <h3>What can YOU do to stop global warming?</h3>
          You can do alot of stuff, see the list below to see how!
          <ul>
            <li> Walk or take the bike instead of the car</li>
            <li> Eat less meat and start to eat more vegetarian foods</li>
            <li> Stop buying things you don’t really need </li>
            <li>
              {" "}
              Inform all your friends and family about this! <span>😊</span>
            </li>
          </ul>
        </p>
        <GlobalWarmingButton></GlobalWarmingButton>
      </div>
    );
  }
}
export default GlobalWarming;
