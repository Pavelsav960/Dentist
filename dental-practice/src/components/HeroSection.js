import React from 'react';
import './HeroSection.css'; // Importing the corresponding CSS file

const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>ד"ר סבלייב סרגיי </h1>
                    <h2>רופא שיניים , באר שבע</h2>
                    <ul className="hero-bullet-points">
                        <li>למעלה מ-30 שנה של ניסיון</li>
                        <li>שירותי שיניים באיכות גבוהה</li>
                        <li>צוות ידידותי ומקצועי</li>
                        <li>טכנולוגיה מתקדמת</li>
                    </ul>
                    <a href="#contact" className="appointment-btn">קבע תור</a>
                </div>
            </div>
        </header>
    );
}

export default Hero;
