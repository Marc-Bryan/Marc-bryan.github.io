import React from "react";
import "../styles/Home.css";

import { aboutInfo, skills } from "../helpers/HomeData";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>{aboutInfo.name}</h2>
        <div className="prompt">
          <p>{aboutInfo.description}</p>
          <div className="contact-container">
            {aboutInfo.contacts.map((c, idx) => {
              const Icon = c.icon;
              return (
                <a
                  key={idx}
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          {skills.map((section, idx) => (
            <li key={idx} className="item">
              <h2>{section.category}</h2>
              <span>
                {section.items.map((it, i) => (
                  <React.Fragment key={i}>
                    {it}
                    {i < section.items.length - 1 ? (
                      section.breakLines ? (
                        <br />
                      ) : (
                        ", "
                      )
                    ) : null}
                  </React.Fragment>
                ))}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Home;
