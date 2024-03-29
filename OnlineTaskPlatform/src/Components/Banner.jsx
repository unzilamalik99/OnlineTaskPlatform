import React from "react";
import PopularServices from "./PopularServices";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="pb-10">
        <PopularServices />

        <div className="   justify-center rounded-lg   flex md:flex-row flex-col-reverse  md:justify-between item-center md:px-20  px-10 mx-auto max-w-[1240px] overflow-hidden  ">
          <div className=" float-left item-center ">
            <div data-aos="fade-right">
              <div>
                <div className="z-20 text-black font-bold text-2xl md:text-3xl pt-10 ">
                  Welcome To Online Task Platform
                </div>

                <div className=" text-xl md:5xl font-semibold pt-4 md:w-1/2">
                  Our Online Task Platform is a robust solution for managing
                  tasks effectively.
                </div>

                <div className=" ">
                  <p className=" text-justify py-5 md:w-1/2 font-serif">
                    With features like task creation, editing, completion
                    tracking, and collaboration, we aim to streamline your
                    workflow and enhance team productivity. Whether you are an
                    individual managing personal tasks or part of a team
                    handling complex projects, our platform provides the tools
                    you need to stay organized and focused on your goals..
                  </p>

                  <div className="py-5">
                    <Link to="/ContactUs">
                      <button className="bg-black text-white font-bold py-3 px-4 rounded">
                        ContactUs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
