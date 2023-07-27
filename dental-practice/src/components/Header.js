import React from 'react';
import './Header.css'; // Assuming you will use CSS for styling. Create a Header.css file in the same folder.

const Header = () => (
    <header className="header">
        <div className="logo-container">
            {/* Replace with your actual logo */}
            <img src="logo.png" alt="Dad's Dental Practice" />
        </div>
        <nav className="nav-menu">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
);

export default Header;
