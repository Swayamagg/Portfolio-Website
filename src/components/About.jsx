import React from 'react';
import { Code, Database, Globe, Lightbulb, Download, Github, Linkedin } from 'lucide-react';

const About = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Data Structures & Algorithms',
      description: 'Strong foundation in problem-solving with optimized algorithmic thinking'
    },
    {
      icon: <Globe size={24} />,
      title: 'Full Stack Development',
      description: 'Proficient in MERN stack with hands-on experience in building scalable applications'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Management',
      description: 'Experience with MongoDB, Firebase, and relational database design'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Continuous Learning',
      description: 'Passionate about staying updated with latest technologies and best practices'
    }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Passionate Developer & Problem Solver
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a dedicated B.Tech Computer Science & Engineering student with a strong passion for 
              software development and emerging technologies. My journey in programming has been driven 
              by curiosity and a desire to create solutions that make a real impact.
            </p>
            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              With expertise in Data Structures & Algorithms and Full Stack Web Development using the 
              MERN stack, I enjoy tackling complex problems and building user-centric applications. 
              My experience spans from frontend development with React to backend services with Node.js 
              and database management.
            </p>
            <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I believe in continuous learning and staying ahead of technology trends. Whether it's 
              exploring new frameworks, contributing to open-source projects, or building innovative 
              solutions, I'm always excited to take on new challenges.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-medium">
                Innovation Driven
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1uLSwdn7Us0jtPMklLrN2joF1NIXElzZb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="https://github.com/Swayamagg"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                <Github size={20} />
                View GitHub
              </a>
              <a
                href="https://linkedin.com/in/swayamaggarwal80"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 