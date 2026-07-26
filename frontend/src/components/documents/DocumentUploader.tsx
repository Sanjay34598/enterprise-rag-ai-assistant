import React from 'react';

export const DocumentUploader: React.FC = () => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center bg-gray-50">
      <p className="text-gray-600">Drag & drop PDF, DOCX, or Excel files here</p>
    </div>
  );
};
