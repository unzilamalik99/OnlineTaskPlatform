import React, { useState, useEffect } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  useEffect(() => {
    // Set a timer to hide the success message after 5 seconds
    let timer;
    if (isFormSubmitted) {
      timer = setTimeout(() => {
        setIsFormSubmitted(false);
      }, 4000); // 5000 milliseconds (5 seconds)
    }

    // Clear the timer on component unmount or when isFormSubmitted becomes false
    return () => clearTimeout(timer);
  }, [isFormSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your submission logic goes here
    console.log("Form data submitted:", { name, email, subject, message });

    // Optionally, you can clear the form fields after submission
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsFormSubmitted(true);
  };

  return (
    <div className="max-w-md  md:w-[1000px] mt-8 p-4   py-10 mx-5 bg-white rounded shadow-md md:mx-[400px] ">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4  ">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2 w-full"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-bold mb-2"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>
      {isFormSubmitted && (
        <div className="mt-4 p-2 bg-green-500 text-white rounded text-center">
          Your message has been sent! We will get back to you soon.
        </div>
      )}
    </div>
  );
};

export default ContactUs;
