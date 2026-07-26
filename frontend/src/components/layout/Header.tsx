import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { logoutApi } from '../../services/api';
import { Activity, LogOut, User } from 'lucide-react';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const handleLogout = async () => {
    await logoutApi();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-dark-card border-b border-dark-border flex items-center justify-between px-8">
      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1 rounded-full">
        <Activity className="w-3.5 h-3.5 animate-pulse" />
        <span>System Engine Online</span>
      </div>

      <div className="flex items-center gap-6">
        {user && (
          <div className="flex items-center gap-2 text-xs text-slate-300 bg-dark-sidebar border border-dark-border px-3 py-1.5 rounded-lg">
            <User className="w-3.5 h-3.5 text-brand-500" />
            <span className="font-medium">{user.username}</span>
            <span className="text-slate-500">({user.email})</span>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400 transition"
          title="Sign Out"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </header>
  );
};
