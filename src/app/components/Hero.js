import React from 'react';
import { Rocket, BarChart, Code, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    // Main section container with a dark background and relative positioning for background shapes
    <section className="relative bg-gray-900 text-white overflow-hidden font-sans">
      {/* Decorative background gradient blobs */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-purple-600/50 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-blue-600/50 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/50 rounded-full filter blur-3xl opacity-40"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {/* Gradient text for emphasis */}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                Build Your Brand
              </span>
              <br />
              with stepupstack
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 mb-10">
              We offer top-tier services in social media, SEO, and web & mobile development to catapult your business to new heights.
            </p>
            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Column: Visual Illustration */}
          <div className="relative hidden md:block group">
            {/* Background card with a slight rotation */}
            <div className="absolute w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform -rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 opacity-80"></div>
            {/* Foreground card with mock UI elements */}
            <div className="relative bg-gray-800/80 backdrop-blur-md p-6 lg:p-8 rounded-3xl shadow-2xl border border-gray-700">
                {/* Mock window controls */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="w-32 h-4 bg-gray-700 rounded-full"></div>
                </div>
                {/* Mock service list */}
                <div className="space-y-5">
                    <div className="flex items-center space-x-4 p-3 bg-gray-900/50 rounded-lg">
                        <div className="p-3 bg-blue-500/20 rounded-lg">
                            <BarChart className="w-6 h-6 text-blue-300" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">SEO & Analytics</h3>
                            <p className="text-sm text-gray-400">Boosting your visibility</p>
                        </div>
                    </div>
                     <div className="flex items-center space-x-4 p-3 bg-gray-900/50 rounded-lg">
                        <div className="p-3 bg-purple-500/20 rounded-lg">
                            <Rocket className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">Social Media Growth</h3>
                            <p className="text-sm text-gray-400">Engaging your audience</p>
                        </div>
                    </div>
                     <div className="flex items-center space-x-4 p-3 bg-gray-900/50 rounded-lg">
                        <div className="p-3 bg-pink-500/20 rounded-lg">
                            <Code className="w-6 h-6 text-pink-300" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">Web & Mobile Dev</h3>
                            <p className="text-sm text-gray-400">Building your vision</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
