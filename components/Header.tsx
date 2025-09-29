import React from "react";
import Image from "next/image";

const Header = () => {
  const navItems = ["Home", "About", "Projects", "Blogs"];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="flex items-center space-x-8 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-md backdrop-blur-md">
        {/* Profile Image */}
        <div className="w-10 h-10 rounded-full overflow-hidden border">
          <Image
            src="/portfolio.png"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>

        {/* Nav Links */}
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-lg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="px-5 py-2 rounded-full bg-gray-900 text-white font-semibold hover:bg-blue-600 transition text-lg"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
