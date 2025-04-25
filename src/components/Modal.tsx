'use client';

import React from "react";
import Button from './Button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: { name: string; email: string }) => void;
  type: "add" | "edit" | "delete";
  defaultData?: { name: string; email: string } | undefined; // Correct type for defaultData
};

const Modal = ({ isOpen, onClose, onConfirm, type, defaultData }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-500 p-6 rounded-lg shadow-md w-full max-w-md sm:max-w-xs transition-all duration-300 transform scale-100 opacity-100 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold capitalize">{type} User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-xl font-bold">
            &times;
          </button>
        </div>

        <div>
          {(type === "add" || type === "edit") && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const userData = Object.fromEntries(formData.entries()) as { name: string; email: string };
                onConfirm(userData);
              }}
              className="space-y-4"
            >
              <input
                name="name"
                type="text"
                placeholder="Name"
                defaultValue={defaultData?.name || ""}
                className="w-full border p-2 rounded"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                defaultValue={defaultData?.email || ""}
                className="w-full border p-2 rounded"
                required
              />
              <div className="flex justify-end space-x-2 mt-4">
                <Button
                  text="Cancel"
                  onClick={onClose}
                  className="bg-gray-300 text-black hover:bg-gray-400"
                />
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
                  {type === "add" ? "Add User" : "Save Changes"}
                </button>
              </div>
            </form>
          )}

          {type === "delete" && (
            <div>
              <p className="mb-4">Are you sure you want to delete this user?</p>
              <div className="flex justify-end space-x-2">
                <Button
                  text="Cancel"
                  onClick={onClose}
                  className="bg-gray-300 text-black hover:bg-gray-400"
                />
                <button
                  onClick={() => {
                    if (defaultData) onConfirm(defaultData); // Check that defaultData is available
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
