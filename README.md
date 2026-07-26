# Enterprise RAG AI Assistant

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.12+-green.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-009688.svg)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](https://www.docker.com/)

A production-ready, enterprise-grade Retrieval-Augmented Generation (RAG) AI SaaS platform designed for high scalability, modularity, security, and clean architectural separation. Enables organizations to securely ingest documents (PDF, DOCX, Excel) and interact with them using state-of-the-art LLM pipelines.

---

## 🏗️ Architecture Overview

The system adheres strictly to **Clean Architecture**, **SOLID Principles**, and **Feature-Sliced Design (FSD)**:

```text
                                  +-----------------------+
                                  |    React + Vite UI    |
                                  +-----------+-----------+
                                              | (HTTP / SSE)
                                              v
                                  +-----------------------+
                                  |     FastAPI Layer     |
                                  +-----------+-----------+
                                              |
                                              v
                                  +-----------------------+
                                  |    Services Layer     |
                                  +-----+-----------+-----+
                                        |           |
                   +--------------------+           +--------------------+
                   |                                                     |
                   v                                                     v
     +---------------------------+                         +---------------------------+
     |     AI / RAG Subsystem    |                         |     Repositories / DB     |
     | (LangChain/LangGraph/Ollama)|                       |   (SQLAlchemy / PGVector) |
     +---------------------------+                         +---------------------------+
```

For full details, see the [Architecture Documentation](architecture/system-design.md).

---

## ✨ Features (MVP)

- **Authentication & Security**: User Registration, Login, JWT access/refresh token management.
- **Multimodal Document Upload**: Ingestion support for PDF, DOCX, and Excel files.
- **Document Processing**: Semantic chunking, text normalization, metadata indexing.
- **Vector Search & Storage**: Embeddings generation via HuggingFace / Ollama, vector indexing with PGVector (Production) and FAISS/ChromaDB (Local Dev).
- **RAG Pipeline**: Stateful LangGraph & LangChain workflow execution for contextual retrieval, re-ranking, and query answering.
- **Interactive AI Chat**: Real-time streaming responses (Server-Sent Events), source citation mapping, and session chat history persistence.
- **Containerized Stack**: Fully dockerized infrastructure for reproducible local and production setups.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript & Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: TanStack Query (Server State), Zustand (Client State)
- **Forms & Validation**: React Hook Form, Zod

### Backend
- **Runtime & Framework**: Python 3.12, FastAPI
- **ORM & Migrations**: SQLAlchemy 2.0 (Async), Alembic
- **Database**: PostgreSQL with PGVector extension
- **Validation**: Pydantic v2

### AI Stack
- **Orchestration**: LangChain, LangGraph
- **Embeddings**: HuggingFace Embeddings, Ollama
- **Vector Stores**: PGVector (Production), FAISS & ChromaDB (Development)
- **LLM Engine**: Ollama (Local open-source models), OpenAI (Optional cloud provider)

---

## 📁 Repository Structure

```text
enterprise-rag-ai-assistant/
├── .github/              # Governance templates & placeholders
├── architecture/         # System design, API, and database architecture docs
├── backend/              # Clean Architecture FastAPI backend
├── docker/               # Dockerfiles & container configurations
├── docs/                 # Operational guides (Setup, Contributing, API reference)
├── frontend/             # Feature-Sliced React + Vite frontend
├── scripts/              # Setup & maintenance automation scripts
├── screenshots/          # Platform preview assets
├── tests/                # Top-level integration & E2E tests
├── docker-compose.yml    # Local development stack orchestration
└── README.md             # Project overview (this document)
```

---

## 🚀 Getting Started

### Prerequisites
- [Docker & Docker Compose](https://www.docker.com/get-started/)
- [Python 3.12+](https://www.python.org/) (for local backend development)
- [Node.js 20+](https://nodejs.org/) (for local frontend development)

### Quick Start with Docker

```bash
# 1. Clone the repository
git clone https://github.com/organization/enterprise-rag-ai-assistant.git
cd enterprise-rag-ai-assistant

# 2. Copy environment file
cp backend/.env.example backend/.env

# 3. Spin up the docker stack
docker-compose up -d --build
```

The application services will be accessible at:
- **Frontend App**: `http://localhost:3000`
- **FastAPI API & Swagger Docs**: `http://localhost:8000/docs`
- **PostgreSQL Database**: `localhost:5432`

For detailed setup instructions, refer to [docs/SETUP.md](docs/SETUP.md).

---

## 🗺️ Roadmap

- [x] **Phase 1: MVP Architecture & Scaffolding** (Clean Architecture, Document Parsing, RAG Pipeline, Streaming Chat)
- [ ] **Phase 2: Enterprise Multi-Tenancy** (Organizations, Workspaces, Fine-Grained RBAC)
- [ ] **Phase 3: Asynchronous Compute & Queues** (Celery + Redis workers for background ingestion & OCR)
- [ ] **Phase 4: Production Cloud & Observability** (AWS Deployment, Prometheus/Grafana, OpenTelemetry)

Read the full roadmap at [docs/ROADMAP.md](docs/ROADMAP.md).

---

## 🤝 Contributing

We welcome contributions! Please review [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) and [architecture/coding-standards.md](architecture/coding-standards.md) prior to submitting a Pull Request.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.