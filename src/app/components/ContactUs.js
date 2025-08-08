"use client";
// -----------------------------------------------------------------------------
// ⚠️ IMPORTANT: Before using, please install lucide-react.
// Run this command in your terminal:
// npm install lucide-react
// -----------------------------------------------------------------------------
import React, { useState } from 'react';
import { Rocket, BarChart, Code, Smartphone, ChevronDown, MessageCircle, CheckCircle, Star, Mail, Twitter, Linkedin, Github, Phone } from 'lucide-react';
import { IoLogoWhatsapp } from 'react-icons/io';

// Fallback component in case icons fail to load
const PlaceholderIcon = ({ className = "w-10 h-10" }) => (
  <div 
    className={`${className} bg-gray-700 rounded-lg animate-pulse`} 
    title="Icon not loaded. Please run 'npm install lucide-react'"
  ></div>
);

// --- SVG Icon for WhatsApp (to avoid dependency issues) ---
const WhatsAppIcon = ({ className }) => (
    <svg
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 448 512"
        className={className}
    >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .2c34.9 0 67.7 13.5 92.8 38.5 25.1 25.1 38.5 58 38.5 92.8 0 91.8-74.9 166.6-166.6 166.6h-.1c-32.2 0-63.3-9.2-90.4-26L93.7 416.3l28.8-81.3c-18.9-29.2-29.6-63.3-29.6-98.5 0-91.8 74.9-166.6 166.6-166.6zm77.3 125.2c-4.2-2.1-24.7-12.2-28.6-13.6-3.9-1.4-6.8-2.1-9.6 2.1-2.8 4.2-10.8 13.6-13.3 16.3-2.5 2.8-5 3.1-9.2 1-4.2-2.1-17.7-6.5-33.7-20.8-12.5-11.1-21-24.7-23.5-28.8-2.5-4.2-.2-6.5 1.9-8.6 1.9-1.9 4.2-5 6.3-7.5 2.1-2.5 2.8-4.2 4.2-7.1 1.4-2.8.7-5.2-1.4-7.2s-9.6-23.2-13.2-31.8c-3.6-8.7-7.3-7.5-10.1-7.5-2.8 0-6.8 0-10.1 0-3.3 0-8.7 1.4-13.2 6.8-4.5 5.4-17.3 16.9-17.3 41.2 0 24.2 17.7 47.8 20.2 51s34.8 53.2 84.4 74.4c11.9 5.1 22.5 8.2 30.1 10.5 15.2 4.6 29.1 3.9 40.1 2.4 12.1-1.6 37.3-15.2 42.5-29.9 5.2-14.6 5.2-27.1 3.8-29.9z" />
    </svg>
);






const ContactUs = () => {
  const myEmail = "info@stepupstack.com";
  const myWhatsApp = "+918619842221"; // Your WhatsApp number
  const whatsappLink = `https://wa.me/${myWhatsApp.replace(/\+/g, '')}`;

  return (
    <section id="contact" className="bg-gray-900 py-20 sm:py-24">
      <div className="relative container mx-auto px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-purple-600/30 rounded-full filter blur-3xl opacity-50"></div>
        <div className="relative bg-gray-800/80 backdrop-blur-md p-10 sm:p-16 rounded-2xl shadow-2xl border border-gray-700 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Let&apos;s build something amazing together. Reach out to us to start the conversation about your next project.
          </p>
          
          {/* --- Attractive Contact Buttons --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${myEmail}`} 
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              {Mail ? <Mail className="w-6 h-6 transition-transform duration-300 group-hover:rotate-[-15deg]" /> : <PlaceholderIcon className="w-6 h-6" />}
              <span>{myEmail}</span>
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <IoLogoWhatsapp size={30}/>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


// -----------------------------------------------------------------------------
// 5. FOOTER COMPONENT
// -----------------------------------------------------------------------------
const footerNavLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter ? <Twitter className="w-6 h-6" /> : 'T' },
  { name: 'LinkedIn', href: '#', icon: Linkedin ? <Linkedin className="w-6 h-6" /> : 'L' },
  { name: 'GitHub', href: '#', icon: Github ? <Github className="w-6 h-6" /> : 'G' },
];

const Footer = () => (
  <footer className="bg-gray-950 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            StepUpStack
          </a>
           <p className="text-gray-500 text-sm mt-2">
            Providing the **best digital marketing in Jodhpur**.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-8 md:mb-0">
          {footerNavLinks.map(link => (
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          {socialLinks.map(social => (
            <a key={social.name} href={social.href} aria-label={social.name} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} stepupstack. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);


// -----------------------------------------------------------------------------
// MAIN LANDING PAGE - This component assembles all the sections.
// -----------------------------------------------------------------------------
export default function LandingPage() {
  return (
    <main className="bg-gray-900">
      {/* You would place your Header component here if you have one */}
   
      <ContactUs />
      <Footer />
    </main>
  );
}