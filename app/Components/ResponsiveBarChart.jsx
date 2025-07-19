'use client';
import React from 'react';
import {

ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend
} from 'recharts';

const defaultData = [
{ name: 'January', uv: 4000, pv: 2400, amt: 2400 },
{ name: 'February', uv: 3000, pv: 1398, amt: 2210 },
{ name: 'March', uv: 2000, pv: 9800, amt: 2290 },
{ name: 'April', uv: 2780, pv: 3908, amt: 2000 },
{ name: 'May', uv: 1890, pv: 4800, amt: 2181 },
{ name: 'June', uv: 2390, pv: 3800, amt: 2500 },
{ name: 'July', uv: 3490, pv: 4300, amt: 2100 }
];

const ResponsiveBarChart = ({ data = defaultData, title = 'Monthly Metrics' }) => {
return (
    <div style={{ width: '100%', height: 400 }}>
        <h3 style={{ textAlign: 'center', marginBottom: 20 }}>{title}</h3>
        <ResponsiveContainer>
            <BarChart
                data={data}
                margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={35}/>
                <Bar dataKey="pv" fill="#8884d8" name="Page Views" />
                <Bar dataKey="uv" fill="#82ca9d" name="User Visits" />
            </BarChart>
        </ResponsiveContainer>
    </div>
);
};

export default ResponsiveBarChart;