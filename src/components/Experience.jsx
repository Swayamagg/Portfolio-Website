import React from 'react';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Frontend Web Development Trainee',
      company: 'IBM',
      location: '',
      duration: '07/2025 - Present',
      description: [
        'Building responsive, accessible, and scalable interfaces using React, with integration of REST APIs and advanced JavaScript features.',
        'Collaborating in a team-based environment to deliver real-world projects with industry-level code quality and UI/UX standards.'
      ],
      technologies: ['React', 'REST APIs', 'JavaScript', 'UI/UX'],
      link: ''
    },
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Creating Dimensions',
      location: '',
      duration: '05/2025 - Present',
      description: [
        'Ensuring a secure and intuitive user experience with responsive UI/UX.',
        'Developing an EdTech platform using Full Stack (Firebase, Express.js, React.js, Node.js).',
        'Building a content delivery system for written notes.',
        'Creating an admin panel for managing and updating study materials.',
        'Implementing user authentication and payment integration.'
      ],
      technologies: ['Firebase', 'Express.js', 'React.js', 'Node.js', 'UI/UX', 'Authentication', 'Payment Integration'],
      link: ''
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My journey in software development, from academic projects to real-world applications.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className={`relative ${index !== experiences.length - 1 ? 'pb-12' : ''}`}>
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className={`absolute left-8 top-16 w-0.5 h-full ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-blue-600' : 'bg-blue-500'
                }`}>
                  <Building size={24} className="text-white" />
                </div>

                {/* Content */}
                <div className={`flex-1 p-6 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {experience.title}
                      </h3>
                      <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                      <div className="flex items-center space-x-1 text-sm">
                        <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                          {experience.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm">
                        <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className={`space-y-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          darkMode ? 'bg-blue-400' : 'bg-blue-500'
                        }`}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            darkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {experience.link && experience.link !== '#' && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                          darkMode 
                            ? 'text-blue-400 hover:text-blue-300' 
                            : 'text-blue-600 hover:text-blue-500'
                        }`}
                      >
                        <span>View Details</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center p-8 rounded-xl ${
          darkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Looking for Opportunities
          </h3>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm actively seeking internship and full-time opportunities in software development.
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              darkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience; 