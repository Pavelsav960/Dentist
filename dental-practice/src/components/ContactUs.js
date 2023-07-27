import React from 'react';
import './ContactUs.css'; // Importing the corresponding CSS file

const ContactUs = () => {
    return (
        <section id="contact">
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <p><strong>Address:</strong> Your Practice's Address</p>
                    <p><strong>Phone:</strong> Your Practice's Phone Number</p>
                    <p><strong>Email:</strong> Your Practice's Email Address</p>
                </div>
                <div className="contact-form">
                    <form>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name"/>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email"/>
                        <label for="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
