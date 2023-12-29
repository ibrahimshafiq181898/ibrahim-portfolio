import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-2 pb-10">
      <div className="text-justify p-6 md:w-1/2">
        <h1 className="text-2xl font-bold text-center mt-2 mb-5 border-b-2 border-light-blue-500">
          About Me
        </h1>
        <p className="text-lg md:text-xl">
          I am a passionate web developer with experience in building innovative
          and scalable web applications.
          <br />
          <br />
          My educational background includes Bachelor of Science in Computer
          Science from University of Lahore securing overall CGPA of 3.19.
          <br />
          <br />I have 2+ experience working as a
          <span className=" font-semibold mx-2 decoration-light-blue-600">
            Frontend Developer
          </span>
          at different companies where I developed web applications using
          React.JS,Typescript,Javascript,Ant Design and much more technologies.
          My skills include proficiency in HTML, CSS, JavaScript,Typescript,
          React.js, Redux, Tailwind CSS, Git, Github, Docker,Webflow,Figma to
          React.
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
