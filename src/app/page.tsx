'use client';

import React, { useState } from "react";
import Modal from "../components/Modal"; // Assuming this is in the same folder
import UserTable from "../components/UserTable"; // Assuming this is in the same folder
import { toast } from "react-hot-toast";
import ProtectedRoute from "@/components/ProtectedRoutes";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Techistics", email: "Business@techistics.com" },
    { id: 2, name: "DevClyst", email: "Business@devclyt.com" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete">("add");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [sortField, setSortField] = useState<keyof User | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleConfirm = (data: { name: string; email: string }) => {
    const userData: User = {
      id: modalType === "edit" && selectedUser ? selectedUser.id : Date.now(),
      name: data.name,
      email: data.email,
    };

    if (modalType === "add") {
      setUsers((prev) => [...prev, userData]);
      toast.success("User added successfully");
    } else if (modalType === "edit" && selectedUser) {
      setUsers((prev) =>
        prev.map((u) => (u.id === selectedUser.id ? { ...u, ...userData } : u))
      );
      toast.success("User updated successfully");
    } else if (modalType === "delete" && selectedUser) {
      setUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
      toast.success("User deleted successfully");
    }

    setIsModalOpen(false);
  };

  const handleSort = (field: keyof User) => {
    const newSortOrder = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newSortOrder);

    setUsers((prevUsers) =>
      [...prevUsers].sort((a, b) => {
        if (a[field] < b[field]) return sortOrder === "asc" ? -1 : 1;
        if (a[field] > b[field]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

  return (
    <ProtectedRoute>
      <div className="p-6">
        <h1 className="text-3xl text-gray-500 font-bold">Dashboard Overview</h1>
        {/* <UserGrowthChart /> */}

        <button
          onClick={() => {
            setModalType("add");
            setSelectedUser(null);
            setIsModalOpen(true);
          }}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
          data-tip="Add User"
        >
          Add User
        </button>

        <UserTable
          users={users}
          onSort={handleSort}
          sortField={sortField}
          sortOrder={sortOrder}
          onEdit={(user) => {
            setModalType("edit");
            setSelectedUser(user);
            setIsModalOpen(true);
          }}
          onDelete={(user) => {
            setModalType("delete");
            setSelectedUser(user);
            setIsModalOpen(true);
          }}
        />

        {/* Pass selectedUser as undefined if null */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
          type={modalType}
          defaultData={selectedUser ? { name: selectedUser.name, email: selectedUser.email } : undefined}
        />
      </div>
    </ProtectedRoute>
  );
}
