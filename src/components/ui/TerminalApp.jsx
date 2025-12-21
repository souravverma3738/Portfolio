import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../../data/mock';

const TerminalApp = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Sourav\'s Portfolio Terminal v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands' },
    { type: 'prompt', text: '' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const commands = {
    help: () => [
      'Available commands:',
      '  about      - Display information about me',
      '  skills     - List my technical skills',
      '  projects   - Show my projects',
      '  contact    - Display contact information',
      '  clear      - Clear the terminal',
      '  whoami     - Display current user'
    ],
    about: () => [
      `Name: ${portfolioData.profile.name}`,
      `Role: ${portfolioData.profile.title}`,
      `Location: ${portfolioData.profile.location}`,
      `Email: ${portfolioData.profile.email}`,
      '',
      portfolioData.profile.summary
    ],
    skills: () => [
      'Technical Skills:',
      '',
      `Languages: ${portfolioData.skills.languages.join(', ')}`,
      `Backend: ${portfolioData.skills.backend.join(', ')}`,
      `Frontend: ${portfolioData.skills.frontend.join(', ')}`,
      `Databases: ${portfolioData.skills.databases.join(', ')}`,
      `Cloud: ${portfolioData.skills.cloud.join(', ')}`,
    ],
    projects: () => [
      'Featured Projects:',
      '',
      ...portfolioData.projects.map(p => `${p.name} - ${p.description}`)
    ],
    contact: () => [
      'Contact Information:',
      '',
      `Email: ${portfolioData.profile.email}`,
      `Phone: ${portfolioData.profile.phone}`,
      `LinkedIn: ${portfolioData.profile.linkedin}`,
      `GitHub: ${portfolioData.profile.github}`
    ],
    whoami: () => ['sourav@portfolio'],
    clear: () => null
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    const newHistory = [...history];
    newHistory.push({ type: 'command', text: `$ ${input}` });

    if (cmd === 'clear') {
      setHistory([{ type: 'prompt', text: '' }]);
      setInput('');
      return;
    }

    if (cmd in commands) {
      const output = commands[cmd]();
      if (Array.isArray(output)) {
        output.forEach(line => {
          newHistory.push({ type: 'output', text: line });
        });
      }
    } else if (cmd === '') {
      // Do nothing for empty input
    } else {
      newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help" for available commands.` });
    }

    newHistory.push({ type: 'prompt', text: '' });
    setHistory(newHistory);
    setInput('');
  };

  return (
    <div 
      className="h-full bg-black/95 p-6 font-mono text-sm overflow-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="space-y-1">
        {history.map((item, index) => (
          <div key={index} className="leading-relaxed">
            {item.type === 'system' && (
              <div className="text-green-400">{item.text}</div>
            )}
            {item.type === 'command' && (
              <div className="text-cyan-400">{item.text}</div>
            )}
            {item.type === 'output' && (
              <div className="text-gray-300">{item.text}</div>
            )}
            {item.type === 'error' && (
              <div className="text-red-400">{item.text}</div>
            )}
            {item.type === 'prompt' && (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white"
                  autoFocus
                />
                <span className="text-white animate-pulse">_</span>
              </form>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default TerminalApp;
