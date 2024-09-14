import React from "react";
import WEB2 from "../../assets/Projects/Team_Garuda.png";
import WEB1 from "../../assets/Projects/64Framez.png";
import WEB3 from "../../assets/About/img3.png";
import { Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/contact");
  };

  return (
    <Container
      maxWidth="lg"
      className="w-full h-auto gap-14 flex flex-col p-5 bg-[#171717] box-border mt-10 mb-16"
      id="projects"
    >
      <Typography className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl text-headColor font-poppins font-semibold">
        Projects
      </Typography>
      <div maxWidth="lg" className="">
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="w-2/3 md:w-1/2 lg:w-2/5 p-3 sm:p-2 lg:p-0 self-center">
            <img
              src={WEB2}
              alt="Team Garuda"
              className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 md:pl-14 flex flex-col justify-center self-center mt-7 md:mt-0">
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white text-center md:text-left">
              Team Garuda
            </h2>
            <div className="font-poppins text-sm md:text-base lg:text-lg font-light leading-snug text-textColor mt-5 text-center md:text-left px-10 md:px-0">
              <div className="mb-4">
                For Team Garuda, we created a brand-aligned, responsive frontend
                website using JavaScript and Tailwind CSS. The site’s design
                reflects their identity while ensuring optimal performance
                across all devices.
              </div>
              <div>
                This project showcases our expertise in crafting modern,
                user-friendly interfaces that deliver a seamless digital
                experience.
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:justify-start justify-center">
              <Link to={"https://teamgaruda.com/"}>
                <button className="bg-[#2D2D2D] mx-auto md:mx-0 text-white md:mr-6 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out hover:bg-headColor hover:text-backgroundColor">
                  View Project
                </button>
              </Link>
              <button
                className="bg-navlinkActiveColor text-headColor hover:bg-headColor hover:text-backgroundColor mt-4 md:mt-0 mx-auto md:mx-0 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between mt-16 md:mt-36">
          <div className="w-full md:w-1/2 lg:w-3/5 md:pr-14 flex flex-col justify-center self-center order-1 md:order-0 mt-7 md:mt-0">
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white text-center">
              64 Framez
            </h2>
            <div className="font-poppins text-sm md:text-base lg:text-lg font-light leading-snug text-textColor mt-5 text-center md:text-left px-10 md:px-0">
              <div className="mb-4">
                For 64 FRAMEZ, we developed a responsive website that aligns
                with their brand identity. Using ReactJS, Tailwind CSS, and
                Material UI, we ensured a seamless user experience across all
                devices and browsers.
              </div>
              <div>
                A robust backend was also implemented for secure contact form
                management. This project highlights our commitment to blending
                modern design with technical excellence.
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:justify-start justify-center">
              <Link to={"https://github.com/webortex-agency/WE080724X001.git"}>
                <button className="bg-[#2D2D2D] mx-auto md:mx-0 text-white md:mr-6 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out hover:bg-headColor hover:text-backgroundColor">
                  View Project
                </button>
              </Link>
              <button
                className="bg-navlinkActiveColor text-headColor hover:bg-headColor hover:text-backgroundColor mt-4 md:mt-0 mx-auto md:mx-0 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="w-2/3 md:w-1/2 lg:w-2/5 p-3 sm:p-2 lg:p-0 self-center order-0 md:order-1">
            <img style={{border:"2px solid #2D2D2D"}}
              src={WEB1}
              alt="64 Framez"
              className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between mt-16 md:mt-36">
          <div className="w-2/3 md:w-1/2 lg:w-2/5 p-3 sm:p-2 lg:p-0 self-center">
            <img
              src={WEB2}
              alt="YesTelugu"
              className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 md:pl-14 flex flex-col justify-center self-center mt-7 md:mt-0">
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white text-center md:text-left">
              YesTelugu
            </h2>
            <div className="font-poppins text-sm md:text-base lg:text-lg font-light leading-snug text-textColor mt-5 text-center md:text-left px-10 md:px-0">
              <div className="mb-4">
                For the YesTelugu brand, we developed a user-friendly and
                scalable content management system (CMS) website. The platform
                features intuitive content and blog creation tools, all built
                with a responsive design to ensure a smooth experience on any
                device.
              </div>
              <div>
                This project emphasizes our ability to deliver effective and
                adaptable web solutions tailored to the client’s needs.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between mt-16 md:mt-36">
          <div className="w-full md:w-1/2 lg:w-3/5 md:pr-14 flex flex-col justify-center self-center order-1 md:order-0 mt-7 md:mt-0">
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white text-center">
              Synaipsys
            </h2>
            <div className="font-poppins text-sm md:text-base lg:text-lg font-light leading-snug text-textColor mt-5 text-center md:text-left px-10 md:px-0">
              <div className="mb-4">
                We developed a responsive website for Synaipsys, ensuring it
                perfectly aligns with their brand identity. The website was
                built using JavaScript and Bootstrap, providing a modern,
                responsive design that works seamlessly across all devices.
              </div>
              <div>
                This project reflects our expertise in creating visually
                appealing and highly functional digital platforms.
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:justify-start justify-center">
              <Link to={"https://synaipsys.com/"}>
                <button className="bg-[#2D2D2D] mx-auto md:mx-0 text-white md:mr-6 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out hover:bg-headColor hover:text-backgroundColor">
                  View Project
                </button>
              </Link>
              <button
                className="bg-navlinkActiveColor text-headColor hover:bg-headColor hover:text-backgroundColor mt-4 md:mt-0 mx-auto md:mx-0 text-xs sm:text-sm lg:text-base px-8 py-3 rounded-lg transform transition-all duration-500 ease-in-out"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="w-2/3 md:w-1/2 lg:w-2/5 p-3 sm:p-2 lg:p-0 self-center order-0 md:order-1">
            <img
              src={WEB2}
              alt="Synaipsys"
              className="rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
