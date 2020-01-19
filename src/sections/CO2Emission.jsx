import React, { Component } from "react";
import CO2pic from "../CO2pic.png";
import CO2button from "../Components/CO2button";
import AOS from "aos";
import "../aos.css";

AOS.init();

class CO2Emission extends Component {
  render() {
    return (
      <div
        className="CO2-section"
        id="CO2Emission"
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-delay="40"
      >
        <img src={CO2pic} id="CO2Bild" alt="Fossil fuel pic" />
        <h2 id="CO2heading">Global CO2 emissions from fossil fuels</h2>
        <p id="CO2text">
          Like we told you before CO2 emissions comes from fossil fuels which
          can be used when driving cars, producing food and other products. But
          fossil fuels are more than that. Fossil fuels includes things like
          oil, coal and natural gas. When we use these fuels to build, produce
          and drive we cause CO2 emissions. <br></br>
          <h3>What is negative about CO2 emissions?</h3>
          The climate and nature don’t like CO2 emissions. When the air we
          breathe and the water we drink, or swim in, contains to much CO2
          emissions it affects humans and natures health. It also increases the
          global warming which might get the earth flooded since the glaciers
          are melting.
          <h3>How can I make a difference?</h3>
          <ul>
            <li>
              Recycle; if you buy a plastic bottle, don’t throw it in the
              nature, make sure to put it in a trashcan so it can be recycled
              into a new bottle!
            </li>
            <li>
              Use electricity; if your parents happen to buy a new car, tell
              them to buy an electric car, this is much better because it
              doesn’t use fossil fuels to be able to drive.
            </li>
            <li>
              Spend more time making your own healthy food and toys instead of
              letting factories produce all of it for you!
            </li>
          </ul>
        </p>

        <CO2button></CO2button>
      </div>
    );
  }
}
export default CO2Emission;
