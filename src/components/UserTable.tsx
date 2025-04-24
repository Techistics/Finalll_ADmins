// UserTable.tsx
"use client";
import React from "react";
import Button from './Button';

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  users: User[];
  onSort: (field: keyof User) => void;
  sortField: keyof User | null;
  sortOrder: "asc" | "desc";
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

const UserTable = ({
  users,
  onSort,
  sortField,
  sortOrder,
  onEdit,
  onDelete,
}: Props) => {
  const getSortIcon = (field: keyof User) => {
    if (sortField !== field) return null;
    return sortOrder === "asc" ? "↑" : "↓";
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg text-black ">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th
              onClick={() => onSort("name")}
              className="px-4 py-2 cursor-pointer text-left"
            >
              Name {getSortIcon("name")}
            </th>
            <th
              onClick={() => onSort("email")}
              className="px-4 py-2 cursor-pointer text-left"
            >
              Email {getSortIcon("email")}
            </th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2 text-right">
                <Button
                  text="Edit"
                  onClick={() => onEdit(user)}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                />
                <Button
                  text="Delete"
                  onClick={() => onDelete(user)}
                  className="bg-red-500 hover:bg-red-600 text-white ml-2"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
