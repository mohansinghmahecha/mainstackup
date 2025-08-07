
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Drawer, Box, IconButton } from '@mui/material';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to handle scroll event for header background
    useEffect(() => {
        const handleScroll = () => {
            // Set isScrolled to true if user has scrolled more than 10px
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to handle smooth scrolling and close the mobile menu
    const handleLinkClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close mobile menu on link click
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
        : 'text-white';

    return (
        <>
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-gray-800' : 'bg-violet-600'}`}>
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
                                {Menu ? <Menu className="w-8 h-8" /> : 'Menu'}
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
                        backgroundColor: '#111827', // Equivalent to bg-gray-900
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
                            {X ? <X className="w-8 h-8" /> : 'Close'}
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
        </>
    );
};

export default Header;
