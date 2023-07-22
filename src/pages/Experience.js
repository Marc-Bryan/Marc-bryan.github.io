import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Home.css";

function Experience() {
  return (
    <>
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2008 - 2012"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              La Consolacion College, Caloocan
            </h3>
            <p> High School Diploma</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2012 - 2017"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Polytechnic University of the Philippines, San Juan
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's Degree
            </h4>

            <p> Business Administration</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer - Alpha Ran Private Server
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cebu, Philippines
            </h4>
            <p>Deploy/Maintain/Add functions to control panel</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jan 2023 - present"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer Course
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Refocus Digital Academy
            </h4>
            <p>
              Upskill in HTML, CSS/Bootstrap/Tailwind, Javascript/React/Node, PostgreSQL
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <h1 className="nondev"> Non Dev Experience</h1>
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Customer Service Representative - Philippine National Bank
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pasay City, Philippines
            </h4>
            <p>Provided exceptional customer service support to retail clients for online/mobile banking and cash management systems for corporate client users through various communication channels, including inbound calls, chat, and email</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Customer Service Officer - Banco De Oro Unibank Inc.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Quezon City, Philippines
            </h4>
            <p>Provided outstanding website navigation assistance and customer service support to online and mobile banking users, primarily through inbound calls</p>
          </VerticalTimelineElement>


        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;