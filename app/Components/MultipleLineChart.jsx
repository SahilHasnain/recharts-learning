"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function MultipleLineChart() {
  const data = [
    { name: "Mon", users: 400, downloads: 240 },
    { name: "Tue", users: 300, downloads: 139 },
    { name: "Wed", users: 500, downloads: 980 },
    { name: "Thu", users: 200, downloads: 390 },
    { name: "Fri", users: 600, downloads: 380 },
  ];

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* Yeh bottom/top me ek auto-legend show karega (colors ke sath label). */}
      <Legend />

      <Line type="monotone" dataKey="users" stroke="#00C49F" />
      {/* <Line type="step" dataKey="users" stroke="#00C49F" /> */}
      {/* <Line type='basis' dataKey="downloads" stroke="#FF8042" /> */}
      <Line type="linear" dataKey="downloads" stroke="#FF8042" />
    </LineChart>
  );
}
