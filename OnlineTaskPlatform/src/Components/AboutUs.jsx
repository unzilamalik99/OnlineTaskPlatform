import React from "react";
import PopularServices from "./PopularServices";
const AboutUs = () => {
  return (
    <>
      <PopularServices />
      <div className="container mx-auto mt-8 md:py-20  md:pb-40 py-10 p-7 md:px-[100px] bg-white">
        <h1 className="text-4xl font-semibold  item-center text-center mb-6">
          About Us
        </h1>
        <p className=" text-gray-700 leading-relaxed">
          Welcome to our Online Task Platform! We are a dedicated team
          passionate about providing efficient task management solutions. Our
          platform is designed to help you organize your tasks, collaborate with
          team members, and boost productivity.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Whether you're a freelancer managing your projects or part of a large
          team handling complex tasks, our platform is tailored to meet your
          needs. Join us on this journey of productivity and efficiency.
        </p>
        {/* Add more content as needed */}
      </div>
    </>
  );
};

export default AboutUs;
