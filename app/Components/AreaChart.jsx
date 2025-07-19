'use client';
import React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 }
];

export default function SimpleAreaChart() {
    return (
        <div style={{ width: '100%', height: 350 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 10 }}>Monthly Trends</h3>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Area 
                        type="monotone" 
                        dataKey="uv" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        name="User Visits" 
                    />
                    <Area 
                        type="monotone" 
                        dataKey="pv" 
                        stroke="#82ca9d" 
                        fill="#82ca9d" 
                        name="Page Views" 
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}