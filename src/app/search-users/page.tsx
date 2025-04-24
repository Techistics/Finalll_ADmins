"use client";
import { useState } from 'react';

const Page = () => {
  const [user, setUser] = useState("");

  const data = [
    { id: 1, name: "Ali Khan", email: "ali@example.com" },
    { id: 2, name: "Sara Malik", email: "sara@example.com" },
    { id: 3, name: "Umer Farooq", email: "umer@example.com" },
    { id: 4, name: "Ayesha Ahmed", email: "ayesha@example.com" }
  ];

  const filteredUsers = data.filter((item) =>
    item.name.toLowerCase().includes(user.toLowerCase())
  );

  return (
    <div className="p-6 max-w-lg mx-auto">
      <input 
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Search for users..."
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredUsers.length === 0 ? (
        <p className="text-center text-red-500">No users found</p>
      ) : (
        <div>
          {filteredUsers.map((user) => (
            <div key={user.name} className="border-b border-gray-200 py-2">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
