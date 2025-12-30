import React, { memo } from 'react';
import { portfolioData } from '../../data/mock';
import { ExternalLink, Star, Github } from 'lucide-react';

const ProjectsApp = () => {
  const { projects } = portfolioData;

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-gray-800">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            </div>

            {/* Project Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-cyan-400">{project.name}</h3>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 rounded-lg transition-all flex items-center gap-2"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg transition-all flex items-center gap-2"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Highlights */}
              <div className="space-y-2 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-400">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300"
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
  );
};

export default memo(ProjectsApp);