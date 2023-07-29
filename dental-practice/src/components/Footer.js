import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Your Company Name. כל הזכויות שמורות.</p>
        </footer>
    );
}

export default Footer;
