import React from "react";
import ResponsiveSidebar from "./ResponsiveSidebar";

const Users = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <ResponsiveSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
        {/* Page Title */}
        <h2 className="text-2xl font-semibold mb-4">Users</h2>

        {/* User List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* User Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">john.doe@example.com</p>
            <p className="text-gray-600">Role: Admin</p>
          </div>
          {/* User Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">john.doe@example.com</p>
            <p className="text-gray-600">Role: Admin</p>
          </div>
          {/* User Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">john.doe@example.com</p>
            <p className="text-gray-600">Role: Admin</p>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8">
          {/* Pagination controls go here */}
          <nav className="flex justify-between items-center">
            <button className="text-gray-500" disabled>
              Previous
            </button>
            <span className="text-gray-700">Page 1 of 5</span>
            <button className="text-blue-500" disabled>
              Next
            </button>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Users;
