import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SimpleBarChart = ({ numData }) => {
  return (
    <BarChart
      width={350}
      height={270}
      data={numData}
      margin={{
        top: 5,
        right: 30,
        // left: 20,
        bottom: 5,
      }}
      fontSize={14}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
};

export default SimpleBarChart;
