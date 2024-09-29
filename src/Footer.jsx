import React from 'react';
// Import the images from the correct folder
import instagramLogo from './assets/images/instagram_logo_orange.png';
import facebookLogo from './assets/images/facebook_logo_orange.png';
import emailLogo from './assets/images/email_logo_orange.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* New Section: Join the Familia */}
        <h2>Join the Familia!</h2>
        <p>Discover how SHPE can empower you in your career and education!</p>
        <a 
          href="https://shpe.org"
          target="_blank" 
          rel="noopener noreferrer"
          className="ideal-logic-button"
        >
          Learn More
        </a>
        
        {/* Follow Us Section */}
        <h2>Follow Us!</h2>
        <div className="social-media">
          <a href="https://www.instagram.com/psu_shpe/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram Logo" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/PSUSHPE/" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook Logo" className="social-icon" />
          </a>
          <a href="mailto:shpe@pdx.edu" target="_blank" rel="noopener noreferrer">
            <img src={emailLogo} alt="Email Icon" className="social-icon" />
          </a>
        </div>

        <p>"It's worth dreaming big when you are willing to put in the work that is needed to accomplish the goal you have."</p>
      </div>
    </footer>
  );
}

export default Footer;
