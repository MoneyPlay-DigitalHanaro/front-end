import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const ChartStock = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.stockClosePrice));
  const minValue = Math.min(...data.map((item) => item.stockClosePrice));
  console.log(maxValue);
  console.log(minValue);

  return (
    <ResponsiveContainer width={330} height={270}>
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
        <XAxis dataKey="stockOpenDate" tick={false} height={0} />
        <YAxis domain={["auto", "auto"]} tick={false} width={0} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="stockClosePrice"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartStock;
