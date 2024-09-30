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
        <h1 className="name">Alex Osorio Trujillo</h1>
        <p className="subtitle">Aspiring UI/UX Designer + Developer</p>
      </div>
      <div className="social-icons">
        <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com" className="social-icon" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <img src={headshot} alt="Headshot" className="headshot-image" />
    </div>
  );
};

export default BackgroundImage;
