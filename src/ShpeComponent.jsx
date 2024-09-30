import React from 'react';
import shpeMembers from './assets/images/members_about.png'; // Update the path
import shpeInvolvement from './assets/images/my_involvement.png'; // Update the path

const ShpeComponent = () => {
  return (
    <div className="shpe-section">
      {/* SHPE Title */}
      <h1 className="main-title">SHPE</h1>
      <div className="shpe-card">
        <div className="shpe-text">
          <h2>What is SHPE?</h2>
          <p>
            The Society of Hispanic Professional Engineers (SHPE) is a national non-profit that
            empowers and supports Hispanic, Latinx professionals and students in the fields of
            science, technology, engineering, and mathematics (STEM). The primary goals and impact
            of SHPE include professional development, educational support, community and networking,
            conferences, career opportunities, and leadership development.
          </p>
        </div>
        <div className="shpe-image">
          <img src={shpeMembers} alt="SHPE Members" />
        </div>
      </div>
      <div className="shpe-card">
        <div className="shpe-text">
          <h2>My Involvement</h2>
          <p>
            I am a Marketing and Social Media Officer, responsible for promoting SHPE at Portland State University 
            through social media and creating engaging flyers to boost visibility and member participation. I also 
            manage, design, and update Portland State’s SHPE websites. Moving forward, I plan to continue my involvement 
            with SHPE throughout my career, using my skills to support and uplift the Hispanic community.
          </p>
        </div>
        <div className="shpe-image">
          <img src={shpeInvolvement} alt="SHPE Involvement" />
        </div>
      </div>
    </div>
  );
};

export default ShpeComponent;
