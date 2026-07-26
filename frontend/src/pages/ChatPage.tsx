import React from 'react';
import { Send, Bot } from 'lucide-react';

export const ChatPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-dark-card border border-dark-border rounded-xl">
      {/* Chat Header */}
      <div className="h-14 border-b border-dark-border px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bot className="w-5 h-5 text-brand-500" />
          <span className="font-semibold text-sm text-slate-200">RAG Conversation Assistant</span>
        </div>
      </div>

      {/* Message List Area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        <div className="bg-dark-sidebar border border-dark-border p-4 rounded-xl max-w-xl text-sm text-slate-300">
          Hello! I am your Enterprise RAG AI Assistant. Once the RAG pipeline milestone is enabled, you will be able to query ingested document knowledge directly.
        </div>
      </div>

      {/* Input Form Box */}
      <div className="p-4 border-t border-dark-border">
        <div className="flex items-center gap-3 bg-dark-sidebar border border-dark-border px-4 py-2 rounded-xl">
          <input
            type="text"
            disabled
            placeholder="Ask a question about your documents... (Placeholder)"
            className="flex-1 bg-transparent text-sm text-slate-400 focus:outline-none cursor-not-allowed"
          />
          <button disabled className="p-2 text-slate-500 cursor-not-allowed">
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-slate-500 mt-2 text-center">
          {/* TODO: Implement LangChain / LangGraph SSE Streaming RAG in Chat milestone */}
          LangGraph RAG pipeline and streaming completions will be connected in the Chat Milestone.
        </p>
      </div>
    </div>
  );
};
