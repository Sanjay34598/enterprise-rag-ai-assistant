import React from 'react';
import { UploadCloud } from 'lucide-react';

export const DocumentsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Document Management</h1>
        <p className="text-sm text-slate-400">Upload PDF, DOCX, or Excel documents for vector ingestion</p>
      </div>

      {/* Upload Dropzone Placeholder */}
      <div className="bg-dark-card border-2 border-dashed border-dark-border rounded-xl p-12 text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-full bg-brand-600/10 border border-brand-500/20 flex items-center justify-center text-brand-500">
          <UploadCloud className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-200">Drag and drop documents here</p>
          <p className="text-xs text-slate-500 mt-1">Supports PDF, DOCX, XLSX up to 50MB</p>
        </div>
        <button disabled className="px-4 py-2 bg-dark-hover text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed">
          Select File (Placeholder)
        </button>
      </div>

      <div className="bg-dark-card border border-dark-border p-6 rounded-xl text-xs text-slate-500">
        {/* TODO: Implement Document Parsing, Chunking & Ingestion in Document Milestone */}
        <p>Document parsing, semantic chunking, and embedding generation will be enabled in the Ingestion Milestone.</p>
      </div>
    </div>
  );
};
