import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  doSignWithEmailAndPassword,
  doSignInWithGoogle,
} from "../Firebase/Auth";
import { useAuth } from "../Context/authContext";

function Login() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleLogin = async () => {
    try {
      // Assume you have a function to fetch user data, replace it with your actual logic
      const userData = await fetchUserData(email); // Replace with your actual function
      loginUser(userData);

      navigate("/dashboard");
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: "Failed to fetch user data",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);

      try {
        await doSignWithEmailAndPassword(email, password);
        handleLogin();
      } catch (error) {
        setIsSigningIn(false);
        setAlertMessage({
          type: "error",
          message: "Invalid email or password",
        });
      }
    }
  };

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);

      try {
        await doSignInWithGoogle();
        handleLogin();
      } catch (error) {
        setIsSigningIn(false);
        setAlertMessage({
          type: "error",
          message: "Failed to sign in with Google",
        });
      }
    }
  };

  return (
    <div className="container mx-auto px-4 md:pt-20 pt-10 md:w-[700px]">
      {userLoggedIn && <Link to="/dashboard" replace={true} />}
      <h2 className="text-2xl md:text-4xl pb-7 font-bold mb-4 item-center text-center">
        Login
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 md:pb-[100px] pb-20 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
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
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <button
            onClick={handleSignInWithGoogle}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Sign in with Google
          </button>
        </div>
      </form>
      {alertMessage && (
        <div className={`alert alert-${alertMessage.type}`}>
          {alertMessage.message}
        </div>
      )}
    </div>
  );
}

export default Login;
