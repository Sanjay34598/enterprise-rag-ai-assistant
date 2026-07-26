import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-dark-card border-b border-dark-border flex items-center justify-between px-8">
      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1 rounded-full">
        <Activity className="w-3.5 h-3.5 animate-pulse" />
        <span>System Engine Online</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-brand-500" />
          <span>Production Infrastructure</span>
        </div>
      </div>
    </header>
  );
};
