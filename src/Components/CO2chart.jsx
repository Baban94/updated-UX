import React, { Component } from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";
class CO2chart extends Component {
  handleYear = e => {
    if (e.key === "Enter") {
      this.props.onYearFilter(this.props.chartName, e.target.value);
      console.log(e.target.value);
    }
  };

  render() {
    let co2 = this.props.Co2Emission;
    if (co2 === undefined) return <p>there is no data.</p>;
    const dataPieChart = [
      { name: "Gas Fuel", value: co2["Gas Fuel"] },
      { name: "Liquid Fuel", value: co2["Liquid Fuel"] },
      { name: "Solid Fuel", value: co2["Solid Fuel"] },
      { name: "Cement", value: co2["Cement"] }
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    console.log(co2);

    return (
      <div className="grafstil">
        <input
          type="text"
          placeholder="Year..."
          onKeyDown={e => this.handleYear(e)}
        ></input>
        <PieChart width={160} height={220} onMouseEnter={this.onPieEnter}>
          {" "}
          <Pie
            data={dataPieChart}
            dataKey="value"
            cx={50}
            cy={50}
            outerRadius={50}
            fill="#8884d8"
            label
          >
            {" "}
            <Cell fill={COLORS[0]} /> <Cell fill={COLORS[1]} />{" "}
            <Cell fill={COLORS[2]} /> <Cell fill={COLORS[3]} />{" "}
          </Pie>{" "}
          <Tooltip />
          <Legend layout="horizontal"></Legend>
        </PieChart>
      </div>
    );
  }
}

export default CO2chart;
