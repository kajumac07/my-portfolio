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
    { name: "Bloc", category: "State Management", icon: "🧩" },
    { name: "MVC", category: "Architecture", icon: "🏗️" },
    { name: "MVVM", category: "Architecture", icon: "🔧" },
    { name: "SQLite", category: "Database", icon: "💾" },
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

  return (
    <section id="techstack" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies I use to build amazing mobile experiences
          </p>
        </div>

        {/* Simple Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                activeCategory === category
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-300 hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-500 hover:shadow-md transition-all"
            >
              {/* Icon */}
              <div className="text-2xl mb-2">{tech.icon}</div>

              {/* Tech Name */}
              <h3 className="font-semibold text-black text-sm mb-1">
                {tech.name}
              </h3>

              {/* Category */}
              <span className="text-xs text-gray-500">{tech.category}</span>
            </div>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-black">
                {technologies.length}+
              </div>
              <div className="text-gray-600 text-sm">Technologies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black">
                {categories.length - 1}
              </div>
              <div className="text-gray-600 text-sm">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black">50+</div>
              <div className="text-gray-600 text-sm">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black">3+</div>
              <div className="text-gray-600 text-sm">Years Exp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
