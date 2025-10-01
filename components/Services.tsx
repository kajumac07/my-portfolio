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

  const getServiceColor = (index: number) => {
    const colors = [
      "bg-blue-50 border-blue-100 hover:border-blue-300",
      "bg-green-50 border-green-100 hover:border-green-300",
      "bg-purple-50 border-purple-100 hover:border-purple-300",
      "bg-orange-50 border-orange-100 hover:border-orange-300",
    ];
    return colors[index % colors.length];
  };

  const getIconColor = (index: number) => {
    const colors = [
      "bg-blue-100 text-blue-600",
      "bg-green-100 text-green-600",
      "bg-purple-100 text-purple-600",
      "bg-orange-100 text-orange-600",
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-2xl mb-6">
            <span className="text-3xl text-white">✨</span>
          </div>
          <h2 className="text-5xl font-bold text-black mb-6">What I Do</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            I specialize in creating mobile applications that are fast,
            beautiful, and user-friendly with modern technologies and best
            practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl border-2 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${getServiceColor(
                index
              )}`}
            >
              {/* Background Pattern Effect */}
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 ${getIconColor(
                    index
                  )}`}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-2xl">→</span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-current" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Projects Completed
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                30+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Happy Clients
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                4+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Years Experience
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                99%
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-black rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let&apos;s work together to bring your mobile app idea to life
              with cutting-edge technology and exceptional user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
                Start a Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 transform">
                View My Work
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Every project is an opportunity to create something amazing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
