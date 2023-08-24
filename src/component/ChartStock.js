import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const ChartStock = ({ data }) => {
  return (
    <LineChart
      width={310}
      height={220}
      data={data.reverse()} // 데이터의 날짜 순서를 오름차순으로 변경
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="stockOpenDate" tick={false} />
      <YAxis domain={["auto", "auto"]} tick={false} />
      <Line
        type="monotone"
        dataKey="stockClosePrice"
        stroke="#8884d8"
        dot={false}
      />
    </LineChart>
  );
};

export default ChartStock;
