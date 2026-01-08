import React, { memo } from 'react';
import { portfolioData } from '../../data/mock';
import { MapPin, Mail, Phone, Linkedin, Github, Download, GraduationCap, Award, User } from 'lucide-react';

const AboutApp = () => {
  const { profile, education, certifications } = portfolioData;

  return (
    <div className="p-6 text-white">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <h2 className="text-xl text-cyan-400 mb-3">{profile.title}</h2>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {profile.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <a href={`mailto:${profile.email}`} className="hover:text-cyan-400 transition-colors">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <a href={`tel:${profile.phone}`} className="hover:text-cyan-400 transition-colors">
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <a 
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a 
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-cyan-500 rounded"></div>
          About Me
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {profile.summary}
        </p>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-purple-500 rounded"></div>
          Education
        </h3>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-colors">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <GraduationCap className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg">{education.degree}</h4>
              <p className="text-cyan-400">{education.university}</p>
              <p className="text-sm text-gray-400">{education.location}</p>
              <p className="text-sm text-gray-500 mt-1">{education.duration}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-blue-500 rounded"></div>
          Certifications
        </h3>
        <div className="grid gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm text-gray-400">{cert.provider}</p>
                  <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(AboutApp);