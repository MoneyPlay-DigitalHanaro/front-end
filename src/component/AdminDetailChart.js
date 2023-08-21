/* eslint-disable */
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import monthlyData from './AdminDetailChartData';

function AdminDetailChart({ data: selectedData }) {
  if (!selectedData) return <div></div>;

  const filteredData = monthlyData.filter((item) => item.id === selectedData.id);

  return (
    <ResponsiveContainer width="125%" height="40%" className="ml_75">
      <LineChart
        width={500}
        height={300}
        data={filteredData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tick={false} />
        <Tooltip />
        <Line type="monotone" dataKey="point" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={4} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AdminDetailChart;
