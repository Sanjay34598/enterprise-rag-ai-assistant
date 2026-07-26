export interface User {
  id: string;
  email: string;
}

export interface Document {
  id: string;
  filename: string;
  status: 'PENDING' | 'PROCESSING' | 'INDEXED' | 'FAILED';
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}
