import React from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const Journey = () => {
  const timeline: TimelineEvent[] = [
    {
      year: "2025",
      title: "iOS Development Journey",
      description:
        "Started iOS development with SwiftUI and bought a new MacBook to enhance development capabilities",
      icon: "🍎",
      color: "bg-blue-500",
    },
    {
      year: "2024",
      title: "Full Stack Developer Journey",
      description:
        "Began exploring MERN stack development after working with React & Next.js. Built Rabbit Service project with Firebase.",
      icon: "🚀",
      color: "bg-purple-500",
    },
    {
      year: "2023",
      title: "Flutter Developer at Mylext Infotech",
      description:
        "Secured position as Junior Flutter Developer, worked on multiple client projects, code refactoring and feature development",
      icon: "💼",
      color: "bg-green-500",
    },
    {
      year: "2022",
      title: "Growth & Learning Phase",
      description:
        "Pursued MCA at JS University Sikhobad while interviewing across major tech hubs - Bangalore, Indore, Chennai, Hyderabad, Delhi and Mohali",
      icon: "📚",
      color: "bg-amber-500",
    },
    {
      year: "2021",
      title: "First Job at Awiskar Technology",
      description:
        "Started career journey in Vizag (City of Destiny) at a startup. Despite challenges, gained valuable experience working with supportive colleagues",
      icon: "💻",
      color: "bg-red-500",
    },
    {
      year: "2021",
      title: "Computer Science Graduate",
      description:
        "Completed Bachelor's degree, laying foundation for software development career",
      icon: "🎓",
      color: "bg-teal-500",
    },
    {
      year: "2020",
      title: "Met Someone Special",
      description:
        "First time I saw her smile and I remember I don't know her name but I call her green mask pink bag. Named her Devsena for her strong attitude that I admire. She became my inspiration and motivation to grow.",
      icon: "💝",
      color: "bg-pink-500",
    },
  ];

  return (
    <section id="journey" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">My Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The milestones that shaped my career and personal growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((event, index) => (
            <div key={index} className="flex gap-6 mb-8 group">
              {/* Year */}
              <div className="w-20 flex-shrink-0">
                <div className="text-lg font-semibold text-black bg-gray-100 px-3 py-1 rounded-full text-center">
                  {event.year}
                </div>
              </div>

              {/* Timeline dot and line */}
              <div className="flex flex-col items-center w-10 flex-shrink-0">
                <div
                  className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {event.icon}
                </div>
                {index !== timeline.length - 1 && (
                  <div className="w-1 h-full bg-gray-200 mt-2"></div>
                )}
              </div>

              {/* Event content */}
              <div className="flex-1 pb-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 group-hover:border-blue-300 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <div className="bg-black text-white rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              Ready to write the next chapter?
            </h3>
            <p className="text-gray-300 mb-4">
              Let&apos;s build something amazing together
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
