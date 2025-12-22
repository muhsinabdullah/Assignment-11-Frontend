import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
    return (
        <section className="bg-base-200 py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Contact Us
                    </h2>
                    <p className="text-base-content/70 max-w-xl mx-auto">
                        Have questions or need urgent help? Reach out to us anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Contact Form */}
                    <div className="bg-base-100 p-8 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-6">
                            Send Us a Message
                        </h3>

                        <form className="space-y-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered w-full"
                                    rows="4"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            <button className="btn btn-primary w-full">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-base-100 p-8 rounded-xl shadow-md flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-6">
                            Get in Touch
                        </h3>

                        <div className="space-y-5">

                            <div className="flex items-center gap-4">
                                <Phone className="text-red-500 w-6 h-6" />
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className="text-base-content/70">
                                        +880 1234 567 890
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail className="text-primary w-6 h-6" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-base-content/70">
                                        support@lifeblood.org
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <MapPin className="text-secondary w-6 h-6" />
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-base-content/70">
                                        Sylhet, Bangladesh
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;
