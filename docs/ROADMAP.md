# Product Delivery Roadmap

## Phase 1: Core MVP & Authentication (Completed Milestone)
- [x] Project Scaffolding & Clean Architecture Setup
- [x] Runnable Infrastructure Stack (FastAPI, React Vite, PostgreSQL PGVector, Ollama, Docker Compose)
- [x] User ORM Model, Alembic Migrations & PostgreSQL Indexes
- [x] Password Hashing (Bcrypt / Argon2id) & JWT Access/Refresh Tokens
- [x] UserRepository & AuthService Business Domain Logic
- [x] Authentication REST APIs (`/register`, `/login`, `/refresh`, `/me`, `/logout`)
- [x] React Auth Store (Zustand), Protected Routes & Axios Token Refresh Interceptors
- [x] Automated Test Suite for Cryptographic & Auth APIs

## Phase 2: Document Processing & Vector Ingestion (Next Milestone)
- [ ] Multimodal File Loaders (PDF, DOCX, XLSX)
- [ ] Semantic Text Splitting & Hierarchical Chunking
- [ ] HuggingFace & Ollama Vector Embedding Engine
- [ ] PGVector Storage & Chunk Metadata Persistence

## Phase 3: RAG Pipeline & Streaming Chat
- [ ] LangChain & LangGraph Stateful RAG Workflow Engine
- [ ] Cross-Encoder Reranking & Retrieval Optimization
- [ ] SSE Real-time Streaming AI Chat UI & Source Citations Drawer

## Phase 4: Enterprise Multi-Tenancy & Cloud Observability
- [ ] Organization & Workspace Isolation (RBAC)
- [ ] Celery + Redis Asynchronous Task Workers
- [ ] AWS Cloud Infrastructure & OpenTelemetry Monitoring
