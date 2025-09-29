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
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Floating Blue Circles */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-300 rounded-full opacity-20 animate-float-medium"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen gap-12">
        {/* Left Content */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 border border-blue-400 rounded-full px-4 py-2 mb-8 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-base md:text-lg text-gray-700">
              Available for new projects
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-6xl md:text-8xl font-extrabold text-black mb-6 transition-all duration-700 delay-500`}
          >
            Atul <span className="text-blue-600">Tiwari</span>
          </h1>

          {/* Subtitle */}
          <div
            className={`text-2xl md:text-3xl text-gray-700 mb-10 transition-all duration-700 delay-700`}
          >
            <span className="font-semibold text-blue-600">
              Cross-Platform Developer
            </span>
            <span className="mx-4 text-gray-400">•</span>
            Crafting clean mobile experiences
          </div>

          {/* Tech Stack */}
          <div
            className={`flex flex-wrap justify-center lg:justify-start gap-4 mb-12 transition-all duration-700 delay-900`}
          >
            {["Flutter", "SwiftUI", "React/Next.js"].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 border border-blue-500 rounded-full text-blue-600 text-lg font-semibold hover:bg-blue-50 transition"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
              View My Work
            </button>
            <button className="border-2 border-black text-black px-10 py-5 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border-8 border-blue-600 overflow-hidden shadow-lg">
            <Image
              src="/portfolio.jpg"
              alt="Atul Tiwari"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(15px) translateY(-25px);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
