import React from 'react';
import './Services.css'; // Importing the corresponding CSS file

const Services = () => {
    return (
        <section id="services">
            <h2 className="section-title">הטיפולים שלנו</h2>
            <div className="services-container">
                <div className="service-card">
                    <div className="service-icon">
                        <img src="/path-to-your-img/service1.png" alt="Service 1" />
                    </div>
                    <div className="service-info">
                        <h3>Service 1</h3>
                        <p>Description of Service 1</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <img src="/path-to-your-img/service2.png" alt="Service 2" />
                    </div>
                    <div className="service-info">
                        <h3>Service 2</h3>
                        <p>Description of Service 2</p>
                    </div>
                </div>
                {/* Add more services as required */}
            </div>
        </section>
    );
}

export default Services;
