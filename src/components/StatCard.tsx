import React from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
};

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <div className="bg-white shadow rounded-xl flex items-center space-x-4 w-full min-w-0 px-4 py-6 md:px-6 lg:px-8">
      <div className="text-blue-500 text-2xl">{icon}</div>
      <div className="flex flex-col">
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
};

export default React.memo(StatCard);
