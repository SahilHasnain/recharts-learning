"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const MultipleBarChart = () => {
  const data = [
    { name: "Mon", users: 400, downloads: 240 },
    { name: "Tue", users: 300, downloads: 139 },
    { name: "Wed", users: 500, downloads: 980 },
    { name: "Thu", users: 200, downloads: 390 },
    { name: "Fri", users: 600, downloads: 380 },
  ];

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="users" fill="#00C49F" /> */}
      {/* customizing bar chart */}
      <Bar dataKey="users" fill="#8884d8" radius={[10, 10, 0, 0]} />
        {/* adding another bar for downloads */}
      <Bar dataKey="downloads" fill="#FF8042" />
    </BarChart>
  );
};

export const StackedBarChart = () => {
  const data = [
    { name: "Mon", users: 400, downloads: 240 },
    { name: "Tue", users: 300, downloads: 139 },
    { name: "Wed", users: 500, downloads: 980 },
    { name: "Thu", users: 200, downloads: 390 },
    { name: "Fri", users: 600, downloads: 380 },
  ];

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="users" stackId="a" fill="#00C49F" />
      <Bar dataKey="downloads" stackId="a" fill="#FF8042" />
    </BarChart>
  );
};
