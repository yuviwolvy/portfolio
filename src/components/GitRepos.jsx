import React from "react";
import portfolio from "../assets/personal_website.svg";
import form from "../assets/forms.svg";
import pageBuilder from "../assets/website_builder.svg";
import weather from "../assets/weather.svg";

const repoData = [
  {
    title: "Portfolio",
    url: "https://github.com/yuviwolvy/portfolio.git",
    description:
      "My personal portfolio website showcasing my projects and skills. Basically the thing you are looking at right now!",
    image: portfolio,
  },
  {
    title: "Google Form Clone",
    url: "https://github.com/yuviwolvy/google-form-clone-or-lite.git",
    description:
      "A lightweight clone of Google Forms. Probably with less features.",
    image: form,
  },
  {
    title: "Page Builder",
    url: "https://github.com/yuviwolvy/page-builder.git",
    description: "A page builder for creating blog pages.",
    image: pageBuilder,
  },
  {
    title: "Weather Forecast Web App",
    url: "https://github.com/yuviwolvy/weather-forecast-web-app.git",
    description:
      "A web application that provides weather details for different locations.",
    image: weather,
  },
];

const RepoCard = ({ title, url, description, image }) => (
  <div
    className="card border-primary border-2"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "80% 80%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-body">{description}</p>
      <a href={url} className="button" target="_blank">
        View Repository
      </a>
    </div>
  </div>
);

const GitRepos = () => {
  return (
    <section id="my-work">
      <h1 className="block w-full text-6xl font-bold text-primary text-center mb-4">
        Checkout My Git Repos
      </h1>
      <div className="repo-grid">
        {repoData.map((repo, index) => (
          <RepoCard key={index} {...repo} />
        ))}
      </div>
    </section>
  );
};

export default GitRepos;
