import type { Metadata } from 'next';
import PagesHero from '../components/PagesHero';
import Title from '../components/Title';
import { FaBalanceScale, FaBullseye, FaEye, FaHandshake, FaLightbulb, FaQuoteLeft, FaUsers } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'About Us - MT Law Firm',
    description: 'Learn about MT Law Firm, our history, values, and commitment to providing exceptional legal services.',
};

export default function About() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <PagesHero title="About MT Law Firm" description="Dedicated to excellence in legal representation since our founding." />

            {/* About Us Section */}
            <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-1 lg:order-1">
                        <Title title="Our Story" subtitle="A Legacy of Excellence" text='left' />
                        <div className="space-y-6 text-lg text-slate-600 mt-6 leading-relaxed">
                            <p>
                                Founded in 1998, MT Law Firm began with a singular vision: to create a law practice that combines large-firm expertise with small-firm attention. Over the past two decades, we have grown from a boutique practice into a premier full-service law firm, yet our core commitment to our clients remains unchanged.
                            </p>
                            <p>
                                We believe that every client deserves not just legal representation, but a dedicated advocate who understands their unique situation. Our success is measured not just by cases won, but by the trust we earn and the lives we impact.
                            </p>
                            <p>
                                Today, we are proud to serve a diverse clientele, ranging from individuals and families to small businesses and major corporations, providing the same level of rigorous advocacy and personalized service to all.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                        <img
                            src="/herobg.jpg"
                            alt="Our Law Firm"
                            className="object-cover h-full w-full"
                        />
                        <div className="absolute inset-0 bg-primary/10"></div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                            <div className="flex items-center mb-6">
                                <div className="p-4 bg-blue-500 rounded-full mr-4">
                                    <FaBullseye className="text-3xl text-white" />
                                </div>
                                <h3 className="text-3xl font-bold">Our Mission</h3>
                            </div>
                            <p className="text-lg leading-relaxed text-blue-50">
                                To provide unparalleled legal services that empower our clients to overcome challenges and achieve their goals. We are dedicated to delivering justice through integrity, innovation, and unwavering advocacy, ensuring that every voice is heard and every right is protected.
                            </p>
                        </div>
                        <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                            <div className="flex items-center mb-6">
                                <div className="p-4 bg-blue-500 rounded-full mr-4">
                                    <FaEye className="text-3xl text-white" />
                                </div>
                                <h3 className="text-3xl font-bold">Our Vision</h3>
                            </div>
                            <p className="text-lg leading-relaxed text-blue-50">
                                To be the leading legal partner of choice, recognized globally for our excellence, ethical standards, and transformative impact on the legal profession. We envision a world where high-quality legal representation is accessible, transparent, and results-driven.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <Title title="Our Core Values" subtitle="The Principles That Drive Us" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <FaHandshake />, title: "Integrity", desc: "We uphold the highest ethical standards in every action and decision." },
                            { icon: <FaBalanceScale />, title: "Justice", desc: "We are relentless in our pursuit of fair and equitable outcomes." },
                            { icon: <FaLightbulb />, title: "Innovation", desc: "We embrace creative solutions to complex legal challenges." },
                            { icon: <FaUsers />, title: "Client-Centric", desc: "Your needs and success are at the heart of everything we do." },
                        ].map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                                <div className="inline-block p-4 bg-blue-50 rounded-full mb-6 group-hover:bg-blue-100 transition-colors">
                                    <div className="text-4xl text-primary">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                                <p className="text-slate-600">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <Title title="What Our Clients Say" subtitle="Client Testimonials" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Business Owner",
                                quote: "MT Law Firm provided exceptional legal advice during our company merger. Their attention to detail was impressive.",
                            },
                            {
                                name: "Michael Chen",
                                role: "Real Estate Investor",
                                quote: "I've worked with many lawyers, but none have been as responsive and knowledgeable as the team at MT Law Firm.",
                            },
                            {
                                name: "Emily Davis",
                                role: "Private Client",
                                quote: "They handled my case with compassion and professionalism. I couldn't have asked for a better outcome.",
                            },
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100">
                                <FaQuoteLeft className="text-4xl text-gold/40 mb-6" />
                                <p className="text-slate-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
