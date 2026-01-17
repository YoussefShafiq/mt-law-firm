import type { Metadata } from 'next';
import PagesHero from '../components/PagesHero';
import Title from '../components/Title';
import { FaBuilding, FaBalanceScale, FaHome, FaUsers, FaBriefcase, FaLightbulb } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Our Experiences - MT Law Firm',
    description: 'Explore our successful case studies and legal experiences across various practice areas.',
};

export default function Experiences() {
    const experiences = [
        {
            title: 'Corporate Law',
            description: 'Successfully represented numerous corporations in complex mergers, acquisitions, and corporate governance matters.',
            icon: <FaBuilding />,
        },
        {
            title: 'Civil Litigation',
            description: 'Achieved favorable outcomes in high-stakes civil litigation cases, protecting our clients\' interests.',
            icon: <FaBalanceScale />,
        },
        {
            title: 'Real Estate Law',
            description: 'Guided clients through intricate real estate transactions and property disputes with expertise.',
            icon: <FaHome />,
        },
        {
            title: 'Family Law',
            description: 'Provided compassionate and effective representation in sensitive family law matters.',
            icon: <FaUsers />,
        },
        {
            title: 'Employment Law',
            description: 'Defended both employers and employees in workplace disputes and employment contract negotiations.',
            icon: <FaBriefcase />,
        },
        {
            title: 'Intellectual Property',
            description: 'Protected clients\' intellectual property rights through strategic counsel and litigation.',
            icon: <FaLightbulb />,
        },
    ];

    return (
        <div className="bg-white">
            {/* Header Section */}
            <PagesHero title="Our Experiences" description="A proven track record of success across diverse practice areas." />

            {/* Introduction */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Title title="Decades of Legal Excellence" subtitle="Our Track Record" />
                        <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                            Our firm has built a reputation for delivering exceptional results across a wide range
                            of legal matters. With years of experience and countless successful cases, we bring
                            unparalleled expertise to every client engagement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Practice Areas */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <Title title="Practice Areas" subtitle="Specialized Legal Expertise" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((experience, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 border border-slate-100 group">
                                <div className="text-4xl mb-6 text-primary group-hover:scale-110 transition-transform w-fit">{experience.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-primary">{experience.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{experience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Need Legal Assistance?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let our experienced team help you navigate your legal challenges with confidence.
                    </p>
                    <a
                        href="/contacts"
                        className="bg-white hover:bg-slate-100 text-primary px-10 py-4 rounded-lg font-bold transition-colors inline-block shadow-lg"
                    >
                        Contact Us Today
                    </a>
                </div>
            </section>
        </div>
    );
}
