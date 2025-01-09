import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Marc Bryan Mata</h2>
        <div className="prompt">
          <p>A web developer with both front-end and back-end experience.</p>
          <a href="https://www.linkedin.com/in/marc-bryan-mata-aa7651241/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a href="mailto:marc.bryan609@gmail.com"><EmailIcon /></a>
          <a href="https://marc-bryan.github.io/" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM,
              BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents, Vue
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Laravel, NodeJS, Next.js, ExpressJS, MySQL, MongoDB, MS SQL, PostgreSQL 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, PHP, HTML, SQL</span>
          </li>
          <li className="item">
            <h2>Soft Skills</h2>
            <span>Problem Solving<br/> Troubleshooting<br/> Strong Communication<br/> Interpersonal Communication<br/>  Recods Management <br/> Teamwork<br/> Conflict Resolution <br/> Leadership </span>
          </li>
          
        </ol>
      </div>
    </div>
  );
}

export default Home;
