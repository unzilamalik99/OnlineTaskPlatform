import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrTask } from "react-icons/gr";
import { useAuth } from "../Context/authContext";
import { doSignOut } from "../Firebase/Auth";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const LogoutButton = ({ onLogout }) => {
  return (
    <button
      onClick={() => {
        doSignOut().then(() => {
          onLogout();
        });
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
};

const getRandomColor = () => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-indigo-500",
    "bg-pink-500",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const MobileNavbarItem = ({ to, children }) => {
  return (
    <Link to={to} className="block text-gray-600 hover:text-blue-600">
      {children}
    </Link>
  );
};

const DropdownItem = ({ to, children, onClick }) => {
  return (
    <div className="text-gray-600 hover:text-blue-600">
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </div>
  );
};

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const { userLoggedIn, getUsername, currentUser } = useAuth();
  const displayName = getUsername();
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = () => {
    setNavbar(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        {/* main header */}
        <div className="p-6">
          <div className="flex">
            <button
              onClick={toggleNavbar}
              className="text-black md:hidden text-2xl"
            >
              {navbar ? <MdOutlineClose /> : <IoMdMenu />}
            </button>
            <Link
              to="/"
              className="flex items-center text-black md:text-4xl text-xl md:pl-0 pl-[40px] font-bold"
            >
              <GrTask />
              <span className="ml-2">TaskPlatform</span>
            </Link>
            <ul className="md:hidden hover:text-blue-600 relative pl-[60px] md:pl-5">
              {userLoggedIn && currentUser ? (
                <div className="flex flex-col items-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="profileImageInput"
                  />
                  <label htmlFor="profileImageInput" className="cursor-pointer">
                    {image ? (
                      <img
                        src={image}
                        alt="Profile Preview"
                        className="rounded-full h-10 w-10 object-cover"
                      />
                    ) : (
                      <span
                        className={`flex items-center justify-center text-gray-800 ${getRandomColor()} rounded-full h-10 w-10`}
                      >
                        <span className="text-white font-bold text-lg">
                          {displayName && displayName[0].toUpperCase()}
                        </span>
                      </span>
                    )}
                  </label>
                  <span className="ml-2">{displayName}</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="Default Profile"
                    className="rounded-full h-10 w-10 object-cover"
                  />
                </div>
              )}

              {userLoggedIn && currentUser && (
                <div className="relative ml-[-40px] mt-[-40px]">
                  <button
                    onClick={toggleDropdown}
                    className="text-2xl md:text-4xl focus:outline-none"
                  >
                    <RiArrowDropDownLine />
                  </button>
                  <div
                    ref={dropdownRef}
                    className={`absolute ${
                      isOpen ? "block" : "hidden"
                    } bg-white border border-gray-300 rounded-md mt-2 z-20 transition-transform transform duration-300 ease-in-out p-4`}
                  >
                    <DropdownItem to="/Dashboard" onClick={closeDropdown}>
                      Dashboard
                    </DropdownItem>
                    <DropdownItem to="/ProfileSettings" onClick={closeDropdown}>
                      Profile Settings
                    </DropdownItem>
                    {/* Add more dropdown items as needed */}
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>

        {/* Mdblock */}
        <div
          className={`flex-1 justify-self-center md:block flex float-left md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-4 md:space-y-0 px-5">
            <MobileNavbarItem to="/Tasklistings">TaskListing</MobileNavbarItem>
            <MobileNavbarItem to="/TaskSubmission">
              TaskSubmission
            </MobileNavbarItem>
            <MobileNavbarItem to="/PaymentForm">PaymentForm</MobileNavbarItem>
            <MobileNavbarItem to="/TaskManagement">
              TaskManager
            </MobileNavbarItem>
            <MobileNavbarItem to="/OnlineWorkPlatform">
              Apply Now
            </MobileNavbarItem>
            <MobileNavbarItem to="/AboutUs">About</MobileNavbarItem>
            <MobileNavbarItem to="/ContactUs">Contact</MobileNavbarItem>
            {userLoggedIn ? (
              <LogoutButton onLogout={handleLogout} />
            ) : (
              <>
                <Link to="/Signup">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Register Now
                  </button>
                </Link>
                <Link to="/Login">
                  <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Login
                  </button>
                </Link>
              </>
            )}
            <li className="hover:text-blue-600 relative pl-5 md:pl-0">
              <div onClick={closeDropdown} className="flex items-center">
                {userLoggedIn && currentUser ? (
                  <div className="flex flex-col items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="profileImageInput"
                    />
                    <label
                      htmlFor="profileImageInput"
                      className="cursor-pointer"
                    >
                      {image ? (
                        <img
                          src={image}
                          alt="Profile Preview"
                          className="rounded-full h-10 w-10 object-cover"
                        />
                      ) : (
                        <span
                          className={`flex items-center justify-center text-gray-800 ${getRandomColor()} rounded-full h-10 w-10`}
                        >
                          <span className="text-white font-bold text-lg">
                            {displayName && displayName[0].toUpperCase()}
                          </span>
                        </span>
                      )}
                    </label>
                    <span className="ml-2">{displayName}</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt="Default Profile"
                      className="rounded-full h-10 w-10 object-cover"
                    />
                  </div>
                )}
              </div>

              {userLoggedIn && currentUser && (
                <div className="flex float-right relative mt-[-50px]">
                  <div className="absolute">
                    <button
                      onClick={toggleDropdown}
                      className="text-2xl md:text-4xl focus:outline-none"
                    >
                      <RiArrowDropDownLine />
                    </button>
                    <div
                      ref={dropdownRef}
                      className={`absolute ${
                        isOpen ? "block" : "hidden"
                      } bg-white border border-gray-300 rounded-md mt-2 z-[20] transition-transform transform duration-300 ease-in-out p-4`}
                    >
                      <MobileNavbarItem to="/Dashboard" onClick={closeDropdown}>
                        Dashboard
                      </MobileNavbarItem>
                      <MobileNavbarItem
                        to="/ProfileSettings"
                        onClick={closeDropdown}
                      >
                        Profile Settings
                      </MobileNavbarItem>
                      {/* Add more dropdown items as needed */}
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* mobile ResponsiveSidebar */}
        <div
          className={`flex-1 md:hidden justify-self-center z-[40] left-0 px-0 top-0 bg-white rounded-xl fixed shadow appearance-none w-80 h-[700px] border flex float-left md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul
            className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 px-7 pt-20"
            onClick={closeNavbar}
          >
            <MobileNavbarItem to="/" className="">
              <div>
                <h1 className="text-3xl font-semibold mb-5">TaskPlatform</h1>
              </div>
            </MobileNavbarItem>
            {/* <MobileNavbarItem to="/Dashboard">Admin</MobileNavbarItem> */}
            {!userLoggedIn && (
              <>
                <Link to="/Signup">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Register Now
                  </button>
                </Link>
                <Link to="/Login">
                  <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Login
                  </button>
                </Link>
              </>
            )}
            {userLoggedIn ? <LogoutButton onLogout={handleLogout} /> : null}
            <MobileNavbarItem to="/Tasklistings">TaskListing</MobileNavbarItem>
            <MobileNavbarItem to="/TaskSubmission">
              TaskSubmission
            </MobileNavbarItem>
            <MobileNavbarItem to="/PaymentForm">PaymentForm</MobileNavbarItem>
            <MobileNavbarItem to="/TaskManagement">
              TaskManagement
            </MobileNavbarItem>
            <MobileNavbarItem to="/OnlineWorkPlatform">
              Apply Now
            </MobileNavbarItem>
            <MobileNavbarItem to="/AboutUs">About Us</MobileNavbarItem>
            <MobileNavbarItem to="/ContactUs">Contact US</MobileNavbarItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
