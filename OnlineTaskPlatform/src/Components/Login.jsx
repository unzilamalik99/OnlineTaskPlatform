import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // ...

    if (loginSuccessful) {
      setAlertMessage({ type: "success", message: "Login successful!" });
    } else {
      setAlertMessage({ type: "error", message: "Invalid email or password" });
    }
  };

  return (
    <div className="container mx-auto px-4 md:pt-20 pt-10 md:w-[700px] ">
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
          {/* Add link to forgot password or registration here */}
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
