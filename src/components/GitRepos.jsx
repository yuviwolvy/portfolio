import React from "react";

const repoData = [
  {
    title: "Portfolio",
    url: "https://github.com/yuviwolvy/portfolio.git",
    description:
      "My personal portfolio website showcasing my projects and skills.",
  },
  {
    title: "Google Form Clone",
    url: "https://github.com/yuviwolvy/google-form-clone-or-lite.git",
    description:
      "A lightweight clone of Google Forms with basic functionality.",
  },
  {
    title: "Page Builder",
    url: "https://github.com/yuviwolvy/page-builder.git",
    description: "A drag-and-drop page builder for creating web pages easily.",
  },
  {
    title: "Weather Forecast Web App",
    url: "https://github.com/yuviwolvy/weather-forecast-web-app.git",
    description:
      "A web application that provides weather forecasts for different locations.",
  },
];

const RepoCard = ({ title, url, description }) => (
  <div className="card">
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-body">{description}</p>
      <a href={url} className="button">
        View Repository
      </a>
    </div>
  </div>
);

const GitRepos = () => (
  <div className="repo-grid">
    {repoData.map((repo, index) => (
      <RepoCard key={index} {...repo} />
    ))}
  </div>
);

export default GitRepos;
