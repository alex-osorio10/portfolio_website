import React from 'react';
import mhccLogo from './assets/images/mhcc_main_logo.png'; // Corrected path for MHCC logo
import psuLogo from './assets/images/psu_main_logo_green.png'; // Corrected path for PSU logo

function Experience() {
  return (
    <div className="experience-section">
      <h1 className="experience-title">EXPERIENCE</h1>
      <div className="experience-container">
        {/* Left side with the work experience title and scrollbox */}
        <div className="experience-left-container">
          <h2 className="sub-title">Work Experience</h2>
          <div className="experience-left">
            <div className="experience-entry">
              <h3><strong>Alticam Vision</strong> - <i>Intern</i> (June 2023 - Aug. 2023)</h3>
              <p>▪ Enhanced Alticam’s customer user interface for consumer usability.</p>
              <p>▪ Developed and optimized an extraction device for the user system, supporting entire subfolder extraction using C# and GitKraken.</p>
            </div>

            <div className="experience-entry">
              <h3><strong>IKEA</strong> - <i>Goods Flow Co-Worker</i> (Oct. 2021 - June 2024)</h3>
              <p>▪ Improved teamwork efficiency, contributing to an improved customer service experience.</p>
              <p>▪ Responsible for operating a delivery truck to facilitate seamless product deliveries.</p>
              <p>▪ Transported heavy boxes for customer pickups and deliveries, ensuring efficient handling.</p>
            </div>

            <div className="experience-entry">
              <h3><strong>FedEx Ground</strong> - <i>Package Handler</i> (Feb. 2023 - June 2023)</h3>
              <p>▪ Optimized package handling processes, ensuring a seamless and organized workflow.</p>
              <p>▪ Improved operational workflows by managing the transportation of heavy boxes for loading and unloading trucks.</p>
            </div>

            <div className="experience-entry">
              <h3><strong>Walmart</strong> - <i>Food and Consumables</i> (Feb. 2021 - July 2021)</h3>
              <p>▪ Elevated customer satisfaction and sales by delivering customer assistance and customer-friendly environment.</p>
              <p>▪ Arranged items on shelves and moved heavy crates of perishable food products to refrigerators.</p>
            </div>

            <div className="experience-entry">
              <h3><strong>Hood River Supply - ACE</strong> - <i>Service Station</i> (Nov. 2020 - Jan. 2021)</h3>
              <p>▪ Maintained store efficiency by providing a positive and efficient customer experience.</p>
              <p>▪ Pumped gas, stocked shelves, assisted customers, and sanitized restrooms.</p>
            </div>

            <div className="experience-entry">
              <h3><strong>Safeway</strong> - <i>Courtesy Clerk</i> (Oct. 2019 - Oct. 2020)</h3>
              <p>▪ Increased customer experience to increase sales growth.</p>
              <p>▪ Bagged groceries, retrieved shopping carts, sanitized restrooms, and stocked shelves.</p>
            </div>
          </div>
        </div>

        {/* Right side with the logos and graduation date */}
        <div className="experience-right">
          <h2 className="education-title">Education</h2>
          <div className="graduation-info">
            <div className="graduation-entry">
              <div className="college-text">
                <p className="college-name-major">
                  Mt. Hood Community College - Associate of Science Transfer in Computer Science
                </p>
                <p className="graduation-date">▪ Graduation Date: December 2023</p>
              </div>
              <img src={mhccLogo} alt="Mt. Hood Community College Logo" className="experience-logo" />
            </div>

            <div className="graduation-entry">
              <div className="college-text">
                <p className="college-name-major">
                  Portland State University - Bachelors of Computer Science
                </p>
                <p className="graduation-date">▪ Graduation Date: December 2025</p>
              </div>
              <img src={psuLogo} alt="Portland State University Logo" className="experience-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
