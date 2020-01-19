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

class GlacierChart extends Component {
  render() {
    let dataGlacier = this.props.GlacierEmission;
    if (dataGlacier === undefined) return <p>There is no data </p>;

    return (
      <React.Fragment>
        <div className="grafstil3">
          <LineChart width={700} height={420} data={dataGlacier}>
            <XAxis dataKey="Year" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Mean cumulative mass balance"
              name="The mass balance of glaciers (km3)"
              stroke="#31a196"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </React.Fragment>
    );
  }
}

export default GlacierChart;
