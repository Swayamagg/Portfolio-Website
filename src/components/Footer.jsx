import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Swayamagg'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/swayamaggarwal80'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:swayamaggarwal777@gmail.com'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-12 border-t ${
      darkMode 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Swayam Aggarwal
            </h3>
            <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Aspiring Software Engineer passionate about creating innovative solutions 
              and building cutting-edge applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    darkMode 
                      ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200'
                  }`}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`text-sm transition-colors duration-200 hover:text-blue-600 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Info
            </h4>
            <div className="space-y-2 text-sm">
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:swayamaggarwal777@gmail.com"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  swayamaggarwal777@gmail.com
                </a>
              </p>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                <span className="font-medium">Location:</span> Delhi, India
              </p>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                <span className="font-medium">Status:</span> Open to opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-8 pt-8 border-t text-center ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <p className={`text-sm flex items-center justify-center gap-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {currentYear} Swayam Aggarwal. Made with{' '}
            <Heart size={16} className="text-red-500" fill="currentColor" />{' '}
            and lots of code.
          </p>
          <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Built with React, JavaScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 