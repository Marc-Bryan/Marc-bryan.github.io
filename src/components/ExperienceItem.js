import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

/**
 * A reusable wrapper around VerticalTimelineElement that accepts plain data
 * so that adding a new timeline entry is as simple as pushing another object
 * into the data arrays.
 */
const ExperienceItem = ({
  date,
  title,
  location,
  responsibilities,
  icon,
  iconStyle,
  className,
}) => (
  <VerticalTimelineElement
    className={className}
    date={date}
    iconStyle={iconStyle}
    icon={icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    {location && (
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
    )}

    {responsibilities && responsibilities.length > 0 && (
      <ul>
        {responsibilities.map((r, idx) => (
          <li
            key={idx}
            dangerouslySetInnerHTML={{ __html: r }}
          />
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
);

export default ExperienceItem;
