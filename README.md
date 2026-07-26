# Enterprise RAG AI Assistant

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.12+-green.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-009688.svg)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](https://www.docker.com/)

A production-ready, enterprise-grade Retrieval-Augmented Generation (RAG) AI SaaS platform designed for high scalability, modularity, security, and clean architectural separation.

---

## 🏗️ Architecture Overview

The system adheres strictly to **Clean Architecture**, **SOLID Principles**, and **Feature-Sliced Design (FSD)**:

```text
  [ Presentation ] React 18 + Vite (Dark Theme UI, Zustand Auth Store, Axios Interceptors)
         │
         ▼ (REST API / Bearer JWT)
  [ Transport ] FastAPI Routers (app/api/v1/auth.py, app/api/deps.py)
         │
         ▼
  [ Services ] AuthService & UserService (app/services/)
         │
         ▼
  [ Repositories ] UserRepository (app/repositories/user_repo.py)
         │
         ▼
  [ Persistence ] PostgreSQL + Alembic (app/models/user.py)
```

---

## ✨ Feature Matrix

- [x] **Production JWT Authentication**: User Registration, Login, JWT Access Tokens (30 mins), JWT Refresh Tokens (7 days), `/auth/me` profile lookup, and `/auth/logout`.
- [x] **Security & Encryption**: Password hashing via Bcrypt / Argon2id, dual-token rotation, token verification guards.
- [x] **Frontend Auth Integration**: Zustand `useAuthStore` with LocalStorage session persistence, Axios interceptor for automatic `401` token refresh retries, `<ProtectedRoute />` React Router guards, dark-themed Login and Register views.
- [x] **Database & Migrations**: SQLAlchemy 2.0 Async `User` model with unique indexes on `email` and `username`, and Alembic migration `001_create_users_table.py`.
- [ ] **Document Processing**: Multimodal file uploaders (PDF, DOCX, XLSX). *(Next Sprint)*
- [ ] **Vector Indexing & RAG Pipeline**: LangGraph stateful execution graph, PGVector search, and SSE streaming chat. *(Next Sprint)*

---

## 🚀 Quick Start with Docker

```bash
# 1. Clone repository and set up environment
cp backend/.env.example backend/.env

# 2. Launch full container stack
docker-compose up -d --build
```

- **Frontend Application**: `http://localhost:3000`
- **FastAPI OpenAPI Swagger**: `http://localhost:8000/docs`