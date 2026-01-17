import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/experiences', label: 'Experiences' },
        { href: '/careers', label: 'Careers' },
    ];

    const legalLinks = [
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/contacts', label: 'Contact Us' },
    ];

    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="text-3xl font-bold text-customBlue flex items-center">
                            <img src="/logo.png" className='h-28 aspect-square rounded-full' alt="" />
                        </Link>
                        <p className="text-slate-300 text-sm">
                            Providing exceptional legal services with integrity, expertise, and dedication to our clients.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact & Legal</h3>
                        <ul className="space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 text-slate-300 text-sm">
                            <p>Email: info@mtlawfirm.com</p>
                            <p>Phone: +1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
                    <p>&copy; {currentYear} MT Law Firm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
