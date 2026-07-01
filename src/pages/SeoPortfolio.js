import React from "react";
import "../styles/SeoPortfolio.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Remove the '#' to find the exact target ID
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
      }
    }
  }, [hash]);
  return null;
}

const seoCaseStudies = [
  {
    title: "Samsung Cloud",
    link: "https://samsungcloud.com",
    googleLink: "https://www.google.com/search?q=samsungcloud.com",
    image: "/seo-screenshots/seo-stock-1.jpg",
    summary:
      "SEO support for a technology-led brand website with a focus on making the About page discoverable and crawlable across multiple languages.",
    metrics: [
      { label: "Observed title", value: "Samsung Cloud" },
      { label: "SEO focus", value: "Multilingual crawlability" },
      { label: "Example URLs", value: "/en/about /fr/about" },
      { label: "Outcome", value: "Broader regional discoverability" },
      { label: "Lighthouse SEO", value: "100" },
    ],
    highlights: [
      "Improved crawlability for localized About pages",
      "Structured language-specific URL paths for English and French",
      "Supported better indexing and regional SEO visibility",
      "Strengthened internal linking around core support and policy content",
      "Aligned metadata and page structure with multilingual user intent",
    ],
  },
  {
    title: "Pulp Magazine",
    link: "https://pulpmagazine.com",
    googleLink: "https://www.google.com/search?q=pulpmagazine.com",
    image: "/seo-screenshots/seo-stock-2.jpg",
    summary:
      "Editorial SEO work aimed at strengthening topical authority and helping content surface for high-intent searches.",
    metrics: [
      { label: "Observed title", value: "PULP Magazine | Homepage" },
      { label: "Visible heading count", value: "16" },
      { label: "Visible links", value: "67" },
      { label: "Visible images", value: "22" },
      { label: "Lighthouse SEO", value: "92" },
    ],
    highlights: [
      "On-page SEO improvements for article and landing pages",
      "Content clustering and keyword targeting for editorial topics",
      "Better search visibility through stronger metadata and structure",
      "Improved internal linking between related articles and category hubs",
      "Enhanced clarity for search engines around the site’s content themes",
    ],
  },
  {
    title: "Pulp Live World",
    link: "https://pulpliveworld.com",
    googleLink: "https://www.google.com/search?q=pulpliveworld.com",
    image: "/seo-screenshots/seo-stock-3.jpg",
    summary:
      "SEO strategy for event-driven content with an emphasis on page performance, relevance, and organic discoverability.",
    metrics: [ 
      { label: "Observed title", value: "PULP Live World | Home Page" },
      { label: "Visible heading count", value: "23" },
      { label: "Visible links", value: "67" },
      { label: "Visible images", value: "44" },
      { label: "Lighthouse SEO", value: "91" },
    ],
    highlights: [
      "Event page optimization and content structure",
      "Improved crawlability and page experience for high-intent event pages",
      "Search-focused enhancements for key event and venue terms",
      "Strengthened internal linking around upcoming shows and related content",
      "Improved relevance signals for discoverability across event-driven queries",
    ],
  },
];

function SeoPortfolio() {
  ScrollToHashElement();
  return (
    <div className="seo-portfolio">
      <section className="seo-hero">
        <p className="seo-hero__eyebrow">
          Search Engine Optimization Portfolio
        </p>
        <h1>SEO work for Samsung Cloud, Pulp Magazine, and Pulp Live World</h1>
        <p>
          I build search-friendly websites and content systems that improve
          visibility, strengthen relevance, and support long-term organic
          growth. My work blends technical SEO, on-page optimization, content
          strategy, and clear reporting.
        </p>
        <div className="seo-hero__actions">
          <a  className="seo-btn seo-btn--primary" href="#/SEO-Portfolio#case-studies">
            Explore the work
          </a> 
        </div>  
      </section>

      <section className="seo-grid">
        <div className="seo-card">
          <h2>What I focus on</h2>
          <ul>
            <li>Technical SEO audits and site improvements</li>
            <li>Keyword-driven content and metadata optimization</li>
            <li>Internal linking, crawlability, and page structure</li>
            <li>Reporting with search console and analytics insights</li>
          </ul>
        </div>

        <div className="seo-card">
          <h2>Core strengths</h2>
          <div className="pill-list">
            <span className="pill">Technical SEO</span>
            <span className="pill">On-page optimization</span>
            <span className="pill">Content strategy</span>
            <span className="pill">Analytics &amp; reporting</span>
          </div>
          <p style={{ marginTop: "0.9rem" }}>
            The goal is always the same: make content easier to fi  nd, easier to
            rank, and easier to convert.
          </p>
        </div>
      </section>

      <section className="seo-grid" style={{ marginTop: "2rem" }}>
        <div className="seo-card">
          <h2>How I do a technical SEO audit</h2>
          <p>
            I approach technical SEO as a structured review of site health,
            crawlability, indexing, structure, and performance. The goal is to
            remove barriers that stop search engines from understanding and
            ranking your content effectively.
          </p>
          <ul>
            <li>
              Review crawl errors, redirects, robots directives, and indexation
              issues
            </li>
            <li>
              Audit site architecture, internal linking, and multilingual URL
              structure
            </li>
            <li>
              Check page speed, mobile usability, and Core Web Vitals issues
            </li>
            <li>
              Identify content gaps, metadata problems, and schema opportunities
            </li>
            <li>
              Provide practical recommendations with clear priorities and impact
            </li>
          </ul>
        </div>

        <div className="seo-card">
          <h2>What the audit delivers</h2>
          <div className="pill-list">
            <span className="pill">Crawlability</span>
            <span className="pill">Indexation</span>
            <span className="pill">Site structure</span>
            <span className="pill">Performance</span>
            <span className="pill">Content clarity</span>
            <span className="pill">Actionable fixes</span>
          </div>
          <p style={{ marginTop: "0.9rem" }}>
            Each audit is designed to uncover technical issues that affect
            visibility and turn them into a realistic roadmap for improvement.
          </p>
        </div>
      </section>

      <section className="case-studies" id="case-studies">
        <h2>Selected SEO case studies</h2>
        <div className="case-grid">
          {seoCaseStudies.map((project) => (
            <article className="case-card" key={project.title}>
              <img
                className="case-card__image"
                src={project.image}
                alt={`Screenshot of ${project.title}`}
              />
              <div className="case-card__body">
                <h3>{project.title}</h3>
                <div className="case-links">
                  <a
                    className="site-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.link.replace("https://", "")}
                  </a>
                  <a
                    className="site-link site-link--secondary"
                    href={project.googleLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google
                  </a>
                </div>
                <p>{project.summary}</p>
                <div className="case-metrics">
                  {project.metrics.map((metric) => (
                    <div className="metric-item" key={metric.label}>
                      <span className="metric-label">{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </div>
                  ))}
                </div>
                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SeoPortfolio;
