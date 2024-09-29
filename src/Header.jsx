import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <span className="logo-text">AOT</span>
      </div>

      <div className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/#upcoming-events" onClick={toggleMenu}>Events</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/about" onClick={toggleMenu}>About Me</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/officers" onClick={toggleMenu}>Portfolio</Link> {/* Modify this as needed */}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
