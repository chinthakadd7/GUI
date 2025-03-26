import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/rooms" className="nav-link">Rooms</Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link">Dining</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 