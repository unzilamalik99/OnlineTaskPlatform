import React from "react";

const Footer = () => {
  return (
    <footer className="text-white  bg-black py-4 mt-[150px] ">
      <div className="container mx-auto flex flex-col items-center">
        {/* <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/TaskReview" className="hover:text-gray-400">
            TaskReview
          </a>
          <a href="/AboutUs" className="hover:text-gray-400">
            About Us
          </a>
          <a href="/ContactUs" className="hover:text-gray-400">
            Contact Us
          </a>
        </div> */}
        <div className="mt-4">
          <p>
            &copy; {new Date().getFullYear()} Online Task Platform. All rights
            reserved.
          </p>
        </div>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
