import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ProtectedRoute } from './ProtectedRoute';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { DocumentsPage } from '../pages/DocumentsPage';
import { ChatPage } from '../pages/ChatPage';
import { SettingsPage } from '../pages/SettingsPage';
import { useAuthStore } from '../store/authStore';
import { fetchCurrentUserApi } from '../services/api';

export const AppRoutes: React.FC = () => {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    initializeAuth();
    if (isAuthenticated) {
      fetchCurrentUserApi()
        .then((user) => setUser(user))
        .catch(() => {
          // Token expired or invalid
        });
    }
  }, [initializeAuth, isAuthenticated, setUser]);

  return (
    <Routes>
      {/* Public Authentication Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Main Application Routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
          path="/dashboard"
        />
        <Route
          element={
            <Layout>
              <DocumentsPage />
            </Layout>
          }
          path="/documents"
        />
        <Route
          element={
            <Layout>
              <ChatPage />
            </Layout>
          }
          path="/chat"
        />
        <Route
          element={
            <Layout>
              <SettingsPage />
            </Layout>
          }
          path="/settings"
        />
      </Route>

      {/* Fallback Root Route */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
