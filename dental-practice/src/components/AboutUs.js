// AboutUs.js

import React from 'react';
import './AboutUs.css'; 
import DAD from '../assets/DAD.jpg';

const AboutUs = () => (
  <section className="about-us">
    <div className="container">
      <div className="about-content">
        <div className="about-text">
          <h2>דואגים לכם לחיוך מושלם</h2>
          <p>ברוכים הבאים למרפאת שידנט , כאן החיוך שלכם הוא ההעדפה המרכזית שלנו !</p>
          <p>ד"ר סרגיי מציע למטופלים שלנו יותר מ-30 שנות ניסיון ברפואת שיניים כללית וקוסמטית .</p>
          <p>מטרתינו היא לספק לכם טיפול מקיף שמתייחס לצרכים הדחופים והארוכי טווח שלכם, ד"ר סרגיי וצוותו כאן כדי לספק לכם את הטיפול האכפתי והמקצועי שאתם ראויים לו.</p>
        </div>
        <div className="about-image">
          <img src={DAD} alt="שם הרופא" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
