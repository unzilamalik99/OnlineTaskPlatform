import { useState } from "react";
import { Link } from "react-router-dom";
import { GrTask } from "react-icons/gr";
const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#ffffff15] shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Use Link for navigation to home */}
              <Link to="/" className=" text-xl md:text-2xl font-bold">
                <span className=" flex flex-row gap-2">
                  {" "}
                  <GrTask className="md:text-3xl text-xl" />
                  TaskPlatform
                </span>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center  md:block flex float-left md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-5 md:space-y-0 px-10">
                <li className="text-gray-600 hover:text-blue-600">
                  {/* Use Link for navigation to home (already done above) */}
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/Tasklistings">TaskListing</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/TaskSubmission">TaskSubmission</Link>
                </li>

                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/PaymentForm">PaymentForm</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/TaskManagement">TaskManager</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/OnlineWorkPlatform">OnlineWorkPlatform</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/AboutUs">About</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/ContactUs">Contact</Link>
                </li>
                <Link to="/Signup">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Signup
                  </button>
                </Link>

                <Link to="/Login">
                  <button
                    // Use onClick for potential additional actions
                    className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Login
                  </button>
                </Link>
              </ul>
            </div>

            {/* ====responsive */}
            <div
              className={`flex-1 md:hidden justify-self-center left-0 px-0 top-0 bg-white rounded-xl fixed shadow appearance-none  w-80 h-[700px] border   flex float-left md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 px-7 pt-20">
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/" className="text-2xl font-bold ">
                    LOGO
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/Tasklistings">TaskListing</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/TaskSubmission">TaskSubmission</Link>
                </li>

                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/PaymentForm">PaymentForm</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/TaskManagement">TaskManagement</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/OnlineWorkPlatform">OnlineWorkPlatform</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/AboutUs">About Us</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/ContactUs">Contact US</Link>
                </li>
                <Link to="/Signup">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ">
                    Signup
                  </button>
                </Link>

                <Link to="/Login">
                  <button
                    // Use onClick for potential additional actions
                    className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
                  >
                    Login
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
