/*
  This module exports arrays used by the experience page.  To add a new
  entry simply append an object with the following properties:
    - date: string (e.g. "2020 - 2021")
    - title: string (job/education title)
    - location: string (optional, shown as subtitle)
    - responsibilities: array of strings representing bullet points
      (HTML tags are allowed and will be rendered via dangerouslySetInnerHTML)
  The page automatically maps these lists to vertical timeline elements.
*/

// structured data for experiences

export const devExperience = [
  {
    date: "April 2025 - Present",
    title:
      "Frontend Engineer | Technical SEO Engineer - Samsung Research Institute Philippines",
    location: "Taguig City, Philippines",
    responsibilities: [
      "Spearhead<b> gRPC implementation to web improving API call speed 50%</b>",
      "Implement InxededDB <b>reducing api calls by 80% </b>",
      "Assist in translating <b>global language</b>, improving code readability and maintainability of global development team",
      "Championed SEO best practices, resulting in a <b> 20% increase in organic traffic and a 15% boost in search engine rankings.</b>",
      "Fix crawling and indexing issues,<b> improving website visibility and search engine ranking to number 1 </b> for targeted keywords",
      "Implemented internalization and localization strategies, <b>increasing global user engagement by 40% and expanding market reach.</b>",
    ],
  },
  {
    date: "Sep 2023 - March 2025",
    title: "Senior Web Developer | IT Head | SEO Manager - PULP Live World",
    location: "Quezon City, Philippines",
    responsibilities: [
      "Designing, developing, and maintaining <b>20+ responsive web applications using HTML, CSS, JavaScript, and modern frameworks such as React, React TypeScript, and Laravel.</b>",
      "Implementing efficient and scalable solutions, improving system performance by at least 50% to meet business needs while adhering to best practices and coding standards",
      "Managing and optimizing <b>3+ databases with up to 100,000 records, ensuring 100% data integrity and robust security.</b>",
      "Conduct comprehensive technical SEO audits using <b>Screaming Frog</b>, <b>Google Search Console</b>, and <b>Lighthouse</b>, and implement remediation for crawl, indexability, and schema issues.",
      "Lead on-page optimization: metadata, header structure, canonicalization, and internal linking to improve relevance and CTR.",
      "Develop and execute content & keyword strategy (topical clusters, gap analysis), collaborating with content teams to boost organic rankings.",
      "Implement and maintain structured data (Schema.org) and rich snippets to increase SERP feature coverage and click-through rates.",
      "Monitor organic performance with <b>GA4</b>, Search Console, and SEO tools; produce actionable monthly reports and prioritized recommendations.",
      "Optimize site architecture and crawl budget to improve indexation and distribute link equity effectively.",
      "Collaborate with engineering to improve Core Web Vitals, page speed, and mobile UX to meet Google performance targets.",
      "Manage backlink profile: outreach strategy, spam monitoring, and disavow processes to protect domain authority.",
      "Run SEO experiments (A/B tests on titles, meta descriptions, structured data) and iterate based on statistical results and KPIs.",
      "Create SEO guidelines, training, and documentation for product, content, and engineering teams to ensure scalable best practices.",
    ],
  },
  {
    date: "2021 - 2023",
    title: "Jr. Web Developer | Technical SEO Specialist - Hello Box",
    location: "Paranaque City, Philippines",
    responsibilities: [
      "Create <b>100+ Landing Pages.</b>",
      "Assist SEO Onpage/Offpage Specialist in updating and managing the site health <b>improving SEO score by 85 to 95 from 50.</b>",
      "Assist in translating <b>3000+ lines of code from Chinese to English</b>, improving code readability and maintainability of global development team",
      "Conduct technical SEO audits using <b>Screaming Frog</b>, <b>Google Search Console</b>, and <b>Lighthouse</b> to identify crawl, indexability, and schema issues and implement fixes.",
      "Fix index coverage and crawl errors, maintain sitemaps and robots.txt, and manage redirects and canonicalization to preserve link equity.",
      "Implement structured data (Schema.org) for articles, FAQs, and products to increase SERP feature coverage.",
      "Optimize JavaScript-rendered pages and server-side rendering where needed to improve crawlability and indexing.",
      "Monitor organic performance using <b>GA4</b> and Search Console; generate actionable reports and prioritize SEO tasks.",
      "Improve site speed and Core Web Vitals through image optimization, caching, and code-splitting in collaboration with engineering.",
      "Perform log-file and crawl analysis to optimize crawl budget and internal linking for better indexation.",
    ],
  },
  {
    date: "May 2017 - Sept 2018",
    title: "Web Developer - Alpha Ran Private Server",
    location: "Cebu, Philippines",
    responsibilities: [
      "Set up web servers and control panels specifically for games, with a specialization in Ran Online.",
      "Add or remove features as required, enhancing the functionality and usability of web application.",
      "Maintain code functionality and reliability to ensure smooth operation of web applications.",
    ],
  },
];

export const nonDevExperience = [
  {
    date: "2021 - 2023",
    title: "Customer Service Officer - Banco De Oro Unibank Inc.",
    location: "Quezon City, Philippines",
    responsibilities: [
      "Provided outstanding website navigation assistance and customer service support to online and mobile banking users, primarily through inbound calls",
    ],
  },
  {
    date: "2018 - 2021",
    title: "Customer Service Representative - Philippine National Bank",
    location: "Pasay City, Philippines",
    responsibilities: [
      "Provided exceptional customer service support to retail clients for online/mobile banking and cash management systems for corporate client users through various communication channels, including inbound calls, chat, and email",
    ],
  },
];

export const educationExperience = [
  {
    date: "Jan 2025 - Jan 2026",
    title:
      "Certified - Introduction to Critial Infrastructure Protection (ICIP)",
    location: "OPSWAT Digital Academy",
    responsibilities: [],
  },
  {
    date: "Jan 2023 - July 2023",
    title: "Web Developer Course",
    location: "Refocus Digital Academy",
    responsibilities: [
      "Upskill in HTML, CSS/Bootstrap/Tailwind, Javascript/React/Node, PostgreSQL",
    ],
  },
  {
    date: "June 2012 - May 2017",
    title: "Polytechnic University of the Philippines, San Juan",
    location: "Bachelor's Degree",
    responsibilities: ["Business Administration"],
  },
  {
    date: "2008 - 2012",
    title: "La Consolacion College, Caloocan",
    responsibilities: ["High School Diploma"],
  },
];
