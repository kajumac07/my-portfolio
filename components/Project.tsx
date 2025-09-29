"use client";

import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "Journey Junction - Travel Social Platform",
      description:
        "A travel storytelling platform where users can share their journey experiences through blogs and stories.",
      icon: "🧳",
      tags: ["Next.js", "Flutter", "Firebase"],
    },
    {
      id: 2,
      title: "Rozgaar - Resume Upload Portal",
      description:
        "Job application platform where users can upload resumes and admins can download them.",
      icon: "📄",
      tags: ["Next.js", "Firebase"],
    },
    {
      id: 3,
      title: "Family Alert - Emergency Insurance Network",
      description:
        "Emergency voice-call solution for accident victims with QR code emergency contacts.",
      icon: "🚨",
      tags: ["Next.js", "ZegoCloud", "Firebase"],
    },
    {
      id: 4,
      title: "RabbitServices - Fleet Management",
      description:
        "Fleet management solution for truck maintenance and repairs with real-time diagnostics.",
      icon: "🚛",
      tags: ["Flutter", "Firebase", "Next.js"],
    },
    {
      id: 5,
      title: "WindayRoot - Real Estate Platform",
      description:
        "Real estate platform connecting buyers with property owners and virtual tours.",
      icon: "🏠",
      tags: ["Flutter", "Provider", "Firebase"],
    },
    {
      id: 6,
      title: "NearTake - Food Delivery",
      description:
        "Food delivery ecosystem with real-time order tracking and delivery optimization.",
      icon: "🍽️",
      tags: ["Flutter", "Getx", "REST APIs"],
    },
  ];

  const filters = ["All", "Flutter", "Next.js", "Firebase", "React"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selected projects I&apos;ve built with modern technologies
          </p>
        </div>

        {/* Simple Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                activeFilter === filter
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-300 hover:border-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{project.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
