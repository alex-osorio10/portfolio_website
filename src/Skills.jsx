import React from 'react';
import CppLogo from './assets/images/logo_gold_c++.png';  // C++
import PythonLogo from './assets/images/logo_gold_python.png';  // Python
import JsLogo from './assets/images/logo_gold_js.png';  // JavaScript
import ReactLogo from './assets/images/logo_gold_react.png';  // React
import CommunicationLogo from './assets/images/logo_gold_communication.png';  // Communication
import TeamworkLogo from './assets/images/logo_gold_teamwork.png';  // Teamwork
import AdaptabilityLogo from './assets/images/logo_gold_adaptability.png';  // Adaptability
import WorkEthicLogo from './assets/images/logo_gold_work_ethic.png';  // Work Ethic
import DesignLogo from './assets/images/logo_gold_design.png';  // Design
import BilingualLogo from './assets/images/logo_gold_bilingual.png';  // Bilingual

const Skills = () => {
  return (
    <section className="skills-section">
      {/* "SKILLS" Header */}
      <h1 className="skills-header">SKILLS</h1>

      {/* Technical Skills */}
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        <div>
          <img src={CppLogo} alt="C++" className="skill-image" />
          <p>C++</p>
        </div>
        <div>
          <img src={PythonLogo} alt="Python" className="skill-image" />
          <p>Python</p>
        </div>
        <div>
          <img src={JsLogo} alt="JavaScript" className="skill-image" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={ReactLogo} alt="React" className="skill-image" />
          <p>React</p>
        </div>
      </div>

      {/* Soft Skills */}
      <h2 className="skills-title">Soft Skills</h2>
      <div className="skills-grid soft-skills-grid">
        <div>
          <img src={CommunicationLogo} alt="Communication" className="skill-image" />
          <p>Communication</p>
        </div>
        <div>
          <img src={TeamworkLogo} alt="Teamwork" className="skill-image" />
          <p>Teamwork</p>
        </div>
        <div>
          <img src={AdaptabilityLogo} alt="Adaptability" className="skill-image" />
          <p>Adaptability</p>
        </div>
        <div>
          <img src={WorkEthicLogo} alt="Work Ethic" className="skill-image" />
          <p>Work Ethic</p>
        </div>
        <div>
          <img src={DesignLogo} alt="Design" className="skill-image" />
          <p>Design</p>
        </div>
        <div>
          <img src={BilingualLogo} alt="Bilingual" className="skill-image" />
          <p>Bilingual</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
