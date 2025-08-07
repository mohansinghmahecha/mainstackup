// -----------------------------------------------------------------------------
// ⚠️ IMPORTANT: Before using these components, please install:
// npm install lucide-react framer-motion
// -----------------------------------------------------------------------------
"use client"
import React, { useState } from 'react';
import { Rocket, BarChart, Code, Smartphone, ChevronDown, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Fallback component in case icons fail to load
const PlaceholderIcon = () => (
  <div 
    className="w-10 h-10 bg-gray-700 rounded-lg animate-pulse" 
    title="Icon not loaded. Please run 'npm install lucide-react'"
  ></div>
);

// -----------------------------------------------------------------------------
// OUR SERVICES COMPONENT (WITH ANIMATED BORDER)
// -----------------------------------------------------------------------------

const services = [
  {
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
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Services
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide the tools and expertise to help your business thrive in the digital landscape.
          </motion.p>
        </div>

        {/* Services Grid with Animated Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  background: `linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)`,
                }}
                transition={{ duration: 0.4 }}
                style={{ zIndex: -1 }}
              />
              
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 shadow-lg h-full relative overflow-hidden">
                {/* Animated Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    zIndex: -1,
                    background: `linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)`,
                  }}
                />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-block bg-gray-900 p-4 rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// FREQUENTLY ASKED QUESTIONS (FAQ) COMPONENT (WITH ENHANCED ANIMATIONS)
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
    <motion.div 
      className="border-b border-gray-700 py-6"
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <motion.button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center text-left text-lg sm:text-xl font-semibold text-white"
        whileHover={{ color: '#a78bfa' }}
        transition={{ duration: 0.2 }}
      >
        <span>{item.question}</span>
        {ChevronDown ? (
          <motion.span
            animate={{ rotate: isOpen === index ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.span>
        ) : (
          <span className="w-6 h-6" title="Icon not loaded. Please run 'npm install lucide-react'">▼</span>
        )}
      </motion.button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen === index ? 'auto' : 0,
          opacity: isOpen === index ? 1 : 0
        }}
        className="overflow-hidden"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <motion.p 
          className="text-gray-400 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen === index ? 1 : 0 }}
          transition={{ duration: 0.3, delay: isOpen === index ? 0.2 : 0 }}
        >
          {item.answer}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <section id="faq" className="bg-gray-900 text-white py-20 sm:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header with Animation */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions? We&apos;ve got answers.
          </motion.p>
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