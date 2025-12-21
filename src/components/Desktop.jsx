import React, { useState, memo } from 'react';
import Taskbar from './Taskbar';
import Window from './Window';
import AboutApp from './apps/AboutApp';
import ExperienceApp from './apps/ExperienceApp';
import ProjectsApp from './apps/ProjectsApp';
import SkillsApp from './apps/SkillsApp';
import ContactApp from './apps/ContactApp';
import TerminalApp from './apps/TerminalApp';
import { User, Briefcase, FolderKanban, Code, Mail, Terminal } from 'lucide-react';

const Desktop = () => {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  const apps = [
    { id: 'about', name: 'About Me', icon: User, component: AboutApp, color: '#00d9ff' },
    { id: 'experience', name: 'Experience', icon: Briefcase, component: ExperienceApp, color: '#a855f7' },
    { id: 'projects', name: 'Projects', icon: FolderKanban, component: ProjectsApp, color: '#3b82f6' },
    { id: 'skills', name: 'Skills', icon: Code, component: SkillsApp, color: '#10b981' },
    { id: 'contact', name: 'Contact', icon: Mail, component: ContactApp, color: '#f59e0b' },
    { id: 'terminal', name: 'Terminal', icon: Terminal, component: TerminalApp, color: '#ef4444' }
  ];

  const openWindow = (appId) => {
    if (!windows.find(w => w.id === appId)) {
      const app = apps.find(a => a.id === appId);
      const newWindow = {
        id: appId,
        title: app.name,
        component: app.component,
        color: app.color,
        position: { x: 100 + windows.length * 30, y: 80 + windows.length * 30 },
        size: { width: 800, height: 600 },
        minimized: false
      };
      setWindows([...windows, newWindow]);
      setActiveWindow(appId);
    } else {
      setActiveWindow(appId);
      const window = windows.find(w => w.id === appId);
      if (window.minimized) {
        setWindows(windows.map(w => w.id === appId ? { ...w, minimized: false } : w));
      }
    }
  };

  const closeWindow = (appId) => {
    setWindows(windows.filter(w => w.id !== appId));
    if (activeWindow === appId) {
      setActiveWindow(windows.length > 1 ? windows[windows.length - 2].id : null);
    }
  };

  const minimizeWindow = (appId) => {
    setWindows(windows.map(w => w.id === appId ? { ...w, minimized: true } : w));
  };

  const updateWindowPosition = (appId, position) => {
    setWindows(windows.map(w => w.id === appId ? { ...w, position } : w));
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Desktop Icons */}
      <div className="absolute top-8 left-8 grid grid-cols-1 gap-6 z-10">
        {apps.slice(0, 4).map((app) => (
          <button
            key={app.id}
            onClick={() => openWindow(app.id)}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-colors group"
          >
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform">
              <app.icon className="w-8 h-8" style={{ color: app.color }} />
            </div>
            <span className="text-white text-sm font-medium">{app.name}</span>
          </button>
        ))}
      </div>

      {/* Windows */}
      <div className="absolute inset-0">
        {windows.map((window) => (
          !window.minimized && (
            <Window
              key={window.id}
              id={window.id}
              title={window.title}
              color={window.color}
              position={window.position}
              size={window.size}
              isActive={activeWindow === window.id}
              onClose={() => closeWindow(window.id)}
              onMinimize={() => minimizeWindow(window.id)}
              onFocus={() => setActiveWindow(window.id)}
              onPositionChange={(pos) => updateWindowPosition(window.id, pos)}
            >
              <window.component />
            </Window>
          )
        ))}
      </div>

      {/* Taskbar */}
      <Taskbar
        apps={apps}
        windows={windows}
        onAppClick={openWindow}
        activeWindow={activeWindow}
      />
    </div>
  );
};

export default memo(Desktop);