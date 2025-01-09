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
      <h1 className="nondev"> Dev Experience</h1>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jr. Web Developer - Hello Box
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Paranaque City, Philippines
          </h4>
    <ul>
    <li>Create <b>10+ Landing Pages.</b></li>
    <li>Assist SEO Specialist in updating and managing the site health  <b>improving SEO score by 85 to 95 from 50.</b></li>
    <li>Assist in translating <b>3000+ lines of code from Chinese to English</b>, improving code readability and maintainability of global development team</li>
    </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Senior Web Developer / IT Head - PULP Live World
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Quezon City, Philippines
          </h4>
    <ul>
    <li>Designing, developing, and maintaining <b>20+ responsive web applications using HTML, CSS, JavaScript, and modern frameworks such as React, React TypeScript, and Laravel.</b></li>
    <li>Implementing efficient and scalable solutions, improving system performance by at least 50% to meet business needs while adhering to best practices and coding standards</li>
    <li>Managing and optimizing <b>3+ databases with up to 100,000 records, ensuring 100% data integrity and robust security.</b></li>
    </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <h1 className="nondev"> Non Dev Experience</h1>
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
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
            date="2020 - 2023"
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
            date="Jan 2023 - July 2023"
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
    </>
  );
}

export default Experience;