import React from 'react';
import Banner from '../../components/Banner/Banner';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';
import ContactUs from '../../components/ContactUs/ContactUs';


const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedSection />
            <ContactUs />
        </div>
    );
};

export default Home;