import React, { useState, useEffect } from "react";
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
import axios from "axios";

function AdminDetailChart({ data: selectedData }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // API 호출
    axios
      .get("http://localhost:8080/admin")
      .then((response) => {
        // API 응답에서 userDailyPoint 배열을 가져와 차트 데이터로 매핑
        const mappedData = response.data.userDailyPoint.map((point) => ({
          month: point.localDate,
          point: point.totalPoint,
        }));
        setChartData(mappedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedData]);

  if (!chartData.length) return <div>Loading...</div>;

  return (
    <ResponsiveContainer width="125%" height="40%" className="ml_75">
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tick={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="point"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AdminDetailChart;
