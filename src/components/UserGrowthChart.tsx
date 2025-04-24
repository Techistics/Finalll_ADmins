"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 30 },
  { name: 'Feb', users: 45 },
  { name: 'Mar', users: 30 },
  { name: 'Apr', users: 80 },
  { name: 'May', users: 95 },
  { name: 'June', users: 30 },
  { name: 'July', users: 45 },
  { name: 'Aug', users: 59 },
  { name: 'Sep', users: 73 },
  { name: 'Oct', users: 85 },
];

const UserGrowthChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-pink-700">User Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#C6005C" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
