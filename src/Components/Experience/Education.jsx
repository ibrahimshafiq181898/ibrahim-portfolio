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
import uol from "../../assets/uol.jpg";
const Education = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="lg" src={uol} alt="user 1" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              University of Lahore
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-14">
            <Typography color="gray" className="font-semibold text-gray-600">
              BS Computer Science <br /> 2017 - 2021
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
