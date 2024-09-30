import React from 'react';
// Import the gold images from the correct folder
import linkedinLogoGold from './assets/images/linkedin_logo_gold.png';
import githubLogoGold from './assets/images/github_logo_gold.png';
import instagramLogoGold from './assets/images/instagram_logo_gold.png';
import emailLogoGold from './assets/images/email_logo_gold.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* New Section: Join the Familia */}
        <h2>Contact</h2>
        <p>Feel free to reach out and send a message!</p>
        <a 
          href="mailto:shpe@pdx.edu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ideal-logic-button"
        >
          <img src={emailLogoGold} alt="Email Icon" className="social-icon" />
        </a>
        
        {/* Follow Us Section */}
        <h2>Links</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogoGold} alt="LinkedIn Logo" className="social-icon" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src={githubLogoGold} alt="GitHub Logo" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/yourprofile/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogoGold} alt="Instagram Logo" className="social-icon" />
          </a>
        </div>

        <p>"It's worth dreaming big when you are willing to put in the work that is needed to accomplish the goal you have."</p>
      </div>
    </footer>
  );
}

export default Footer;
