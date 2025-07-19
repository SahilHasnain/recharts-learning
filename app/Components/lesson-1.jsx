'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: 'Mon', users: 400 },
  { name: 'Tue', users: 300 },
  { name: 'Wed', users: 500 },
  { name: 'Thu', users: 200 },
  { name: 'Fri', users: 600 },
];

export default function ExampleChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users" stroke="#00C49F" dot={true} activeDot={{r:8, stroke:'black',strokeWidth:8}} />
    </LineChart>
  );
}