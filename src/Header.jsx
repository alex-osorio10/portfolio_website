import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    if (sectionId === 'top') {
      // Scroll to top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = document.querySelector('.header-container').offsetHeight;
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = sectionPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className="header-container">
      <div className="logo-container" onClick={() => handleScrollToSection('top')} style={{ cursor: 'pointer' }}>
        <span className="logo-text">AOT</span>
      </div>

      <nav className="nav-links">
        <ul className="nav-list">
          <li onClick={() => handleScrollToSection('skills')} style={{ cursor: 'pointer' }}>Skills</li>
          <li onClick={() => handleScrollToSection('experience')} style={{ cursor: 'pointer' }}>Experience</li>
          <li onClick={() => handleScrollToSection('shpe')} style={{ cursor: 'pointer' }}>SHPE</li>
          <li onClick={() => handleScrollToSection('projects')} style={{ cursor: 'pointer' }}>Projects</li>
        </ul>
      </nav>

      <div className="menu-button" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
        <span className="menu-icon">☰</span>
      </div>

      {menuOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-list">
            <li className="dropdown-item" onClick={() => { handleScrollToSection('skills'); toggleMenu(); }}>
              Skills
            </li>
            <li className="dropdown-item" onClick={() => { handleScrollToSection('experience'); toggleMenu(); }}>
              Experience
            </li>
            <li className="dropdown-item" onClick={() => { handleScrollToSection('shpe'); toggleMenu(); }}>
              SHPE
            </li>
            <li className="dropdown-item" onClick={() => { handleScrollToSection('projects'); toggleMenu(); }}>
              Projects
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
