"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 relative overflow-hidden"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>

      {/* Geometric Accents */}
      <div className="absolute top-20 right-20 w-6 h-6 border-2 border-blue-500 opacity-40"></div>
      <div className="absolute bottom-40 left-16 w-4 h-4 bg-blue-500 opacity-30"></div>
      <div className="absolute top-1/2 right-32 w-8 h-8 border border-gray-600 opacity-50 rotate-45"></div>

      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center min-h-screen gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Professional Badge */}
          <div
            className={`inline-flex items-center gap-3 bg-gray-800 rounded-lg px-5 py-3 mb-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-200 tracking-wide uppercase">
                Available for select projects
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div
            className={`mb-8 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Atul
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-blue-400 mb-6 tracking-tight">
              Tiwari
            </h1>
          </div>

          {/* Professional Title */}
          <div
            className={`mb-12 transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
              Cross-Platform Developer
            </p>
            <div className="w-16 h-0.5 bg-blue-500 my-6"></div>
            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              Specializing in performant mobile applications and seamless user
              experiences across platforms
            </p>
          </div>

          {/* Tech Stack */}
          <div
            className={`flex flex-wrap justify-center lg:justify-start gap-3 mb-12 transition-all duration-700 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {["Flutter", "SwiftUI", "React/Next.js", "TypeScript"].map(
              (tech) => (
                <div
                  key={tech}
                  className="px-5 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5">
              View Portfolio
            </button>
            <button className="bg-gray-800 border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-base font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-lg">
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Image - Professional Frame */}
        <div
          className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            {/* Image Container with Glow Effect */}
            <div className="relative w-[300px] h-[492px] md:w-[360px] md:h-[590px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <Image
                src="/professional2.png"
                alt="Atul Tiwari - Cross-Platform Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 300px, 360px"
              />
            </div>

            {/* Accent Element */}
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-600 rounded-lg -z-10"></div>

            {/* Status Indicator */}
            <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-gray-800 rounded-full px-3 py-2 shadow-lg border border-gray-700">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-gray-300">
                Open for work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
