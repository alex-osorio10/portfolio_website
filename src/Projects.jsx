import React from 'react';
import unfazedGif from './assets/images/GIF/unfazed.GIF';
import osorioGif from './assets/images/GIF/osorio.GIF';
import shpeGif from './assets/images/GIF/shpe.GIF';
import spaceScraperGif from './assets/images/GIF/space_scraper.GIF';

const Projects = () => {
  return (
    <div className="projects-section">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-container">

        {/* Unfazed Project Card */}
        <div className="project-card">
          <img src={unfazedGif} alt="Unfazed Project GIF" className="project-gif" />
          <h3 className="project-title">Unfazed - Web Development</h3>
          <p className="project-description">
            I constructed an e-commerce website that lists clothing for a friend’s clothing brand. I used HTML, CSS, and JavaScript.
          </p>
          <div className="project-buttons">
            <a href="https://github.com/link-to-unfazed" className="project-button" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://link-to-unfazed-website" className="project-button" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>

        {/* Osorio Project Card */}
        <div className="project-card">
          <img src={osorioGif} alt="Osorio Project GIF" className="project-gif" />
          <h3 className="project-title">Osorio - Web Development</h3>
          <p className="project-description">
            I developed a streaming service clone with user authentication and live movie data from TMDB. I used React and Firebase.
          </p>
          <div className="project-buttons">
            <a href="https://github.com/link-to-osorio" className="project-button" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://link-to-osorio-website" className="project-button" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>

        {/* SHPE Project Card */}
        <div className="project-card">
          <img src={shpeGif} alt="SHPE Project GIF" className="project-gif" />
          <h3 className="project-title">PSU SHPE - Web Development</h3>
          <p className="project-description">
            I developed an informative website for my Society of Hispanic Professional Engineers (SHPE) club. I used React, Node.js, JavaScript, HTML, and CSS.
          </p>
          <div className="project-buttons">
            <a href="https://github.com/link-to-shpe" className="project-button" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://link-to-shpe-website" className="project-button" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>

        {/* Space Scraper Project Card */}
        <div className="project-card">
          <img src={spaceScraperGif} alt="Space Scraper Project GIF" className="project-gif" />
          <h3 className="project-title">Space Scraper - Virtual Reality</h3>
          <p className="project-description">
            I created an interactive virtual reality game featuring precise hand control and collision detection. I used Unity and C# for development.
          </p>
          {/* No buttons for Space Scraper */}
        </div>

      </div>
    </div>
  );
};

export default Projects;
