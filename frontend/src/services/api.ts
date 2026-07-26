"""Axios HTTP Client Configuration & Endpoint Methods."""

import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export interface HealthResponse {
  status: string;
  database: string;
  version: string;
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// TODO: Add JWT Authorization Interceptor in Auth milestone
// apiClient.interceptors.request.use((config) => { ... })

export const fetchHealthStatus = async (): Promise<HealthResponse> => {
  const response = await apiClient.get<HealthResponse>('/health');
  return response.data;
};
