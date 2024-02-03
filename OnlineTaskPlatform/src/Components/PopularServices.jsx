import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularServices = () => {
  const featureSliderData = [
    {
      title: "Task Management",
      description:
        "Efficiently organize and track your tasks with our powerful task management system.",
      image:
        "https://media.istockphoto.com/id/1183532406/vector/brainstorming-innovation-idea-process-and-creative-thinking-concept-with-light-bulb-lamp-for.jpg?s=612x612&w=0&k=20&c=bsbn1JJJrieiWjLVmzeOJb5zuArx0fnCu__yY-UHkNY=",
    },
    {
      title: "Collaboration Tools",
      description:
        "Facilitate teamwork by using collaboration tools to share ideas and updates seamlessly.",
      image:
        "https://media.istockphoto.com/id/1170256468/vector/crowd-funding-an-idea-of-a-business-person.jpg?s=612x612&w=0&k=20&c=eHOft2RwQZKrACTxkqaiY6zp8IqtPq7czwQpWdGORsk=",
    },
    {
      title: "Time Tracking",
      description:
        "Keep track of your work hours and enhance productivity with our time tracking feature.",
      image:
        "https://media.istockphoto.com/id/1334613118/vector/agenda-for-meeting-list-of-event-with-remind-flat-template-of-schedule-with-time-for.jpg?s=612x612&w=0&k=20&c=tsUnWIkmBlMNWeHN4-uqbjO6GFmENXnOFoCd11J8OHw=",
    },
    {
      title: "Project Management",
      description:
        "Effortlessly manage your projects from start to finish with our project management tools.",
      image:
        "https://media.istockphoto.com/id/512827216/vector/man-presenting-report.jpg?s=612x612&w=0&k=20&c=bhEjQS0ftFJXWlpyQ2CspeJIPLURjf1AHyPlt8gCl6w=",
    },
    {
      title: "Communication Hub",
      description:
        "Streamline communication within your team using our centralized communication hub.",
      image:
        "https://media.istockphoto.com/id/1151213839/vector/search-engine-cartoon.jpg?s=612x612&w=0&k=20&c=p7OleWs0ebb8TTe5sQdSF3-4w6NWnTuKuHBmz6iNVD0=",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-sky-100 ">
        <main className="container mx-auto py-6 ">
          {/* Page Title */}
          <h2 className="text-3xl font-semibold mb-4 px-5">Popular Services</h2>

          {/* Feature Slider */}
          <Slider {...sliderSettings} className="mb-8 ml-10">
            {featureSliderData.map((item, index) => (
              <div key={index} className="relative mx-4 lg:mr-4 ">
                {" "}
                {/* Added lg:mr-4 for margin on larger screens */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 md:h-60 lg:h-80 object-cover rounded-xl shadow-md pl-5 "
                />
                <div className="absolute inset-0   "></div>
                <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-4 pl-10">
                  <h3 className="text-lg font-bold mb-2 ">{item.title}</h3>
                  <p className="text-sm font-semibold">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </main>
      </div>
    </>
  );
};

export default PopularServices;
