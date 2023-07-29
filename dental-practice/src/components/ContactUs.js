import React from 'react';
import './ContactUs.css';

const ContactUs = () => (
    <section className="contact-section">
        <div className="contact-form">
            {/* <h2>Contact Us</h2> */}
            <form>
            <div className="form-group-row">
                <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder="מספר טלפון" tabindex="2"/>
                </div>
                <div className="form-group">
                <input type="text" id="name" name="name" placeholder="שם מלא" tabindex="1"/>
                </div>
            </div>
            <div className="form-group">
                <input type="email" id="email" name="email" placeholder="אימייל" tabindex="3"/>
            </div>
            <div className="form-group">
                <textarea id="message" name="message" placeholder="הודעה" tabindex="4"></textarea>
            </div>
            <div className="form-group">
                <input type="submit" value="שלח"/>
            </div>
            </form>
        </div>
        <div className="contact-details">
            <h3>צרו קשר</h3>
            <p><strong>טלפון:</strong> 08-6231245</p>
            <p><strong>אימייל:</strong> Your email address</p>
            <p><strong>כתובת:</strong> רח‘ העצמאות 40, באר-שבע (קומה 4)</p>
            <p><strong>ימים ושעות פתיחה:</strong> Your opening days and hours</p>
        </div>
    </section>
);

export default ContactUs;
