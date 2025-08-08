"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// -----------------------------------------------------------------------------
// OUR PROJECTS COMPONENT
// -----------------------------------------------------------------------------

// Sample data for projects. Replace with your actual project details.
const projects = [
    {
        image: 'https://placehold.co/600x400/1a1a2e/ffffff?text=E-commerce+Platform',
        title: 'Modern E-commerce Platform',
        description: 'A full-featured online store built with a headless CMS, providing a seamless shopping experience and easy inventory management.',
        tags: ['Next.js', 'React', 'Stripe', 'GraphQL'],
        link: '#',
    },
    {
        image: 'https://placehold.co/600x400/8338ec/ffffff?text=SaaS+Dashboard',
        title: 'SaaS Analytics Dashboard',
        description: 'A data visualization dashboard for a SaaS company, offering real-time insights and customizable reports for business intelligence.',
        tags: ['React', 'Node.js', 'D3.js', 'Express'],
        link: '#',
    },
    {
        image: 'https://placehold.co/600x400/3a86ff/ffffff?text=Mobile+Booking+App',
        title: 'Mobile Booking App',
        description: 'A cross-platform mobile application for booking appointments, designed with a user-friendly interface and push notifications.',
        tags: ['React Native', 'Firebase', 'Node.js'],
        link: '#',
    },
];

export const OurProjects = () => {
    return (
        <section id="projects" className="bg-gray-900 text-white py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Our Completed Projects
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        We take pride in our work. Here are some of the projects we've successfully delivered to our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-gray-800/50 rounded-2xl border border-gray-700/50 shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-purple-500/20 hover:-translate-y-2"
                        >
                            <div className="relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/2a2a3e/ffffff?text=Image+Not+Found'; }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300"
                                >
                                    View Project
                                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
