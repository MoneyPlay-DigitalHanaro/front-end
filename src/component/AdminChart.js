/* eslint-disable */
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "../style/css/Admin.module.css";

function AdminChart() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const data = [
    {
      month: `1월`,
      uv: 4000,
      point: 2400,
      amt: 2400,
    },
    {
      month: `3월`,
      uv: 3000,
      point: 1398,
      amt: 2210,
    },
    {
      month: `4월`,
      uv: 2000,
      point: 9800,
      amt: 2290,
    },
    {
      month: `5월`,
      uv: 2780,
      point: 3908,
      amt: 2000,
    },
    {
      month: `6월`,
      uv: 1890,
      point: 4800,
      amt: 2181,
    },
    {
      month: `7월`,
      uv: 2390,
      point: 3800,
      amt: 2500,
    },
    {
      month: `8월`,
      uv: 3490,
      point: 4300,
      amt: 2100,
    },
  ];

  const lastSixMonthsData = data.filter((item) => {
    const monthNum = parseInt(item.month.replace("월", ""), 10);
    return monthNum <= currentMonth && monthNum > currentMonth - 6;
  });

  return (
    <ResponsiveContainer width="85%" height="50%" className="ml30">
      <LineChart
        width={500}
        height={300}
        data={lastSixMonthsData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="point"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={4}
          name="우리반의 point"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AdminChart;
