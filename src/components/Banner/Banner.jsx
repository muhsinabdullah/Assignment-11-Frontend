import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet } from 'lucide-react';
import bannerImg from '../../assets/images/Banner.png'; // 

const Banner = () => {
    return (
        <div
            className="hero min-h-[80vh] relative"
            style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="hero-content relative text-center text-white">
                <div className="max-w-xl">

                    {/* Animated Blood Drop */}
                    <div className="flex justify-center mb-6">
                        <Droplet
                            size={60}
                            className="text-red-500 animate-bounce"
                        />
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Join as a Blood Donor
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg text-gray-200 mb-8">
                        Your one donation can save lives.  
                        Register as a donor or search donors near you.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            to="/register"
                            className="btn btn-primary px-8"
                        >
                            Join as a Donor
                        </Link>

                        <Link
                            to="/search"
                            className="btn btn-outline btn-secondary px-8"
                        >
                            Search Donors
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
