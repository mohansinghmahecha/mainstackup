"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// --- Data for the FAQ section ---
// You can easily add, remove, or edit questions and answers here.
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

// --- Sub-component for a single FAQ item ---
// This handles the logic for opening and closing the accordion.
const FaqItem = ({ item, index, isOpen, setIsOpen }) => {
  const toggleOpen = () => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="border-b border-gray-700/50 py-6">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center text-left text-lg sm:text-xl font-semibold text-white"
        aria-expanded={isOpen === index}
      >
        <span>{item.question}</span>
        {/* Chevron icon rotates based on the open/closed state */}
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
      {/* The answer content slides down smoothly when opened */}
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

// --- Main FAQ Component ---
export const FAQ = () => {
  // State to keep track of which FAQ item is currently open
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

