"use client";
import React from 'react';

// -----------------------------------------------------------------------------
// TECHNOLOGY ICONS (CUSTOM SVGs)
// -----------------------------------------------------------------------------

const NextJsIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 128 128">
        <path fill="url(#next-gradient)" d="M110.43 12.5H17.57C14.71 12.5 12.5 14.72 12.5 17.57v92.86c0 2.85 2.21 5.07 5.07 5.07h92.86c2.85 0 5.07-2.22 5.07-5.07V17.57c0-2.85-2.22-5.07-5.07-5.07Z"></path>
        <path fill="#fff" d="M83.15 97.49V46.84h-9.87l-23.4 32.14v-32.14h-9.88v50.65h9.88l23.4-32.15v32.15h9.87Z"></path>
        <path fill="#fff" d="M97.49 97.49H87.6v-50.7h9.88v50.7Z"></path>
        <defs>
            <linearGradient id="next-gradient" x1="12.5" x2="115.5" y1="12.5" y2="115.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0.5"></stop>
            </linearGradient>
        </defs>
    </svg>
);

const ReactJsIcon = () => (
    <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <g>
            <ellipse rx="11" ry="4.2" transform="matrix(1 0 0 -1 12 12)"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(60 12 12)"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(120 12 12)"></ellipse>
        </g>
        <circle cx="12" cy="12" r="2.2" fill="currentColor"></circle>
    </svg>
);

const NodeJsIcon = () => (
    <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 512 512">
        <path d="M469,221.43l-68.3,39.33V300.1l68.3,39.43V221.43ZM281.4,128.3v84.2l-42.8,24.6V128.3H281.4ZM221.4,142.5v55.3l-59.5-34.23v-55.3h59.5Zm17.2,243.4,68.3-39.33V307.27L306.9,268,238.6,307.27v39.23Zm-17.2,14.8v-84.2l42.8-24.6v84.2H221.4Zm-17.2-99-68.3,39.33V300.1L204.2,260.8v-39.23Z" />
        <path d="M443.13,208.17,268.6,108.6a17.2,17.2,0,0,0-17.2,0L68.87,208.17a17.2,17.2,0,0,0-8.6,14.9V403.4a17.2,17.2,0,0,0,8.6,14.9l174.5,99.57a17.2,17.2,0,0,0,17.2,0l174.5-99.57a17.2,17.2,0,0,0,8.6-14.9V223.07A17.2,17.2,0,0,0,443.13,208.17ZM255.8,495.31,98.6,403.4V223.07L255.8,314.77Zm0-206.34L98.6,208.17,255.8,116.48l157.2,91.69Z" />
    </svg>
);

const ExpressJsIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
        <path fill="#fff" fillRule="evenodd" d="M10.83 36h26.34L11 12H4l23 24h-2.17L10.83 36Zm26.34-24H10.83L37 36h7L10.83 12h26.34Z" clipRule="evenodd"></path>
    </svg>
);

const ReactNativeIcon = () => (
    <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
    </svg>
);

const JavaScriptIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
        <path fill="#F7DF1E" d="M0 0h48v48H0z"></path>
        <path d="M34.2 36.11c1.67-1.03 2.63-2.43 2.63-4.37 0-1.2-.4-2.27-1.1-3.1-1.03-1.2-2.5-1.88-4.34-1.88-1.84 0-3.33.6-4.4 1.7-.97 1-1.54 2.3-1.54 3.82h5.88c.04-1.1.5-1.68 1.4-1.68.85 0 1.3.3 1.3.96 0 .5-.3.88-.9 1.25l-2.3.9c-2.5.94-3.76 2.2-3.76 4.1 0 1.6.6 2.85 1.8 3.7 1.2.8 2.8.98 4.3.98 2.1 0 3.7-.6 4.8-1.9.9-1.2 1.3-2.8 1.3-4.6h-5.8c0 1.4-.4 2.08-1.3 2.08-.74 0-1.1-.3-1.1-.9s.3-.8.9-1.05l2.4-.9zm-13.31-7.2c1.3-.8 2.1-2.1 2.1-3.8 0-1.6-.6-2.8-1.8-3.7s-2.8-1.3-4.6-1.3c-1.8 0-3.3.4-4.4 1.3-.9.8-1.4 2-1.4 3.5 0 2.8 1.5 4.3 4.2 4.3 1.4 0 2.6-.3 3.5-.6l-.7-2.7c-.4.1-.8.2-1.3.2-1.1 0-1.7-.4-1.7-1.5 0-.6.2-1.1.7-1.4.5-.3 1.1-.5 1.8-.5.9 0 1.6.2 2.1.6l.7 2.6z"></path>
    </svg>
);


// -----------------------------------------------------------------------------
// TECHNOLOGIES COMPONENT
// -----------------------------------------------------------------------------
const technologies = [
    { name: 'Next.js', icon: <NextJsIcon /> },
    { name: 'React.js', icon: <ReactJsIcon /> },
    { name: 'JavaScript', icon: <JavaScriptIcon /> },
    { name: 'Node.js', icon: <NodeJsIcon /> },
    { name: 'Express.js', icon: <ExpressJsIcon /> },
    { name: 'React Native', icon: <ReactNativeIcon /> },
];

export const Technologies = () => {
    return (
        <section id="technologies" className="bg-gray-900 text-white py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        We Build With Modern Technologies
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Our team leverages the latest and greatest technologies to deliver high-performance, scalable, and future-proof solutions.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="group flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 shadow-lg hover:border-purple-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                        >
                            <div className="transition-transform duration-300 group-hover:scale-110">
                                {tech.icon}
                            </div>
                            <h3 className="text-lg font-bold mt-4 text-gray-200">{tech.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                     <p className="text-gray-500">...and many other new and emerging technologies.</p>
                </div>
            </div>
        </section>
    );
};
