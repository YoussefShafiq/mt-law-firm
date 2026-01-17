import type { Metadata } from 'next';
import PagesHero from '../components/PagesHero';

export const metadata: Metadata = {
    title: 'Privacy Policy - MT Law Firm',
    description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <PagesHero title="Privacy Policy" description="Read our privacy policy to understand how we collect, use, and protect your personal information." />

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
                        <p className="text-slate-600 mb-6">
                            MT Law Firm ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                            Policy explains how we collect, use, disclose, and safeguard your information when you
                            visit our website or use our services.
                        </p>

                        <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Information We Collect</h2>
                        <p className="text-slate-600 mb-4">
                            We may collect information about you in a variety of ways. The information we may collect
                            includes:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                            <li>Personal Data: Name, email address, phone number, and other contact information</li>
                            <li>Legal Information: Details about your legal matter or inquiry</li>
                            <li>Usage Data: Information about how you use our website</li>
                            <li>Cookies and Tracking Technologies: Data collected through cookies and similar technologies</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-primary mb-4 mt-8">How We Use Your Information</h2>
                        <p className="text-slate-600 mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                            <li>Provide legal services and respond to your inquiries</li>
                            <li>Communicate with you about your legal matters</li>
                            <li>Improve our website and services</li>
                            <li>Send you updates and marketing communications (with your consent)</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Information Sharing</h2>
                        <p className="text-slate-600 mb-6">
                            We do not sell, trade, or rent your personal information to third parties. We may share
                            your information with trusted service providers who assist us in operating our website
                            and conducting our business, subject to confidentiality agreements.
                        </p>

                        <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Data Security</h2>
                        <p className="text-slate-600 mb-6">
                            We implement appropriate technical and organizational security measures to protect your
                            personal information. However, no method of transmission over the Internet or electronic
                            storage is 100% secure, and we cannot guarantee absolute security.
                        </p>

                        <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Your Rights</h2>
                        <p className="text-slate-600 mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Object to processing of your personal information</li>
                            <li>Withdraw consent at any time</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Contact Us</h2>
                        <p className="text-slate-600 mb-6">
                            If you have questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <p className="text-primary font-bold mb-2">MT Law Firm</p>
                            <p className="text-slate-600">Email: privacy@mtlawfirm.com</p>
                            <p className="text-slate-600">Phone: +1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
