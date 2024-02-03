import React from "react";
import ResponsiveSidebar from "./ResponsiveSidebar";

const Product = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <ResponsiveSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
        {/* Page Title */}
        <h2 className="text-2xl font-semibold mb-4">Products</h2>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Product Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://lvivity.com/wp-content/uploads/2018/08/ecommerce-app.jpg"
              alt="Product"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Ecommerce App</h3>
            <p className="text-gray-600 mb-2">Category: Software Development</p>
            <p className="text-gray-600">Price: $99.99</p>
            {/* Add more product details as needed */}
          </div>
          {/* Product Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://img.freepik.com/premium-vector/online-banking-glassmorphic-design-neumorphic-elements-kit-mobile-app-ui-ux-gui-screens-set_9209-5141.jpg?w=360"
              alt="Product"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Portfolio App</h3>
            <p className="text-gray-600 mb-2">Category: Software Development</p>
            <p className="text-gray-600">Price: $99.99</p>
            {/* Add more product details as needed */}
          </div>

          {/* Add more product cards as needed */}
        </div>

        {/* Product Category Dropdown */}
        <div className="mt-6">
          <label className="text-sm font-semibold mb-2 block">
            Filter by Category:
          </label>
          <select className="p-2 border rounded w-full">
            <option value="all">All Categories</option>
            <option value="data-entry">Data Entry</option>
            <option value="writing">Writing</option>
            <option value="Translation">Translation</option>
            <option value="Transcription">Transcription</option>
            <option value="Social media management">
              Social Media Management
            </option>
            <option value="Customer service">Customer Service</option>
            <option value="Graphic design">Graphic Design</option>
            <option value="Web development">Web Development</option>
            <option value="Software development">Software Development</option>
          </select>
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

export default Product;
