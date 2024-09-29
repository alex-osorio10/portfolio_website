import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackgroundImage from './BackgroundImage';
import Skills from './Skills'; // Import the Skills component
import Experience from './Experience'; // Import the Experience component
import Projects from './Projects';
import ShpeComponent from './ShpeComponent'; // Import SHPE component

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Keep Header */}
        <main className="main-content">
          <BackgroundImage /> {/* Keep Background Image */}
          <Skills /> {/* Keep Skills Section */}
          <Experience /> {/* Add Experience Section */}
          <ShpeComponent /> {/* Newly Added SHPE Section */}
          <Projects /> {/* Projects Section */}
        </main>
        <Footer /> {/* Keep Footer */}
      </div>
    </Router>
  );
}

export default App;
