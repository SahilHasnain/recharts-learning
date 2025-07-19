'use client';

import React from 'react';
import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend,
    Tooltip
} from 'recharts';

const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'English', A: 98, B: 130, fullMark: 150 },
    { subject: 'Science', A: 86, B: 130, fullMark: 150 },
    { subject: 'History', A: 99, B: 100, fullMark: 150 },
    { subject: 'Art', A: 85, B: 90, fullMark: 150 },
];

export default function SimpleRadarChart() {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 20 }}>Student Scores Comparison</h3>
            <ResponsiveContainer>
                <RadarChart data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Class A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Class B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend verticalAlign="top" height={36} />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}