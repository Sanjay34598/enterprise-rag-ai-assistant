import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="font-semibold text-lg text-gray-800">Enterprise RAG Assistant</div>
    </header>
  );
};
