import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="a_link">
        <img src={project.image} alt="Project" />
      </a>
      <div className="projectDetails">
        <p>
          <b>Skills:</b> {project.skills}
        </p>

        {project.role && (
          <p>
            <b>Role:</b> {project.role}
          </p>
        )}

        {project.responsibilities && project.responsibilities.length > 0 && (
          <>
            <p>
              <b>Responsibilities:</b>
            </p>
            <ul>
              {project.responsibilities.map((responsibility, index) => (
                <li key={`${project.name}-${index}`}>{responsibility}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      {/* <GitHubIcon /> */}
    </div>
  );
}

export default ProjectDisplay;
