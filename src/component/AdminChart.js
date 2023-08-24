import React, { useState, useEffect } from "react";
import axios from "axios";
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

function AdminChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // 데이터가 props로 제공되지 않을 경우 API 호출
    if (!data) {
      axios
        .get("http://localhost:8080/admin")
        .then((response) => {
          setChartData(response.data.classDailyPoint);
        })
        .catch((error) => {
          console.error("데이터를 가져오는데 실패했습니다.", error);
        });
    } else {
      setChartData(data.classDailyPoint);
    }
  }, [data]);

  return (
    <ResponsiveContainer width="85%" height="50%">
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="localDate" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="totalPoint"
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
