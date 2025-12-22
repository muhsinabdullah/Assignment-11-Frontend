import React from 'react';
import { HeartHandshake, Users, Search, ShieldCheck } from 'lucide-react';

const FeaturedSection = () => {
    return (
        <section className="bg-base-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Why Choose Our Platform
                    </h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        We connect donors and recipients quickly, safely, and reliably to save lives.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center">
                            <HeartHandshake className="mx-auto text-red-500 w-10 h-10 mb-3" />
                            <h3 className="card-title justify-center">
                                Life Saving Mission
                            </h3>
                            <p className="text-sm text-base-content/70">
                                Every registered donor helps save lives during emergencies.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center">
                            <Users className="mx-auto text-primary w-10 h-10 mb-3" />
                            <h3 className="card-title justify-center">
                                Trusted Community
                            </h3>
                            <p className="text-sm text-base-content/70">
                                Join a verified network of donors and volunteers across the country.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center">
                            <Search className="mx-auto text-secondary w-10 h-10 mb-3" />
                            <h3 className="card-title justify-center">
                                Easy Donor Search
                            </h3>
                            <p className="text-sm text-base-content/70">
                                Find blood donors quickly by group, district, and upazila.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center">
                            <ShieldCheck className="mx-auto text-success w-10 h-10 mb-3" />
                            <h3 className="card-title justify-center">
                                Safe & Secure
                            </h3>
                            <p className="text-sm text-base-content/70">
                                Your personal information is protected and used responsibly.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
