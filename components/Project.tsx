"use client";

import React, { useState } from "react";

interface ProjectLink {
  type: "web" | "playstore" | "appstore" | "github" | "demo";
  url: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  links?: ProjectLink[];
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
      links: [
        {
          type: "web",
          url: "https://journey-junction-olive.vercel.app/",
        },
      ],
    },
    {
      id: 2,
      title: "Rozgaar - Resume Upload Portal",
      description:
        "Job application platform where users can upload resumes and admins can download them.",
      icon: "📄",
      tags: ["Next.js", "Firebase"],
      links: [
        {
          type: "web",
          url: "https://www.rozgaar.net/",
        },
      ],
    },
    {
      id: 3,
      title: "Family Alert - Emergency Insurance Network",
      description:
        "Emergency voice-call solution for accident victims with QR code emergency contacts.",
      icon: "🚨",
      tags: ["Next.js", "ZegoCloud", "Firebase"],
      links: [
        {
          type: "web",
          url: "https://www.familyalert.life/share/aS3xZ2CzZ5cxXdHnU523S7gksdG3-SqWoVhrk0Qlr56Z7bvj5",
        },
      ],
    },
    {
      id: 4,
      title: "RabbitServices - Fleet Management",
      description:
        "Fleet management solution for truck maintenance and repairs with real-time diagnostics. User can find mechanics and User can create its Own team (Driver, Accountant, Mechanic, Co-Owner).and assign them different roles. User can track its vehicle in real-time.",
      icon: "🚛",
      tags: ["Flutter", "Firebase", "Next.js"],
      links: [
        {
          type: "playstore",
          url: "https://play.google.com/store/apps/details?id=com.rabbit_u_d_app.rabbit_services_app&pcampaignid=web_share",
        },
        {
          type: "appstore",
          url: "https://apps.apple.com/us/app/rabbit-mechanic-service/id6739995003",
        },
        {
          type: "web",
          url: "https://www.rabbitmechanic.com/",
        },
      ],
    },
    {
      id: 5,
      title: "WindayRoot - Electrical Services",
      description:
        "On-demand electrical services app with real-time tracking and service history.",
      icon: "🏠",
      tags: ["Flutter", "Provider", "Firebase"],
      links: [
        {
          type: "playstore",
          url: "https://play.google.com/store/apps/details?id=com.windayroot.customer_app&pcampaignid=web_share",
        },
        // {
        //   type: "appstore",
        //   url: "https://apps.apple.com/us/app/windayroot/id6479606468",
        // },
      ],
    },
    {
      id: 6,
      title: "NearTake - Food Delivery",
      description:
        "Food delivery ecosystem with real-time order tracking and delivery optimization.",
      icon: "🍽️",
      tags: ["Flutter", "Getx", "REST APIs"],
      links: [
        {
          type: "demo",
          url: "https://github.com/atultiwari7388/project_near_take",
        },
      ],
    },
    {
      id: 7,
      title: "thankxbook",
      description:
        "User can buy and sell used books online with secure payment and reviews.",
      icon: "🙏",
      tags: ["Flutter", "Firebase"],
      links: [
        {
          type: "playstore",
          url: "https://play.google.com/store/apps/details?id=com.windayroot.library_app&pcampaignid=web_share",
        },
      ],
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
      links: [
        {
          type: "playstore",
          url: "https://play.google.com/store/apps/details?id=com.pikdop_service.customer_app&pcampaignid=web_share",
        },
        // {
        //   type: "appstore",
        //   url: "https://apps.apple.com/us/app/pikdop/id6479612467",
        // },
      ],
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
        return "🤖";
      case "appstore":
        return "🍎";
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
        return "Website";
      case "playstore":
        return "Android";
      case "appstore":
        return "iOS";
      case "github":
        return "Code";
      case "demo":
        return "Demo";
      default:
        return "View";
    }
  };

  const handleLinkClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleProjectClick = (project: Project) => {
    // If project has only one link, open it directly
    if (project.links && project.links.length === 1) {
      window.open(project.links[0].url, "_blank", "noopener,noreferrer");
    }
    // If multiple links, don't do anything on card click - let user choose
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
                project.links && project.links.length > 0
                  ? "hover:border-blue-500 hover:shadow-md cursor-pointer"
                  : "hover:border-gray-300"
              }`}
              onClick={() => project.links && handleProjectClick(project)}
            >
              {/* Icon and Links Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl">{project.icon}</div>
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-1 flex-wrap justify-end">
                    {project.links.slice(0, 3).map((link, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1"
                        title={getLinkText(link.type)}
                      >
                        <span>{getLinkIcon(link.type)}</span>
                        <span className="hidden sm:inline">
                          {getLinkText(link.type)}
                        </span>
                      </span>
                    ))}
                    {project.links.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{project.links.length - 3}
                      </span>
                    )}
                  </div>
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

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  {project.links.map((link, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleLinkClick(link.url, e)}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <span>{getLinkIcon(link.type)}</span>
                      <span>{getLinkText(link.type)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() =>
              window.open("https://github.com/kajumac07", "_blank")
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
