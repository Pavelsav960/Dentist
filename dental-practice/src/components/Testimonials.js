import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            testimonial: 'This is an excellent clinic with the best staff.'
        },
        {
            name: 'Eduard Kalminski',
            testimonial: 'מקום נחמד, נקי, העובדים סופר מקצועים! הרופא התקשר פעמיים אחרי הטיפול של כירורג ושאל איך אני מרגיש וגם בעל המקום התקשר וענה לשאלות . לא פגשתי יחס כזה בשום מקום. גם גישה נוחה , יש תחבורה ציבורית וחניה לרכבים בסביבה'
        },
        // add more testimonials as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="testimonials-section">
            <h2><span>המלצות</span></h2>
            <Slider {...settings}>
                {testimonials.map((item, index) => (
                    <div key={index} className="testimonial-card">
                        <p>{item.testimonial}</p>
                        <h3> {item.name}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Testimonials;
