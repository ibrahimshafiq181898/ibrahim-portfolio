/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import PPic from "../assets/Ibrahim.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";
import ResumePDF from "../assets/MuhammadIbrahim'sCV.pdf"; // Adjust the path based on your project structure

const Hero = () => {
  const handleDownloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = ResumePDF;
    downloadLink.download = "Muhammad_Ibrahim_Resume.pdf";
    downloadLink.click();
  };

  return (
    <div className="py-16 min-h-[80vh] md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-10 justify-center">
      <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0">
        <p className="text-2xl font-bold text-light-blue-700">Hey,</p>
        <p className="text-3xl md:text-5xl font-bold relative">
          I'm
          <span className="text-light-blue-500 ml-4 uppercase">
            Muhammad Ibrahim
          </span>
        </p>
        <p className="text-xl font-semibold relative uppercase">
          Frontend Developer
        </p>
        <p className="text-lg md:text-xl font-medium relative">
          I'm a Developer based in Pakistan. I have a passion to create web
          applications using different tech stacks.
        </p>

        <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5">
          <Link to={"/about"}>
            <Button
              variant="gradient"
              color="light-blue"
              className="flex gap-2 items-center"
            >
              <FaUserTie className="text-lg" />
              About Me
            </Button>
          </Link>

          <Button
            variant="gradient"
            color="light-blue"
            className="flex gap-2 items-center"
            onClick={handleDownloadResume}
          >
            <MdOutlineDocumentScanner className="text-white text-lg" />
            Resume
          </Button>
        </div>
      </div>
      <div>
        <img
          src={PPic}
          alt="Muhammad Ibrahim"
          className="rounded-full w-52 h-52 md:w-72 md:h-72 object-cover object-center shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
