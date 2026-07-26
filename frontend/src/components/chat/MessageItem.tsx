import React from 'react';

export interface MessageItemProps {
  role: 'user' | 'assistant';
  content: string;
}

export const MessageItem: React.FC<MessageItemProps> = ({ role, content }) => {
  return (
    <div className={`p-3 rounded-lg ${role === 'user' ? 'bg-blue-100 text-blue-900 ml-auto' : 'bg-gray-100 text-gray-900'}`}>
      <p>{content}</p>
    </div>
  );
};
