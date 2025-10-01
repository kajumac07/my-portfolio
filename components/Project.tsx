"use client";

import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  link?: string;
  linkType?: "web" | "playstore" | "github" | "demo";
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
      link: "https://journey-junction-olive.vercel.app/",
      linkType: "web",
    },
    {
      id: 2,
      title: "Rozgaar - Resume Upload Portal",
      description:
        "Job application platform where users can upload resumes and admins can download them.",
      icon: "📄",
      tags: ["Next.js", "Firebase"],
      link: "https://www.rozgaar.net/",
      linkType: "web",
    },
    {
      id: 3,
      title: "Family Alert - Emergency Insurance Network",
      description:
        "Emergency voice-call solution for accident victims with QR code emergency contacts.",
      icon: "🚨",
      tags: ["Next.js", "ZegoCloud", "Firebase"],
      link: "https://www.familyalert.life/share/aS3xZ2CzZ5cxXdHnU523S7gksdG3-SqWoVhrk0Qlr56Z7bvj5",
      linkType: "web",
    },
    {
      id: 4,
      title: "RabbitServices - Fleet Management",
      description:
        "Fleet management solution for truck maintenance and repairs with real-time diagnostics. User can find mechanics and User can create its Own team (Driver, Accountant, Mechanic, Co-Owner).and assign them different roles. User can track its vehicle in real-time.",
      icon: "🚛",
      tags: ["Flutter", "Firebase", "Next.js"],
      link: "https://play.google.com/store/apps/details?id=com.rabbit_u_d_app.rabbit_services_app&pcampaignid=web_share",
      linkType: "playstore",
    },
    {
      id: 5,
      title: "WindayRoot - Electrical Services",
      description:
        "On-demand electrical services app with real-time tracking and service history.",
      icon: "🏠",
      tags: ["Flutter", "Provider", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.windayroot.customer_app&pcampaignid=web_share",
      linkType: "playstore",
    },
    {
      id: 6,
      title: "NearTake - Food Delivery",
      description:
        "Food delivery ecosystem with real-time order tracking and delivery optimization.",
      icon: "🍽️",
      tags: ["Flutter", "Getx", "REST APIs"],
      link: "https://neartake.example.com/demo",
      linkType: "demo",
    },
    {
      id: 7,
      title: "thankxbook",
      description:
        "User can buy and sell used books online with secure payment and reviews.",
      icon: "🙏",
      tags: ["Flutter", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.windayroot.library_app&pcampaignid=web_share",
      linkType: "playstore",
    },
    {
      id: 8,
      title: "PikDop - Book a ride",
      description:
        "Ride-hailing app with real-time tracking, fare estimates, and driver ratings.",
      icon: "🚗",
      tags: [
        "Flutter",
        "Firebase",
        "Google Maps",
        "Cloud Functions",
        "Push Notifications",
      ],
      link: "https://play.google.com/store/apps/details?id=com.pikdop_service.customer_app&pcampaignid=web_share",
      linkType: "playstore",
    },
  ];

  const filters = ["All", "Flutter", "Next.js", "Firebase", "React"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  // Function to get link icon based on type
  const getLinkIcon = (type: string) => {
    switch (type) {
      case "web":
        return "🌐";
      case "playstore":
        return "📱";
      case "github":
        return "💻";
      case "demo":
        return "🚀";
      default:
        return "🔗";
    }
  };

  // Function to get link text based on type
  const getLinkText = (type: string) => {
    switch (type) {
      case "web":
        return "Visit Website";
      case "playstore":
        return "View on Play Store";
      case "github":
        return "View Code";
      case "demo":
        return "Live Demo";
      default:
        return "View Project";
    }
  };

  const handleProjectClick = (project: Project) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

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
              className={`bg-white border border-gray-200 rounded-lg p-6 transition-all ${
                project.link
                  ? "hover:border-blue-500 hover:shadow-md cursor-pointer"
                  : "hover:border-gray-300"
              }`}
              onClick={() => project.link && handleProjectClick(project)}
            >
              {/* Icon and Link Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl">{project.icon}</div>
                {project.link && (
                  <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
                    <span>{getLinkIcon(project.linkType!)}</span>
                    <span className="hidden sm:inline">
                      {project.linkType === "playstore"
                        ? "Android"
                        : project.linkType}
                    </span>
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link Button */}
              {project.link && (
                <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mt-4 pt-4 border-t border-gray-100">
                  <span>{getLinkIcon(project.linkType!)}</span>
                  <span>{getLinkText(project.linkType!)}</span>
                  <span>→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() =>
              window.open("https://github.com/yourusername", "_blank")
            }
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
