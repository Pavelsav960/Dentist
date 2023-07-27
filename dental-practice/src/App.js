import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection'; 
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';



const App = () => (
    <div>
        <Header />
        <HeroSection/>
        <AboutUs />
        <Services/>
        <Testimonials/>
        <ContactUs/>
        {/* other components will go here */}
    </div>
);

export default App;
