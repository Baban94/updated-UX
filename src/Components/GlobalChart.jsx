import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class GlobalChart extends Component {
  render() {
    let dataGlobal = this.props.GlobalEmission;
    if (dataGlobal === undefined) return <p>There is no data </p>;

    return (
      <React.Fragment>
        <div className="grafstil3">
          <LineChart width={700} height={420} data={dataGlobal}>
            <XAxis dataKey="Year" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Mean"
              name="Average temperature (°C)"
              stroke="#31a196"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </React.Fragment>
    );
  }
}

export default GlobalChart;
