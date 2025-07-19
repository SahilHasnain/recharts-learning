'use client';

import React from 'react';
import {
    ResponsiveContainer,
    FunnelChart,
    Funnel,
    Cell,
    LabelList,
    Tooltip
} from 'recharts';

const data = [
    { name: 'Visitors', value: 1000, fill: '#8884d8' },
    { name: 'Sign-ups', value: 600, fill: '#83a6ed' },
    { name: 'Active Users', value: 400, fill: '#8dd1e1' },
    { name: 'Subscribers', value: 200, fill: '#82ca9d' },
    { name: 'Paying Customers', value: 100, fill: '#a4de6c' },
];

export default function SimpleFunnelChart() {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 20 }}>Conversion Funnel</h3>
            <ResponsiveContainer>
                <FunnelChart>
                    <Tooltip />
                    <Funnel
                        dataKey="value"
                        data={data}
                        isAnimationActive={true}
                        animationDuration={800}
                    >
                        <LabelList
                            position="right"
                            fill="#000"
                            stroke="none"
                            dataKey="name"
                        />
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Funnel>
                </FunnelChart>
            </ResponsiveContainer>
        </div>
    );
}