import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackgroundImage from './BackgroundImage';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import ShpeComponent from './ShpeComponent';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Keep Header */}
        <main className="main-content">
          <BackgroundImage /> {/* Keep Background Image */}
          <section id="skills">
            <Skills /> {/* Keep Skills Section */}
          </section>
          <section id="experience">
            <Experience /> {/* Add Experience Section */}
          </section>
          <section id="shpe">
            <ShpeComponent /> {/* Newly Added SHPE Section */}
          </section>
          <section id="projects">
            <Projects /> {/* Projects Section */}
          </section>
        </main>
        <Footer /> {/* Keep Footer */}
      </div>
    </Router>
  );
}

export default App;
