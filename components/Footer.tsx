import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Journey", href: "#journey" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ATUL TIWARI
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Crafting exceptional mobile experiences with Flutter & iOS
              development. Turning ideas into performant, user-friendly
              applications that make an impact.
            </p>

            {/* Social Links */}
            {/* <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group bg-gray-800 p-3 rounded-xl hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
           */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-3 text-blue-400" />
                <a
                  href="mailto:atult8556@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  atult8556@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone size={18} className="mr-3 text-blue-400" />
                <a
                  href="tel:+918858559906"
                  className="hover:text-white transition-colors"
                >
                  +91 8960290289
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-3 text-blue-400" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} Atul Tiwari. Made with
              <Heart size={16} className="mx-2 text-red-500 fill-current" />
              and lots of coffee
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Available for freelance work</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-20 right-10 opacity-10">
          <div className="text-6xl">📱</div>
        </div>
        <div className="absolute bottom-32 left-10 opacity-10">
          <div className="text-4xl">⚡</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
