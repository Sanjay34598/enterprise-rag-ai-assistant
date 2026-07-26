# Technology Stack Rationale

This document details the architectural choices and rationale behind selecting each component in the Enterprise RAG AI Assistant stack.

---

## 1. Frontend Technologies

| Technology | Selection Rationale |
| --- | --- |
| **React 18** | Industry-standard component model with concurrent rendering capabilities. |
| **TypeScript** | Type-safety reduces runtime crashes, matches backend Pydantic schema contracts. |
| **Vite** | Lightning-fast HMR (Hot Module Replacement) and optimized production bundler. |
| **Tailwind CSS** | Utility-first styling framework enabling rapid design system iteration without CSS bloat. |
| **TanStack Query (v5)** | Gold standard for managing server state, caching, background polling, and optimistic UI updates. |
| **Zustand** | Unopinionated, lightweight client state management without Redux boilerplate. |
| **Zod + React Hook Form** | Declarative type-safe schema validation for user input forms. |

---

## 2. Backend Technologies

| Technology | Selection Rationale |
| --- | --- |
| **Python 3.12** | Latest Python release providing improved execution speed and native static typing extensions. |
| **FastAPI** | High-performance asynchronous web framework natively powered by Pydantic v2 and OpenAPI standard generation. |
| **SQLAlchemy 2.0 (Async)** | Modern async ORM offering explicit query control and type safety. |
| **Alembic** | Reliable, deterministic database schema migration tool. |
| **PostgreSQL + PGVector** | Single, robust database engine handling both relational metadata and vector embeddings without needing separate vector hardware for initial deployment. |

---

## 3. AI & Vector Engine

| Technology | Selection Rationale |
| --- | --- |
| **LangChain / LangGraph** | Provides stateful cyclic execution graphs for multi-step agentic RAG workflows (query rewriting, reranking, verification). |
| **Ollama** | Local LLM server allowing self-hosted, privacy-compliant open-source model execution (Llama 3, Mistral, Qwen). |
| **HuggingFace Embeddings** | Open-source embedding models (e.g., `all-MiniLM-L6-v2`, `bge-small-en-v1.5`) providing zero-vendor-lock-in local vector generation. |
| **FAISS / ChromaDB / PGVector** | Pluggable vector store layer supporting fast in-memory testing (FAISS) and enterprise persistence (PGVector). |
