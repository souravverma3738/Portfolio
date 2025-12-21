import React, { useState, useEffect } from 'react';
import { Power, Volume2, Wifi, Battery } from 'lucide-react';

const Taskbar = ({ apps, windows, onAppClick, activeWindow }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/40 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-4 z-50">
      {/* Left Section - App Icons */}
      <div className="flex items-center gap-2">
        {apps.map((app) => {
          const isOpen = windows.find(w => w.id === app.id);
          const isActiveApp = activeWindow === app.id;
          return (
            <button
              key={app.id}
              onClick={() => onAppClick(app.id)}
              className={`p-3 rounded-lg transition-all duration-200 hover:bg-white/10 relative group ${
                isOpen ? 'bg-white/5' : ''
              }`}
              title={app.name}
            >
              <app.icon 
                className="w-6 h-6" 
                style={{ color: isActiveApp ? app.color : '#ffffff' }}
              />
              {isOpen && (
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ backgroundColor: app.color }}
                ></div>
              )}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {app.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Center Section - Date/Time */}
      <div className="flex flex-col items-center text-white">
        <span className="text-sm font-semibold">{formatTime(time)}</span>
        <span className="text-xs text-white/60">{formatDate(time)}</span>
      </div>

      {/* Right Section - System Icons */}
      <div className="flex items-center gap-3">
        <Volume2 className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
        <Wifi className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
        <Battery className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
        <div className="w-px h-6 bg-white/20 mx-1"></div>
        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors group">
          <Power className="w-5 h-5 text-white/80 group-hover:text-red-400 transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default Taskbar;
