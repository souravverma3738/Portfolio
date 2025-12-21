import React from 'react';
import { portfolioData } from '../../data/mock';
import { Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const ExperienceApp = () => {
  const { experience } = portfolioData;

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Professional Experience
      </h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-blue-500"></div>

        {/* Experience Items */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-3.5 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-gray-900 shadow-lg shadow-cyan-500/50"></div>

              {/* Content Card */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-white mt-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceApp;
