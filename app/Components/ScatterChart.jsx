'use client';

import React from 'react';
import {
    ResponsiveContainer,
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const data = [
    { x: 10, y: 30, z: 200 },
    { x: 20, y: 20, z: 260 },
    { x: 30, y: 50, z: 400 },
    { x: 40, y: 30, z: 280 },
    { x: 50, y: 60, z: 500 },
    { x: 60, y: 20, z: 300 },
    { x: 70, y: 80, z: 600 },
];

export default function SimpleScatterChart() {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 20 }}>Bubble Distribution</h3>
            <ResponsiveContainer>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        type="number"
                        dataKey="x"
                        name="X Value"
                        unit=""
                    />
                    <YAxis
                        type="number"
                        dataKey="y"
                        name="Y Value"
                        unit=""
                    />
                    <ZAxis
                        dataKey="z"
                        range={[60, 400]}
                        name="Weight"
                        unit=""
                    />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend verticalAlign="top" height={36} />
                    <Scatter
                        name="Samples"
                        data={data}
                        fill="#8884d8"
                        shape="circle"
                    />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
}