'use client';

import React from 'react';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from 'recharts';

const data = [
    { name: 'Chrome',    value: 400 },
    { name: 'Firefox',   value: 300 },
    { name: 'Edge',      value: 300 },
    { name: 'Safari',    value: 200 },
    { name: 'Others',    value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A'];

export default function SimplePieChart() {
    return (
        <div style={{ width: '100%', height: 350 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 10 }}>Browser Usage</h3>
            <ResponsiveContainer>
                <PieChart>
                    <Legend verticalAlign="top" height={36}/>
                    <Tooltip />
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={60}    // donut banane ke liye
                        label               // slices pe labels show karega
                    >
                        {
                            data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}