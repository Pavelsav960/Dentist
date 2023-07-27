import React from 'react';
import './Testimonials.css'; // Importing the corresponding CSS file

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h2 className="section-title">What Our Patients Say</h2>
            <div className="testimonials-container">
                <div className="testimonial-card">
                    <blockquote>
                        "This is the best dental practice I've ever been to. The staff are friendly and the services are top notch."
                    </blockquote>
                    <p>- Patient's Name</p>
                </div>
                {/* Add more testimonials as needed */}
            </div>
        </section>
    );
}

export default Testimonials;
