import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sunday",
    revenue: 4000,
    active_users: 2400,
    amt: 2400,
  },
  {
    name: "Monday",
    revenue: 3000,
    active_users: 1398,
    amt: 2210,
  },
  {
    name: "Tuesday",
    revenue: 2000,
    active_users: 9800,
    amt: 2290,
  },
  {
    name: "Wednesday",
    revenue: 2780,
    active_users: 3908,
    amt: 2000,
  },
  {
    name: "Thursday",
    revenue: 1890,
    active_users: 4800,
    amt: 2181,
  },
  {
    name: "Friday",
    revenue: 2390,
    active_users: 3800,
    amt: 2500,
  },
  {
    name: "Saturday",
    revenue: 3490,
    active_users: 4300,
    amt: 2100,
  },
];

export default class LineChartCompo extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="active_users"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
