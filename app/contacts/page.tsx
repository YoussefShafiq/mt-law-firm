'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import PagesHero from '../components/PagesHero';
import Title from '../components/Title';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white">
            {/* Header Section */}
            <PagesHero title="Contact Us" description="Get in touch with our legal team today." />

            {/* Contact Information & Form */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-primary mb-2">Get In Touch</h2>
                                <p className="text-lg text-primary/80">We're here to help.</p>
                            </div>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Reach out to us through any of the following methods,
                                and we'll respond as soon as possible.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start p-6 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4 text-primary">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-1">Office Address</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            123 Legal Street, Suite 456<br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start p-6 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4 text-primary">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-1">Phone</h3>
                                        <p className="text-slate-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start p-6 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4 text-primary">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-1">Email</h3>
                                        <p className="text-slate-600">info@mtlawfirm.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start p-6 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4 text-primary">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary mb-1">Business Hours</h3>
                                        <p className="text-slate-600">
                                            Mon - Fri: 9:00 AM - 6:00 PM<br />
                                            Sat: 10:00 AM - 2:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                            <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6 text-primary">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold text-primary mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="consultation">Request Consultation</option>
                                        <option value="career">Career Opportunities</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg mt-4"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
