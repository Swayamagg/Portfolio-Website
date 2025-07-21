import React from 'react';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'JWT Authentication', level: 80 }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript','Tailwind CSS', 'Git', 'Firebase', 'REST API',  'HTML5', 'CSS3',
    'Java'];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive technical expertise across full-stack development and modern technologies
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${darkMode ? 'bg-gray-700' : ''}`}>
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className={`p-8 rounded-xl ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`text-xl font-semibold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600' 
                    : 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 hover:from-blue-100 hover:to-indigo-100 border border-blue-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 