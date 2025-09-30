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
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      {/* Geometric Accents */}
      <div className="absolute top-20 right-20 w-6 h-6 border-2 border-blue-600 opacity-40"></div>
      <div className="absolute bottom-40 left-16 w-4 h-4 bg-blue-600 opacity-30"></div>
      <div className="absolute top-1/2 right-32 w-8 h-8 border border-gray-300 opacity-50 rotate-45"></div>

      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center min-h-screen gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Professional Badge */}
          <div
            className={`inline-flex items-center gap-3 bg-blue-50 rounded-lg px-5 py-3 mb-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-medium text-blue-900 tracking-wide uppercase">
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
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
              Atul
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 tracking-tight">
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
            <p className="text-xl md:text-2xl text-gray-600 font-light mb-4">
              Cross-Platform Developer
            </p>
            <div className="w-16 h-0.5 bg-blue-600 my-6"></div>
            <p className="text-lg text-gray-500 max-w-md leading-relaxed">
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
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* CTA Buttons */}
          {/* <div
            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              id=""
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-base font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
              Download Resume
            </button>
          </div>
         */}
        </div>

        {/* Right Image - Professional Frame */}
        <div
          className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            {/* Image Container with Professional Shadow */}
            <div className="relative w-[300px] h-[492px] md:w-[360px] md:h-[590px] bg-white rounded-2xl overflow-hidden shadow-2xl">
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
            <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-lg">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-gray-600">
                Open for work
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              #f0f0f0 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
