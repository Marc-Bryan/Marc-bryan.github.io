/*
  Structured data for the home page.  To modify the content of the landing
  page just edit the objects below.  Each piece is rendered by mapping over the
  arrays so adding or removing elements only requires changing JSON, not JSX.
*/

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

export const aboutInfo = {
  name: "Marc Bryan Mata",
  description: "A software engineer with both front-end and back-end experience.",
  contacts: [
    {
      href: "https://www.linkedin.com/in/marc-bryan-mata-aa7651241/",
      icon: LinkedInIcon,
      external: true,
      label: "LinkedIn",
    },
    {
      href: "mailto:marc.bryan609@gmail.com",
      icon: EmailIcon,
      external: false,
      label: "Email",
    },
    {
      href: "https://marc-bryan.github.io/",
      icon: GithubIcon,
      external: true,
      label: "GitHub",
    },
  ],
};

// skills list – keep each category as an array of strings.  The renderer will
// join most of them with commas; categories that want line breaks can specify
// `breakLines: true`.
export const skills = [
  {
    category: "Front-End",
    items: [
      "React-JS",
      "Redux",
      "React Native",
      "Next-js",
      "NPM",
      "gRPC",
      "Bootstrap",
      "MaterialUI",
      "Yarn",
      "TailwindCSS",
      "StyledComponents",
      "Vue",
    ],
  },
  {
    category: "Back-End",
    items: [
      "Laravel",
      "NodeJS",
      "Nest.js",
      "ExpressJS",
      "MySQL",
      "MongoDB",
      "MS SQL",
      "PostgreSQL",
    ],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "HTML", "SQL", "CSS"],
  },
  {
    category: "Soft Skills",
    items: [
      "Problem Solving",
      "Troubleshooting",
      "Strong Communication",
      "Interpersonal Communication",
      "Records Management",
      "Teamwork",
      "Conflict Resolution",
      "Leadership",
    ],
    breakLines: true,
  },
];
