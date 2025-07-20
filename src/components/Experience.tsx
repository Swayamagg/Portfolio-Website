import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Frontend Web Development Trainee',
      company: 'IBM',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      type: 'Internship',
      description: 'Gained hands-on experience in modern frontend development practices and technologies.',
      responsibilities: [
        'Developed responsive user interfaces using React.js and modern CSS frameworks',
        'Integrated RESTful APIs to create dynamic and interactive web applications',
        'Implemented responsive design principles ensuring cross-device compatibility',
        'Collaborated with development teams on agile project methodologies',
        'Optimized application performance and user experience through best practices'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs', 'Responsive Design']
    },
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Creating Dimensions',
      location: 'Remote',
      duration: 'Mar 2024 - Present',
      type: 'Freelance',
      description: 'Led development of comprehensive EdTech platform with modern web technologies.',
      responsibilities: [
        'Built complete EdTech platform from ground up using MERN stack architecture',
        'Implemented Firebase for real-time database management and user authentication',
        'Developed robust admin panel for content management and user analytics',
        'Integrated secure payment gateways for seamless transaction processing',
        'Designed and implemented comprehensive authentication and authorization systems',
        'Optimized application performance and implemented SEO best practices'
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase', 'Payment Integration']
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Practical experience building real-world applications and working with industry-standard technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                        <Briefcase size={20} className="text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Internship' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-3">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Key Responsibilities:
                  </h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;