import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from './assets/images/background_image.png'; // Background image
import headshot from './assets/images/alex_headshot.png'; // Headshot image

const BackgroundImage = () => {
  return (
    <div
      className="background-image-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="left-content">
        <h1 className="name">Alex Diaz Martinez</h1>
        <p className="subtitle">Aspiring UI/UX Designer + Developer</p>
        <div className="social-buttons">
          <a href="https://linkedin.com" className="button linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> LinkedIn
          </a>
          <a href="https://github.com" className="button github">
            <FontAwesomeIcon icon={faGithub} className="social-icon" /> GitHub
          </a>
          <a href="https://instagram.com" className="button instagram">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" /> Instagram
          </a>
        </div>
      </div>
      <img src={headshot} alt="Headshot" className="headshot-image" />
    </div>
  );
};

export default BackgroundImage;
