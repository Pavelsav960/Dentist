// AboutUs.js

import React from 'react';
import './AboutUs.css'; // Assuming you have an associated CSS file

const AboutUs = () => (
  <section className="about-us">
    <div className="container">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <p>With over 30 years of experience, our dental practice offers a blend of expertise and caring approach. We are committed to providing our patients with high-quality dental care in a comfortable environment.</p>
          <p>Our team uses the latest dental technologies and follows the highest standards of dental care to ensure a positive and comfortable experience for our patients.</p>
          <p>We offer a variety of dental services from regular check-ups and cleanings to more complex procedures. Our aim is to help our patients maintain healthy smiles that they can be proud of!</p>
        </div>
        <div className="about-image">
          {/* Assuming you have an image in your 'public' directory named 'about-us.jpg' */}
          <img src="about-us.jpg" alt="About us" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
