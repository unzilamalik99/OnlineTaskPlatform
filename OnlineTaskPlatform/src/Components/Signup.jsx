import React, { useState, useEffect } from "react";
import { doCreateUserWithEmailAndPassword } from "../Firebase/Auth";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";

function Signup() {
  const { userLoggedIn } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      password !== confirmPassword
    ) {
      setAlertMessage({
        type: "error",
        message: "Invalid input. Please check your details.",
      });
      return;
    }

    try {
      const userData = {
        name,
        email,
        password,
      };

      console.log("Before calling doCreateUserWithEmailAndPassword");

      const user = await doCreateUserWithEmailAndPassword(userData);

      console.log("After calling doCreateUserWithEmailAndPassword");

      setIsSignupSuccessful(true);
      setAlertMessage({ type: "success", message: "Signup successful!" });

      // Clear input fields after successful signup
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Clear success message after a delay
      const timeoutId = setTimeout(() => {
        setAlertMessage(null);
        // setIsSignupSuccessful(false); // Do not reset this here
      }, 2000);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      setIsSignupSuccessful(false);
      console.error("Error during signup:", error);
      setAlertMessage({ type: "error", message: "Error during signup" });
    }
  };

  useEffect(() => {
    // Clear success message after a delay
    if (isSignupSuccessful) {
      console.log("Inside useEffect");
      const timeoutId = setTimeout(() => {
        setAlertMessage(null);
        // setIsSignupSuccessful(false); // Do not reset this here
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isSignupSuccessful]);

  return (
    <>
      <div className="container mx-auto px-4 md:pt-20 pt-10 md:w-[700px]">
        <h2 className="text-2xl md:text-4xl pb-7 item-center text-center font-bold mb-4">
          Signup
        </h2>
        {alertMessage && (
          <div
            className={`p-4 border ${
              alertMessage.type === "success"
                ? "bg-green-100 border-green-400"
                : "bg-red-100 border-red-400"
            } rounded-md shadow`}
          >
            <p
              className={`text-${
                alertMessage.type === "success" ? "green" : "red"
              }-600 font-bold`}
            >
              {alertMessage.message}
            </p>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {password !== confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                Passwords do not match
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit" // add type="submit" to make it a submit button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Signup
            </button>
            <Link to="/login" className="pl-4 text-blue-500">
              Already have an account? Login here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
