import React, { memo } from 'react';
import './Navbar.css';
const NavbarComponent: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-item1">
        <a>Chat with us</a>
        <p>+042 336 775 664</p>
        <p>info@freshnesecom.com</p>
      </div>
      <div className="navbar-item2">
        <a>Blog</a>
        <a>About Us</a>
        <a>Careers</a>
      </div>
    </div>
  );
};

export const Navbar = memo(NavbarComponent);
