"use client";

import React, { useState } from "react";

interface Technology {
  name: string;
  category: string;
  icon: string;
}

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const technologies: Technology[] = [
    { name: "Flutter", category: "Cross-Platform", icon: "📱" },
    { name: "Dart", category: "Language", icon: "🎯" },
    { name: "SwiftUI", category: "iOS", icon: "🍎" },
    { name: "Swift", category: "Language", icon: "⚡" },
    { name: "Firebase", category: "Backend", icon: "🔥" },
    { name: "REST API", category: "Backend", icon: "🌐" },
    { name: "Git", category: "Tools", icon: "📚" },
    { name: "Figma", category: "Design", icon: "🎨" },
    { name: "Xcode", category: "Tools", icon: "🛠️" },
    { name: "Android Studio", category: "Tools", icon: "🤖" },
    { name: "Getx", category: "State Management", icon: "🔄" },
    { name: "Provider", category: "State Management", icon: "📦" },
    { name: "MVC", category: "Architecture", icon: "🏗️" },
    { name: "MVVM", category: "Architecture", icon: "🔧" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
  ];

  const categories = [
    "All",
    "Cross-Platform",
    "iOS",
    "Language",
    "Backend",
    "Tools",
    "State Management",
    "Design",
    "Architecture",
    "Database",
  ];

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Cross-Platform": "bg-purple-50 border-purple-200 text-purple-700",
      iOS: "bg-blue-50 border-blue-200 text-blue-700",
      Language: "bg-green-50 border-green-200 text-green-700",
      Backend: "bg-orange-50 border-orange-200 text-orange-700",
      Tools: "bg-gray-50 border-gray-200 text-gray-700",
      "State Management": "bg-indigo-50 border-indigo-200 text-indigo-700",
      Design: "bg-pink-50 border-pink-200 text-pink-700",
      Architecture: "bg-yellow-50 border-yellow-200 text-yellow-700",
      Database: "bg-teal-50 border-teal-200 text-teal-700",
    };
    return colors[category] || "bg-gray-50 border-gray-200 text-gray-700";
  };

  return (
    <section id="techstack" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
            <span className="text-2xl text-white">⚡</span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-4">Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-3 rounded-xl border-2 transition-all duration-300 font-medium ${
                activeCategory === category
                  ? "bg-black text-white border-black shadow-lg transform scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:border-black hover:shadow-md hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 mb-16">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border-2 border-gray-100 p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-blue-100"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl border-2 border-gray-100 mb-4 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors duration-300">
                  <span className="text-2xl">{tech.icon}</span>
                </div>

                {/* Tech Name */}
                <h3 className="font-bold text-black text-base mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </h3>

                {/* Category Badge */}
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                    tech.category
                  )}`}
                >
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl border-2 border-blue-100 mb-4 group-hover:border-blue-200 transition-colors duration-300">
                <span className="text-2xl">🛠️</span>
              </div>
              <div className="text-3xl font-bold text-black mb-2">
                {technologies.length}+
              </div>
              <div className="text-gray-600 font-medium">Technologies</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl border-2 border-green-100 mb-4 group-hover:border-green-200 transition-colors duration-300">
                <span className="text-2xl">📂</span>
              </div>
              <div className="text-3xl font-bold text-black mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-600 font-medium">Categories</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-50 rounded-2xl border-2 border-purple-100 mb-4 group-hover:border-purple-200 transition-colors duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="text-3xl font-bold text-black mb-2">20+</div>
              <div className="text-gray-600 font-medium">Projects</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-2xl border-2 border-orange-100 mb-4 group-hover:border-orange-200 transition-colors duration-300">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-3xl font-bold text-black mb-2">3+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Always learning and exploring new technologies to stay ahead of the
            curve
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
