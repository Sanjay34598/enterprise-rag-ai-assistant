import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 min-h-screen">
      <nav className="space-y-2">
        <a href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-800">Dashboard</a>
        <a href="/chat" className="block py-2 px-4 rounded hover:bg-gray-800">Chat</a>
        <a href="/documents" className="block py-2 px-4 rounded hover:bg-gray-800">Documents</a>
      </nav>
    </aside>
  );
};
