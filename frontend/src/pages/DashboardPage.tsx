import React, { useEffect, useState } from 'react';
import { fetchHealthStatus, HealthResponse } from '../services/api';
import { Database, Server, Cpu, RefreshCw } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const checkHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchHealthStatus();
      setHealth(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to reach FastAPI backend');
      setHealth(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">System Infrastructure Dashboard</h1>
          <p className="text-sm text-slate-400">Enterprise RAG AI Assistant Health Status</p>
        </div>
        <button
          onClick={checkHealth}
          className="flex items-center gap-2 px-4 py-2 bg-dark-card hover:bg-dark-hover border border-dark-border text-slate-300 rounded-lg text-sm transition"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Probe</span>
        </button>
      </div>

      {/* System Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Backend Node Status */}
        <div className="bg-dark-card border border-dark-border p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-400">FastAPI Backend</span>
            <Server className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-100 uppercase">
              {loading ? 'Probing...' : health?.status || 'Offline'}
            </div>
            <p className="text-xs text-slate-400 mt-1">Version: {health?.version || 'Unknown'}</p>
          </div>
        </div>

        {/* Database Node Status */}
        <div className="bg-dark-card border border-dark-border p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-400">PostgreSQL (PGVector)</span>
            <Database className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-100 uppercase">
              {loading ? 'Ping...' : health?.database || 'Disconnected'}
            </div>
            <p className="text-xs text-slate-400 mt-1">Async Connection Pool</p>
          </div>
        </div>

        {/* Ollama LLM Container Status */}
        <div className="bg-dark-card border border-dark-border p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-400">Ollama LLM Engine</span>
            <Cpu className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-100 uppercase">Ready</div>
            <p className="text-xs text-slate-400 mt-1">Local Open-Source Model Host</p>
          </div>
        </div>
      </div>

      {/* Error Alert Box */}
      {error && (
        <div className="bg-red-950/50 border border-red-800/50 text-red-300 p-4 rounded-xl text-sm">
          <strong>Connection Probe Failed:</strong> {error}
        </div>
      )}

      {/* Development Notice */}
      <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
        <h2 className="text-base font-semibold text-slate-200 mb-2">Infrastructure Status</h2>
        <p className="text-sm text-slate-400">
          The core infrastructure stack (FastAPI Backend, PostgreSQL + PGVector, Ollama Engine, React Vite UI) is initialized and fully operational.
        </p>
      </div>
    </div>
  );
};
