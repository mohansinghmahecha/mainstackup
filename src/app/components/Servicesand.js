// -----------------------------------------------------------------------------
// ⚠️ IMPORTANT: Before using these components, please install lucide-react.
// Run this command in your terminal:
// npm install lucide-react
// -----------------------------------------------------------------------------
"use client"
import React, { useState } from 'react';
import { Rocket, BarChart, Code, Smartphone, ChevronDown, MessageCircle } from 'lucide-react';

// Fallback component in case icons fail to load (e.g., lucide-react is not installed)
const PlaceholderIcon = () => (
  <div 
    className="w-10 h-10 bg-gray-700 rounded-lg animate-pulse" 
    title="Icon not loaded. Please run 'npm install lucide-react'"
  ></div>
);


// -----------------------------------------------------------------------------
// OUR SERVICES COMPONENT
// -----------------------------------------------------------------------------

const services = [
  {
    // Check if the icon component exists before trying to render it.
    icon: MessageCircle ? <MessageCircle className="w-10 h-10 text-purple-400" /> : <PlaceholderIcon />,
    title: 'Social Media Management',
    description: 'We craft engaging content and manage your social channels to build a vibrant community around your brand.',
  },
  {
    icon: BarChart ? <BarChart className="w-10 h-10 text-blue-400" /> : <PlaceholderIcon />,
    title: 'SEO & Analytics',
    description: 'Boost your organic reach and make data-driven decisions with our comprehensive SEO and analytics services.',
  },
  {
    icon: Code ? <Code className="w-10 h-10 text-pink-400" /> : <PlaceholderIcon />,
    title: 'Custom Web Development',
    description: 'From stunning landing pages to complex web applications, we build fast, responsive, and scalable websites.',
  },
  {
    icon: Smartphone ? <Smartphone className="w-10 h-10 text-green-400" /> : <PlaceholderIcon />,
    title: 'Mobile App Development',
    description: 'We design and develop intuitive and high-performing mobile apps for both iOS and Android platforms.',
  },
];

export const OurServices = () => {
  return (
    <section id="services" className="bg-gray-900 text-white py-20 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            We provide the tools and expertise to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="mb-6 inline-block bg-gray-900 p-4 rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// -----------------------------------------------------------------------------
// FREQUENTLY ASKED QUESTIONS (FAQ) COMPONENT
// -----------------------------------------------------------------------------

const faqData = [
  {
    question: 'What is the typical timeline for a web development project?',
    answer: 'A typical web development project takes between 6-12 weeks, depending on the complexity and features required. We start with a discovery phase, followed by design, development, and deployment.',
  },
  {
    question: 'How do you measure the success of an SEO campaign?',
    answer: 'We measure SEO success through key performance indicators (KPIs) like organic traffic growth, keyword rankings, conversion rates, and backlink quality. We provide monthly reports to track progress.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes, we offer various support and maintenance packages to ensure your website or application remains secure, up-to-date, and performs optimally after launch.',
  },
  {
    question: 'Can you work with our existing branding?',
    answer: 'Absolutely! We can seamlessly integrate your existing branding, logos, and color schemes into our designs, or we can help you create a completely new brand identity from scratch.',
  },
];

const FaqItem = ({ item, index, isOpen, setIsOpen }) => {
  const toggleOpen = () => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="border-b border-gray-700 py-6">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center text-left text-lg sm:text-xl font-semibold text-white"
      >
        <span>{item.question}</span>
        {/* Check if ChevronDown icon exists, otherwise show a fallback character to prevent crashing */}
        {ChevronDown ? (
          <ChevronDown
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen === index ? 'rotate-180' : ''
            }`}
          />
        ) : (
          <span className="w-6 h-6" title="Icon not loaded. Please run 'npm install lucide-react'">▼</span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-400">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <section id="faq" className="bg-gray-900 text-white py-20 sm:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have questions? We&apos;ve got answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// HOW TO USE IN YOUR APP:
//
// import { Hero } from './sections/Hero';
// import { OurServices, FAQ } from './sections/MoreSections'; // Assuming you save this file as MoreSections.jsx
//
// function App() {
//   return (
//     <>
//       <Hero />
//       <OurServices />
//       <FAQ />
//       {/* ... other components like Footer ... */}
//     </>
//   );
// }
//
// export default App;
