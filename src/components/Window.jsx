import React, { useState, useRef, useEffect, memo } from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';

const Window = ({
  id,
  title,
  color,
  position,
  size,
  isActive,
  onClose,
  onMinimize,
  onFocus,
  onPositionChange,
  children
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-content') || e.target.closest('.window-controls')) {
      return;
    }
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - size.width));
        const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - 100));
        onPositionChange({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, position, size, onPositionChange]);

  return (
    <div
      ref={windowRef}
      className={`absolute rounded-xl overflow-hidden shadow-2xl transition-opacity duration-100 ${
        isActive ? 'z-50' : 'z-40'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        opacity: isActive ? 1 : 0.95
      }}
      onClick={onFocus}
    >
      {/* Window Header */}
      <div
        className="window-header h-12 px-4 flex items-center justify-between cursor-move select-none"
        style={{
          background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
          borderBottom: `2px solid ${color}40`,
          backdropFilter: 'blur(10px)'
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-2 window-controls">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            />
            <button
              onClick={onMinimize}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            />
            <button
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
            />
          </div>
          <span className="text-white font-medium text-sm">{title}</span>
        </div>
      </div>

      {/* Window Content */}
      <div
        className="window-content h-[calc(100%-3rem)] overflow-auto bg-gray-900/95 backdrop-blur-md"
        style={{
          borderLeft: `1px solid ${color}30`,
          borderRight: `1px solid ${color}30`,
          borderBottom: `1px solid ${color}30`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Window);