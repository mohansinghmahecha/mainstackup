"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Drawer, Box, IconButton } from '@mui/material';
import { IoLogoWhatsapp } from "react-icons/io";

// --- SVG Icon for WhatsApp ---
const WhatsAppIcon = () => (
    <svg
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 448 512"
        className="w-8 h-8"
    >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .2c34.9 0 67.7 13.5 92.8 38.5 25.1 25.1 38.5 58 38.5 92.8 0 91.8-74.9 166.6-166.6 166.6h-.1c-32.2 0-63.3-9.2-90.4-26L93.7 416.3l28.8-81.3c-18.9-29.2-29.6-63.3-29.6-98.5 0-91.8 74.9-166.6 166.6-166.6zm77.3 125.2c-4.2-2.1-24.7-12.2-28.6-13.6-3.9-1.4-6.8-2.1-9.6 2.1-2.8 4.2-10.8 13.6-13.3 16.3-2.5 2.8-5 3.1-9.2 1-4.2-2.1-17.7-6.5-33.7-20.8-12.5-11.1-21-24.7-23.5-28.8-2.5-4.2-.2-6.5 1.9-8.6 1.9-1.9 4.2-5 6.3-7.5 2.1-2.5 2.8-4.2 4.2-7.1 1.4-2.8.7-5.2-1.4-7.2s-9.6-23.2-13.2-31.8c-3.6-8.7-7.3-7.5-10.1-7.5-2.8 0-6.8 0-10.1 0-3.3 0-8.7 1.4-13.2 6.8-4.5 5.4-17.3 16.9-17.3 41.2 0 24.2 17.7 47.8 20.2 51s34.8 53.2 84.4 74.4c11.9 5.1 22.5 8.2 30.1 10.5 15.2 4.6 29.1 3.9 40.1 2.4 12.1-1.6 37.3-15.2 42.5-29.9 5.2-14.6 5.2-27.1 3.8-29.9z" />
    </svg>
);


const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const whatsappNumber = "+918619842221";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;

    // Effect to handle scroll event for header background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to handle smooth scrolling and close the mobile menu
    const handleLinkClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    // Toggles the mobile drawer open/closed
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    // Dynamic class for the logo to change color on scroll
    const logoClass = isScrolled
        ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'
        : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500';

    return (
        <>
            <header className={`sticky top-0 z-50 transition-all duration-300  bg-gray-900 backdrop-blur-lg border-b border-gray-800 `}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo with dynamic color */}
                        <a href="#" className={`text-2xl font-bold transition-colors duration-300 ${logoClass}`}>
                            StackUpStack
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="text-gray-200 hover:text-purple-400 transition-colors duration-300 font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <IconButton onClick={toggleDrawer(true)} aria-label="Open menu" sx={{ color: 'white' }}>
                                <Menu className="w-8 h-8" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer from MUI */}
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#111827', // bg-gray-900
                        color: 'white',
                        width: '80%',
                        maxWidth: '20rem' // max-w-sm
                    },
                }}
            >
                <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <div className="flex items-center justify-between p-6 border-b border-gray-800">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Book today
                        </span>
                        <IconButton onClick={toggleDrawer(false)} aria-label="Close menu" sx={{ color: 'white' }}>
                            <X className="w-8 h-8" />
                        </IconButton>
                    </div>
                    <nav className="flex flex-col p-6 space-y-6">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-xl text-gray-200 hover:text-purple-400 transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </Box>
            </Drawer>

            {/* --- Animated WhatsApp Floating Action Button --- */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#1DAE5A] transition-colors duration-300 animate-pulse flex items-center justify-center group"
            >
                <IoLogoWhatsapp size={28}/>
                <span className="absolute right-full mr-4 px-3 py-1.5 text-sm font-semibold text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Chat with us!
                </span>
            </a>
        </>
    );
};

export default Header;