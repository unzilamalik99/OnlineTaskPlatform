import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import Dashboard from "./Dashboard";
// import Dashboard from "./Dashboard";

const ResponsiveSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav
        className={`w-64 bg-gray-800 text-white p-4 ${
          isSidebarOpen ? "block" : "hidden md:block"
        }`}
      >
        {/* Your sidebar content goes here */}
        <Link
          to="/Dashboard"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link to="/Users" className="block py-2 px-4 text-sm hover:bg-gray-700">
          Users
        </Link>
        <Link
          to="/Product"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
        >
          Products
        </Link>
        {/* Add more links as needed */}
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden  text-black p-1 text-2xl"
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
