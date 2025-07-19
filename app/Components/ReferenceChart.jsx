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
    ResponsiveContainer,
    ReferenceLine,
    ReferenceArea
} from 'recharts';

const data = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
];

export default function ChartWithReferences() {
    const avgSales = data.reduce((sum, item) => sum + item.sales, 0) / data.length;
    
    return (
        <div style={{ width: '100%', height: 400 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 20 }}>Sales Performance with References</h3>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    
                    {/* Average sales reference line */}
                    <ReferenceLine 
                        y={avgSales} 
                        label="Average" 
                        stroke="red" 
                        strokeDasharray="3 3" 
                    />
                    
                    {/* Target reference line */}
                    <ReferenceLine 
                        y={4500} 
                        label="Target" 
                        stroke="green" 
                        strokeDasharray="3 3" 
                    />
                    
                    {/* Q1 reference area */}
                    <ReferenceArea 
                        x1="Jan" 
                        x2="Mar" 
                        fill="#8884d8" 
                        fillOpacity={0.1} 
                        label="Q1" 
                    />
                    
                    {/* Alert area - below threshold */}
                    <ReferenceArea 
                        y1={0} 
                        y2={2000} 
                        fill="#FF0000" 
                        fillOpacity={0.1} 
                        label="Alert Zone" 
                    />
                    
                    <Line 
                        type="monotone" 
                        dataKey="sales" 
                        stroke="#8884d8" 
                        activeDot={{ r: 8 }} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}