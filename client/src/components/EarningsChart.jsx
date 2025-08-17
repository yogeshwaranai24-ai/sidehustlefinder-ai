import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EarningsChart = ({ data }) => {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: 'Earnings ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value) => [`$${value}`, 'Monthly Earnings']} />
          <Bar dataKey="earnings" fill="#8884d8" name="Earnings" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;