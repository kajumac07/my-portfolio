import React from "react";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Cross-Platform Apps",
      description:
        "Build once, run anywhere with Flutter for iOS and Android with single codebase.",
      icon: "📱",
    },
    {
      title: "iOS Development",
      description:
        "Native iOS apps using SwiftUI and UIKit with modern Apple ecosystem integration.",
      icon: "🍎",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces that enhance user experience.",
      icon: "🎨",
    },
    {
      title: "Backend Integration",
      description:
        "Seamless integration with Firebase, REST APIs, and cloud services.",
      icon: "⚡",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">What I Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in creating mobile applications that are fast,
            beautiful, and user-friendly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-blue-500 hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
