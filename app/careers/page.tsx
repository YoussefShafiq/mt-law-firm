import type { Metadata } from 'next';
import PagesHero from '../components/PagesHero';
import Title from '../components/Title';
import { FaBookReader, FaHandshake, FaBalanceScale, FaRegFolder, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Careers - MT Law Firm',
    description: 'Join our team of legal professionals. Explore career opportunities at MT Law Firm.',
};

export default function Careers() {
    const openPositions = [
        {
            title: 'Senior Associate Attorney',
            department: 'Corporate Law',
            location: 'Main Office',
            type: 'Full-time',
        },
        {
            title: 'Paralegal',
            department: 'Litigation',
            location: 'Main Office',
            type: 'Full-time',
        },
        {
            title: 'Legal Assistant',
            department: 'General Practice',
            location: 'Main Office',
            type: 'Full-time',
        },
    ];

    return (
        <div className="bg-white">
            {/* Header Section */}
            <PagesHero title="Careers at MT Law Firm" description="Join our team and build a rewarding career in law." />

            {/* Why Join Us */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <Title title="Why Join MT Law Firm?" subtitle="Build Your Future With Us" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="text-5xl mb-4 flex justify-center text-secondary"><FaBookReader /></div>
                            <h3 className="text-xl font-bold mb-3 text-primary">Professional Growth</h3>
                            <p className="text-slate-600">
                                Continuous learning opportunities and career development programs.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="text-5xl mb-4 flex justify-center text-secondary"><FaHandshake /></div>
                            <h3 className="text-xl font-bold mb-3 text-primary">Collaborative Culture</h3>
                            <p className="text-slate-600">
                                Work alongside talented professionals in a supportive environment.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="text-5xl mb-4 flex justify-center text-secondary"><FaBalanceScale /></div>
                            <h3 className="text-xl font-bold mb-3 text-primary">Meaningful Work</h3>
                            <p className="text-slate-600">
                                Make a real difference in clients' lives through impactful legal work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <Title title="Open Positions" subtitle="Current Opportunities" />
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {openPositions.map((position, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-xl font-bold text-primary mb-2">{position.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                            <span className="flex items-center">
                                                <FaRegFolder className="mr-2 text-blue-500" /> {position.department}
                                            </span>
                                            <span className="flex items-center">
                                                <FaMapMarkerAlt className="mr-2 text-blue-500" /> {position.location}
                                            </span>
                                            <span className="flex items-center">
                                                <FaClock className="mr-2 text-blue-500" /> {position.type}
                                            </span>
                                        </div>
                                    </div>
                                    <a
                                        href="/contacts"
                                        className="bg-primary hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <Title title="Application Process" subtitle="How to Join Our Team" />
                        </div>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold">1</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-bold text-primary mb-1">Submit Your Application</h3>
                                    <p className="text-slate-600">Send your resume and cover letter through our contact form or email.</p>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold">2</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-bold text-primary mb-1">Initial Review</h3>
                                    <p className="text-slate-600">Our HR team reviews your qualifications and experience match.</p>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold">3</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-bold text-primary mb-1">Interview</h3>
                                    <p className="text-slate-600">Meet with our partners and team members for a discussion.</p>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold">4</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-bold text-primary mb-1">Offer</h3>
                                    <p className="text-slate-600">Welcome to the team! We extend an offer to join MT Law Firm.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
