import React from 'react';
import './Header.css'; // Assuming you will use CSS for styling. Create a Header.css file in the same folder.
import shidentLogo from '../assets/shidentLogo.jpg';

const Header = () => (
    <header className="header">
        <div className="logo-container">
            <img src={shidentLogo} alt="Dad's Dental Practice" />
        </div>
        <div className="menu-container">
            <nav className="nav-menu">
                <a href="#about">עלינו</a>
                <a href="#services">סוגי טיפולים</a>
                <a href="#testimonials">המלצות</a>
                <a href="#contact">צרו קשר</a>
            </nav>
        </div>
        <div className="call-container">
            <a href="tel:1234567890" className="call-button">חייגו עכשיו</a>
        </div>
    </header>
);



export default Header;
