import React from 'react';

export const LoginPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-12 bg-dark-card border border-dark-border p-8 rounded-xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">User Login</h1>
        <p className="text-sm text-slate-400">Enterprise RAG AI Assistant Authentication</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
          <input
            type="email"
            disabled
            placeholder="user@organization.com"
            className="w-full px-4 py-2.5 bg-dark-sidebar border border-dark-border rounded-lg text-slate-400 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
          <input
            type="password"
            disabled
            placeholder="••••••••"
            className="w-full px-4 py-2.5 bg-dark-sidebar border border-dark-border rounded-lg text-slate-400 cursor-not-allowed"
          />
        </div>
        <button
          disabled
          className="w-full py-2.5 bg-brand-600/50 text-white font-medium rounded-lg cursor-not-allowed"
        >
          Sign In (Placeholder)
        </button>
      </div>

      <div className="text-xs text-center text-slate-500 border-t border-dark-border pt-4">
        {/* TODO: Implement JWT Authentication & OAuth2 in Auth feature milestone */}
        <p>Authentication forms will be activated in the Auth Milestone.</p>
      </div>
    </div>
  );
};
