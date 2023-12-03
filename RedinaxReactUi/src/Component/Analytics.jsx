import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Analytics = () => {
    const data = [
        { name: 'Category 1', value: 10 },
        { name: 'Category 2', value: 20 },
        { name: 'Category 3', value: 15 },
        { name: 'Category 4', value: 18 },
        { name: 'Category 5', value: 4 },
    ];

    return (
        <div className="card">
            <div className="card-body">
                <div className="chart-header">
                    <h2>Analytics</h2>
                    <p>This bar chart displays the distribution of values across different categories.</p>
                </div>
                <BarChart width={400} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Analytics;
