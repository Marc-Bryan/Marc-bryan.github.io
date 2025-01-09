import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://marc-bryan.github.io/" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
        <FacebookIcon />
        <a href="https://www.linkedin.com/in/marc-bryan-mata-aa7651241/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2025 Bryan Mata</p>
    </div>
  );
}

export default Footer;
