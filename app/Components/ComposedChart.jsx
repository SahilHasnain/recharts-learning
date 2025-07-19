'use client';

import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    Line,
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

export default function SimpleComposedChart() {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 20 }}>Mixed Metrics Overview</h3>
            <ResponsiveContainer>
                <ComposedChart
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />

                    {/* Area for amt */}
                    <Area type="monotone" dataKey="amt" fill="#ffc658" stroke="#ffc658" name="Amount" />

                    {/* Bar for pv */}
                    <Bar dataKey="pv" barSize={20} fill="#8884d8" name="Page Views" />

                    {/* Line for uv */}
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" name="User Visits" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}