import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, FileText, Settings, LogIn, Database } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'AI Chat', path: '/chat', icon: MessageSquare },
    { name: 'Documents', path: '/documents', icon: FileText },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Login', path: '/login', icon: LogIn },
  ];

  return (
    <aside className="w-64 bg-dark-sidebar border-r border-dark-border flex flex-col min-h-screen">
      {/* Brand Logo */}
      <div className="h-16 flex items-center gap-3 px-6 border-b border-dark-border">
        <div className="p-2 bg-brand-600 rounded-lg text-white">
          <Database className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-bold text-sm text-slate-100 tracking-wide">Enterprise RAG</h1>
          <p className="text-xs text-slate-400">AI SaaS Assistant</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-dark-hover'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* System Badge */}
      <div className="p-4 border-t border-dark-border text-xs text-slate-500">
        <p>Enterprise Stack v1.0.0</p>
      </div>
    </aside>
  );
};
