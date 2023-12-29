/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import React from "react";
import PX from "../../assets/PackegX.jpg";
import MP from "../../assets/MP.jpg";
import xcdm from "../../assets/xcdm.jpg";
const WorkExp = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto ">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a href="https://www.nikeltoken.com" target="_blank">
                <Avatar size="lg" src={xcdm} alt="user 1" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col mt-[40px]">
              <Typography variant="h5" color="blue-gray">
                XCDM Limited - UK (Remote)
              </Typography>
              <Typography className=" my-2" color="gray">
                Essential Frontend Developer
                <br /> April 2023 - Present
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a href="https://token.marketplug.com" target="_blank">
                <Avatar size="lg" src={MP} alt="user 1" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col mt-[40px]">
              <Typography variant="h5" color="blue-gray">
                Marketplug Limited - UK (Remote)
              </Typography>
              <Typography className=" my-2" color="gray">
                Frontend Software Developer <br /> Feb 2022 - April 2023
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a href="https://packagex.io/" target="_blank">
                <Avatar size="lg" src={PX} alt="user 1" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col mt-[40px]">
              <Typography variant="h5" color="blue-gray">
                PackageX
              </Typography>
              <Typography className=" my-2" color="gray">
                React.js Developer Intern <br /> Sep 2021 - Dec 2021
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;
