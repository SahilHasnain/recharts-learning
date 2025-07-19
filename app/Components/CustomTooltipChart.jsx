'use client';

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Jan', users: 4000, revenue: 2400 },
    { name: 'Feb', users: 3000, revenue: 1398 },
    { name: 'Mar', users: 2000, revenue: 9800 },
    { name: 'Apr', users: 2780, revenue: 3908 },
    { name: 'May', users: 1890, revenue: 4800 },
    { name: 'Jun', users: 2390, revenue: 3800 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;

    return (
        <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.15)'
        }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>{`Month: ${label}`}</p>
            <p style={{ margin: '5px 0', color: payload[0].color }}>
                Users: {payload[0].value.toLocaleString()}
            </p>
            <p style={{ margin: 0, color: payload[1].color }}>
                Revenue: ${payload[1].value.toLocaleString()}
            </p>
        </div>
    );
};

export default function ChartWithCustomTooltip() {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 20 }}>Monthly Performance</h3>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}