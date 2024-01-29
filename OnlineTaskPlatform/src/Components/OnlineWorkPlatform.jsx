import React, { useState } from "react";

const OnlineWorkPlatform = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [skills, setSkills] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields before submission
    if (!fullName.trim() || !email.trim() || !skills.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Submit the application
    onSubmit({
      fullName,
      email,
      portfolioLink,
      skills,
      additionalInfo,
    });

    // Clear form fields and error message after submission
    setFullName("");
    setEmail("");
    setPortfolioLink("");
    setSkills("");
    setAdditionalInfo("");
    setErrorMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md md:mx-auto mt-8 py-10 mx-5 p-4 bg-white rounded shadow-md"
    >
      {errorMessage && (
        <div className="mb-4 p-2 bg-red-500 text-white rounded">
          {errorMessage}
        </div>
      )}

      <label className="block mb-2 text-gray-700">
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-2 text-gray-700">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-2 text-gray-700">
        Portfolio Link:
        <input
          type="url"
          value={portfolioLink}
          onChange={(e) => setPortfolioLink(e.target.value)}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-2 text-gray-700">
        Skills:
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-2 text-gray-700">
        Additional Information:
        <textarea
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
      >
        Apply Now
      </button>
    </form>
  );
};

export default OnlineWorkPlatform;
