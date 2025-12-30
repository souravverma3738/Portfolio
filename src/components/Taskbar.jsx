import React, { useState, useEffect } from 'react';
import { Power, Volume2, Wifi, Battery, VolumeX, Volume1 } from 'lucide-react';

const Taskbar = ({ apps, windows, onAppClick, activeWindow }) => {
  const [time, setTime] = useState(new Date());
  const [showPowerMenu, setShowPowerMenu] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate battery level (you can replace with actual battery API if needed)
  useEffect(() => {
    const checkBattery = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await navigator.getBattery();
          setBatteryLevel(Math.round(battery.level * 100));
          setIsCharging(battery.charging);

          battery.addEventListener('levelchange', () => {
            setBatteryLevel(Math.round(battery.level * 100));
          });
          battery.addEventListener('chargingchange', () => {
            setIsCharging(battery.charging);
          });
        } catch (error) {
          console.log('Battery API not available');
        }
      }
    };
    checkBattery();
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

  const handlePowerAction = (action) => {
    switch(action) {
      case 'shutdown':
        if (window.confirm('Are you sure you want to shut down?')) {
          // Close the window/tab
          window.close();
          // If window.close() doesn't work (some browsers block it), redirect to blank page
          setTimeout(() => {
            window.location.href = 'about:blank';
          }, 100);
        }
        setShowPowerMenu(false);
        break;
      case 'restart':
        if (window.confirm('Are you sure you want to restart?')) {
          window.location.reload();
        }
        break;
      case 'sleep':
        // Create a sleep effect - fade to black
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position: fixed; inset: 0; background: black; z-index: 9999; transition: opacity 1s;';
        overlay.style.opacity = '0';
        document.body.appendChild(overlay);
        setTimeout(() => overlay.style.opacity = '1', 10);
        setShowPowerMenu(false);
        break;
      default:
        break;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return VolumeX;
    if (volume < 50) return Volume1;
    return Volume2;
  };

  const VolumeIcon = getVolumeIcon();

  const getBatteryColor = () => {
    if (isCharging) return 'text-green-400';
    if (batteryLevel > 50) return 'text-white/80';
    if (batteryLevel > 20) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <>
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
        <div className="flex items-center gap-3 relative">
          {/* Volume Control */}
          <div className="relative">
            <button
              onClick={toggleMute}
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              <VolumeIcon className="w-5 h-5 text-white/80 hover:text-white transition-colors" />
            </button>

            {/* Volume Slider */}
            {showVolumeSlider && (
              <div
                className="absolute bottom-full right-0 mb-2 p-3 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white text-xs font-semibold">{isMuted ? 'Muted' : `${volume}%`}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
                    style={{
                      writingMode: 'bt-lr',
                      WebkitAppearance: 'slider-vertical',
                      height: '100px',
                      width: '8px'
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* WiFi */}
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition-colors group relative"
            title="WiFi Connected"
          >
            <Wifi className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-white pointer-events-none">
              Connected to WiFi
            </div>
          </button>

          {/* Battery */}
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition-colors group relative"
            title={`Battery: ${batteryLevel}%${isCharging ? ' (Charging)' : ''}`}
          >
            <div className="relative">
              <Battery className={`w-5 h-5 ${getBatteryColor()} group-hover:text-white transition-colors`} />
              {isCharging && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-white pointer-events-none">
              Battery: {batteryLevel}%{isCharging ? ' (Charging)' : ''}
            </div>
          </button>

          <div className="w-px h-6 bg-white/20 mx-1"></div>

          {/* Power Button */}
          <div className="relative">
            <button
              onClick={() => setShowPowerMenu(!showPowerMenu)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors group"
              title="Power Options"
            >
              <Power className="w-5 h-5 text-white/80 group-hover:text-red-400 transition-colors" />
            </button>

            {/* Power Menu */}
            {showPowerMenu && (
              <>
                {/* Backdrop to close menu */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowPowerMenu(false)}
                ></div>

                {/* Power Menu Dropdown */}
                <div className="absolute bottom-full right-0 mb-2 w-48 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl overflow-hidden z-50">
                  <button
                    onClick={() => handlePowerAction('sleep')}
                    className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center gap-3 border-b border-white/10"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    Sleep
                  </button>
                  <button
                    onClick={() => handlePowerAction('restart')}
                    className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center gap-3 border-b border-white/10"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Restart
                  </button>
                  <button
                    onClick={() => handlePowerAction('shutdown')}
                    className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Shut Down
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS for volume slider */}
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00d9ff;
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0, 217, 255, 0.5);
        }
        input[type='range']::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00d9ff;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 5px rgba(0, 217, 255, 0.5);
        }
      `}</style>
    </>
  );
};

export default Taskbar;