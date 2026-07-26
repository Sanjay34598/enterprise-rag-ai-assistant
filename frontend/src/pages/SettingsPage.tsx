import React from 'react';

export const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">System Settings</h1>
        <p className="text-sm text-slate-400">Configure LLM Provider, Vector Store, and Environment Parameters</p>
      </div>

      <div className="bg-dark-card border border-dark-border p-6 rounded-xl space-y-6">
        <div>
          <h2 className="text-base font-semibold text-slate-200 mb-4">LLM Configuration</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Provider Engine</label>
              <input
                disabled
                value="Ollama (Local Open Source)"
                className="w-full px-3 py-2 bg-dark-sidebar border border-dark-border rounded text-sm text-slate-400 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Vector Database Engine</label>
              <input
                disabled
                value="PostgreSQL + PGVector"
                className="w-full px-3 py-2 bg-dark-sidebar border border-dark-border rounded text-sm text-slate-400 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-dark-border text-xs text-slate-500">
          {/* TODO: Add settings update service handlers in Settings milestone */}
          <p>System configuration parameters will become editable in future feature milestones.</p>
        </div>
      </div>
    </div>
  );
};
