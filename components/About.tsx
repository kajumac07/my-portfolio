import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* iPhone with Profile */}
          <div className="flex justify-center">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative w-80 h-[600px] bg-black rounded-[60px] border-[14px] border-black shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-20"></div>

                {/* Screen */}
                <div className="absolute inset-2 rounded-[50px] overflow-hidden bg-gray-900">
                  {/* App Icons Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-6 p-6">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 bg-white rounded-2xl"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Profile Photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src="/heroImg.png"
                        alt="Atul Tiwari - App Developer"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                        priority
                      />
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between text-white text-sm">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Dock */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-center space-x-4">
                    {["📱", "💬", "📷", "🎵"].map((icon, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-white text-lg"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Side Buttons */}
                <div className="absolute -left-2 top-32 w-1 h-16 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute -left-2 top-48 w-1 h-8 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute -right-2 top-40 w-1 h-20 bg-gray-800 rounded-r-lg"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg border-2 border-white">
                ⚡
              </div>
              <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-lg shadow-lg border-2 border-white">
                🚀
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-black mb-2">About Me</h2>
              <div className="text-xl text-blue-600 font-semibold mb-6">
                Mobile App Developer
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              I&apos;m a passionate{" "}
              <span className="font-semibold text-blue-600">
                Flutter & iOS Developer
              </span>{" "}
              with expertise in creating cross-platform mobile applications. I
              specialize in building performant, scalable, and user-friendly
              apps that provide exceptional experiences across all devices.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-black">Name</h4>
                <p className="text-gray-700">Atul Tiwari</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-black">Location</h4>
                <p className="text-gray-700">India 🇮🇳</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-black">Email</h4>
                <p className="text-blue-600">atult8556@gmail.com</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-black">Focus</h4>
                <p className="text-black font-semibold">Mobile Development</p>
              </div>
            </div>

            {/* Tech Specialization */}
            <div className="flex flex-wrap gap-2">
              {[
                "Flutter",
                "Dart",
                "iOS",
                "SwiftUI",
                "Firebase",
                "REST API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Download CV
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-lg border border-gray-300 hover:border-black transition-colors">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
