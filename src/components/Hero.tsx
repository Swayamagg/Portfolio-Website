import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-emerald-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className={`w-48 h-48 rounded-full overflow-hidden border-4 shadow-xl ${
              darkMode ? 'border-blue-400 bg-gray-800' : 'border-white bg-gradient-to-br from-blue-400 to-indigo-600'
            }`}>
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white">
                SA
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            darkMode ? 'text-white drop-shadow-lg' : 'text-gray-900'
          }`}>
            <span className={`block ${darkMode ? 'text-white' : 'text-gray-900'}`}>Swayam</span>
            <span className={`block font-extrabold ${
              darkMode 
                ? 'text-blue-400 drop-shadow-lg' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
            }`}>
              Aggarwal
            </span>
          </h1>

          <p className={`text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Aspiring Software Engineer | Full Stack Developer | AI Enthusiast
          </p>

          <p className={`text-lg mb-12 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            B.Tech Computer Science & Engineering student passionate about creating innovative solutions 
            and building cutting-edge applications with modern technologies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:swayamaggarwal777@gmail.com"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-white text-gray-600 hover:text-blue-600 shadow-md hover:shadow-lg'
              }`}
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/swayamaggarwal80"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-white text-gray-600 hover:text-blue-600 shadow-md hover:shadow-lg'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Swayamagg"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-white text-gray-600 hover:text-blue-600 shadow-md hover:shadow-lg'
              }`}
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          darkMode ? 'border-gray-400' : 'border-gray-400'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
            darkMode ? 'bg-gray-400' : 'bg-gray-600'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;