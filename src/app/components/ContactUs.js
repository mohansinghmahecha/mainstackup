"use client";
// -----------------------------------------------------------------------------
// ⚠️ IMPORTANT: Before using these components, please install lucide-react.
// Run this command in your terminal:
// npm install lucide-react
// -----------------------------------------------------------------------------
import React, { useState } from 'react';
import { Rocket, BarChart, Code, Smartphone, ChevronDown, MessageCircle, CheckCircle, Star, Mail, Twitter, Linkedin, Github } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            We provide the tools and expertise to help your business thrive in the digital landscape.
          </p>
        </div>
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
// PRICING PLAN COMPONENT
// -----------------------------------------------------------------------------

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for individuals and small teams getting started.',
    features: ['1 Project', 'Basic Analytics', 'Community Support'],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing businesses that need more power.',
    features: ['5 Projects', 'Advanced Analytics', 'Priority Email Support', 'SEO Tools'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large-scale organizations.',
    features: ['Unlimited Projects', 'Dedicated Account Manager', '24/7 Phone Support', 'Custom Integrations'],
    isPopular: false,
  },
];

export const PricingPlan = () => {
  return (
    <section id="pricing" className="bg-gray-900 text-white py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Flexible Pricing for Teams of All Sizes
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Choose a plan that fits your needs. All plans are fully customizable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 p-8 rounded-2xl border ${plan.isPopular ? 'border-purple-500' : 'border-gray-700/50'} shadow-lg flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase flex items-center gap-1">
                    {Star ? <Star className="w-4 h-4" /> : ''} Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-center mb-6 h-12">{plan.description}</p>
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span className="text-gray-400 font-medium">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    {CheckCircle ? <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> : <span className="w-5 h-5 mr-3">✓</span>}
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`w-full text-center font-bold py-3 px-8 rounded-lg transition-colors duration-300 ${plan.isPopular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 hover:bg-gray-600'}`}>
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Choose Plan'}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
            <p className="text-lg text-gray-300 bg-gray-800/60 inline-block p-4 rounded-lg border border-gray-700">
              Need a different configuration? <span className="font-bold text-purple-400">Negotiations are always welcome!</span>
            </p>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have questions? We&apos;ve got answers.
          </p>
        </div>
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


// -----------------------------------------------------------------------------
// CONTACT US (CALL TO ACTION) COMPONENT
// -----------------------------------------------------------------------------

export const ContactUs = () => {
  return (
    <section id="contact" className="bg-gray-900 py-20 sm:py-24">
      <div className="relative container mx-auto px-6">
        {/* Background decorative blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-purple-600/30 rounded-full filter blur-3xl opacity-50"></div>
        <div className="relative bg-gray-800/80 backdrop-blur-md p-10 sm:p-16 rounded-2xl shadow-2xl border border-gray-700 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                Ready to Elevate Your Brand?
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                Let&apos;s build something amazing together. Reach out to us to start the conversation about your next project.
            </p>
            <a 
                href="mailto:info@stackupstack.com" 
                className="group inline-flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
                {Mail ? <Mail className="w-6 h-6 transition-transform duration-300 group-hover:rotate-[-15deg]" /> : ''}
                <span>Contact Us Now</span>
            </a>
        </div>
      </div>
    </section>
  );
};


// -----------------------------------------------------------------------------
// FOOTER COMPONENT
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

export const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-8 md:mb-0">
                        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            StackUpStack
                        </a>
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
                    <p>&copy; {new Date().getFullYear()} StackUpStack. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};


// HOW TO USE IN YOUR APP:
//
// import { Hero } from './sections/Hero';
// import { OurServices, PricingPlan, FAQ, ContactUs, Footer } from './sections/MoreSections'; // Assuming you save this file as MoreSections.jsx
//
// function App() {
//   return (
//     <main className="bg-gray-900">
//       <Hero />
//       <OurServices />
//       <PricingPlan />
//       <FAQ />
//       <ContactUs />
//       <Footer />
//     </main>
//   );
// }
//
// export default App;
