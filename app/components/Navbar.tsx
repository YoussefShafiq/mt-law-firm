'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { FaGithub, FaSquareWhatsapp } from 'react-icons/fa6';
import { FiMenu, FiX } from 'react-icons/fi';
import { ImLinkedin } from 'react-icons/im';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'careers',
            path: '/careers',
        },
        {
            name: 'experiences',
            path: '/experiences',
        },
        {
            name: 'privacy policy',
            path: '/privacy-policy',
        },
        {
            name: 'blogs',
            path: '/blogs',
        },
        {
            name: 'contacts',
            path: '/contacts',
        }
    ];

    const socialIcons = [
        { icon: <ImLinkedin />, path: 'https://www.linkedin.com/in/youssefshafek' },
        { icon: <FaSquareWhatsapp />, path: 'https://wa.me/+201284222917' },
    ];

    // Animation variants
    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const menuItemVariants = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                ease: "easeOut",
                duration: 0.2
            }
        }
    };

    const socialIconVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };



    return (
        <nav className="transition-colors bg-[#151a1d37] shadow-sm backdrop-blur-sm lg:top-5 lg:left-10 lg:right-10 top-3 left-5 right-5 z-50 fixed lg:w-[calc(100vw-80px)] w-[calc(100vw-40px)] rounded-3xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 lg:h-20 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-3xl font-bold text-customBlue flex items-center">
                                <img src="/logo.png" className='h-20 aspect-square rounded-full filter brightness-0 invert ' alt="" />
                            </Link>
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:ml-10 md:flex md:space-x-8  transition-colors text-gray-50">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium transition duration-300 ext-gray-700 border-transparent hover:text-customBlue`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Right Section */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex space-x-4">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.path}
                                    className=" transition-colors text-lg text-gray-50 hover:text-customBlue transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 transition-colors dark:text-gray-50 hover:text-customBlue focus:outline-none transition duration-300"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <FiX className="block h-6 w-6" />
                            ) : (
                                <FiMenu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with animations */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        className="md:hidden overflow-hidden "
                    >
                        <motion.div className="px-2 pt-2 pb-3 space-y-1 text-gray-700 transition-colors dark:text-gray-50">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={menuItemVariants}
                                >
                                    <Link
                                        href={item.path}
                                        className="block px-3 py-2 rounded-md text-base font-medium transition duration-300 hover:text-customBlue"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                className="pt-4 border-t border-gray-200"
                                variants={menuItemVariants}
                            >
                                <motion.div className="flex justify-center space-x-6 py-3">
                                    {socialIcons.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.path}
                                            className="text-gray-500 transition-colors dark:text-gray-50 hover:text-customBlue transition duration-300 text-lg"
                                            variants={socialIconVariants}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
