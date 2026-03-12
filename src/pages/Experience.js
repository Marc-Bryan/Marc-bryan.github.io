import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Home.css";

import ExperienceItem from "../components/ExperienceItem";
import {
  devExperience,
  nonDevExperience,
  educationExperience,
} from "../helpers/ExperienceData";

function Experience() {
  return (
    <>
      <div className="experience">
        <h1 className="nondev"> Dev Experience</h1>
        <VerticalTimeline lineColor="#3e497a">
          {devExperience.map((exp, idx) => (
            <ExperienceItem
              key={idx}
              date={exp.date}
              title={exp.title}
              location={exp.location}
              responsibilities={exp.responsibilities}
              icon={<WorkIcon />}
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              className="vertical-timeline-element--work"
            />
          ))}
        </VerticalTimeline>

        <h1 className="nondev"> Non Dev Experience</h1>
        <div className="experience">
          <VerticalTimeline lineColor="#3e497a">
            {nonDevExperience.map((exp, idx) => (
              <ExperienceItem
                key={idx}
                date={exp.date}
                title={exp.title}
                location={exp.location}
                responsibilities={exp.responsibilities}
                icon={<WorkIcon />}
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                className="vertical-timeline-element--work"
              />
            ))}
          </VerticalTimeline>
        </div>

        <h1 className="nondev">Education</h1>
        <VerticalTimeline lineColor="#3e497a">
          {educationExperience.map((exp, idx) => (
            <ExperienceItem
              key={idx}
              date={exp.date}
              title={exp.title}
              location={exp.location}
              responsibilities={exp.responsibilities}
              icon={<SchoolIcon />}
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              className="vertical-timeline-element--education"
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;