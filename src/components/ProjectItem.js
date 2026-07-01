import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link && link.startsWith("/")) {
      navigate(link);
      return;
    }

    if (link && link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }

    navigate("/project/" + id);
  };

  return (
    <div className="projectItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
