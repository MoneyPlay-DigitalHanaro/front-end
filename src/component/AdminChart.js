/* eslint-disable */
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../style/css/Admin.module.css';

function AdminChart() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      point: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      point: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      point: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      point: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      point: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      point: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      point: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer width="85%" height="50%" className="ml30">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="point" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={4} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AdminChart;
