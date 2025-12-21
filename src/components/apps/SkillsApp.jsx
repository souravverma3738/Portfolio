import React from 'react';
import { portfolioData } from '../../data/mock';
import { Code, Server, Database, Cloud, Wrench, TestTube, GitBranch } from 'lucide-react';

const SkillsApp = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { name: 'Languages', icon: Code, items: skills.languages, color: 'from-cyan-500 to-blue-500' },
    { name: 'Frontend', icon: Code, items: skills.frontend, color: 'from-pink-500 to-purple-500' },
    { name: 'Backend', icon: Server, items: skills.backend, color: 'from-green-500 to-emerald-500' },
    { name: 'Databases', icon: Database, items: skills.databases, color: 'from-orange-500 to-red-500' },
    { name: 'Cloud & DevOps', icon: Cloud, items: skills.cloud, color: 'from-blue-500 to-cyan-500' },
    { name: 'Tools', icon: Wrench, items: skills.tools, color: 'from-purple-500 to-pink-500' },
    { name: 'Testing', icon: TestTube, items: skills.testing, color: 'from-yellow-500 to-orange-500' },
    { name: 'Methodologies', icon: GitBranch, items: skills.methodologies, color: 'from-indigo-500 to-purple-500' }
  ];

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}>
                <category.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, idx) => (
                <span 
                  key={idx}
                  className={`px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 border border-white/20 hover:border-white/40 transition-all hover:scale-105 cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-500/30 text-center">
          <div className="text-3xl font-bold text-cyan-400">{skills.languages.length}</div>
          <div className="text-sm text-gray-400 mt-1">Languages</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30 text-center">
          <div className="text-3xl font-bold text-purple-400">{skills.backend.length}</div>
          <div className="text-sm text-gray-400 mt-1">Frameworks</div>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30 text-center">
          <div className="text-3xl font-bold text-green-400">{skills.databases.length}</div>
          <div className="text-sm text-gray-400 mt-1">Databases</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/30 text-center">
          <div className="text-3xl font-bold text-orange-400">{skills.cloud.length}</div>
          <div className="text-sm text-gray-400 mt-1">Cloud Tools</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsApp;
