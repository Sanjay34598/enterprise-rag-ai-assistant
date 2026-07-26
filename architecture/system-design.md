# System Design & Clean Architecture Blueprint

## 1. High-Level System Architecture

The Enterprise RAG AI Assistant is designed according to **Clean Architecture** (Ports & Adapters) principles. The primary objective is to keep business logic independent of external frameworks, databases, and LLM vendors.

```text
  +-----------------------------------------------------------------------+
  |                           PRESENTATION LAYER                          |
  |             React 18 + Vite (Feature-Sliced Design UI)                |
  +-----------------------------------+-----------------------------------+
                                      | HTTP REST / SSE Stream
                                      v
  +-----------------------------------------------------------------------+
  |                           TRANSPORT LAYER                             |
  |             FastAPI Endpoints (app/api/v1/)                           |
  +-----------------------------------+-----------------------------------+
                                      | DTO Schemas (Pydantic v2)
                                      v
  +-----------------------------------------------------------------------+
  |                             APPLICATION LAYER                         |
  |         Services (Auth, Document, Chat, RAG Service)                  |
  +-----------------+-----------------------------------+-----------------+
                    |                                   |
                    v                                   v
  +-----------------------------------+   +-------------------------------+
  |            DOMAIN LAYER           |   |       AI ENGINE SUBSYSTEM     |
  | Models & Entities (SQLAlchemy)    |   | LangChain / LangGraph Engine  |
  | Abstract Repositories Interfaces  |   | Chunkers / Loaders / Vector DB|
  +-----------------+-----------------+   +-------------------------------+
                    |
                    v
  +-----------------------------------------------------------------------+
  |                        INFRASTRUCTURE LAYER                           |
  | PostgreSQL (PGVector) / FAISS / Local File Storage / Redis / Docker   |
  +-----------------------------------------------------------------------+
```

---

## 2. Layer Responsibilities & Boundaries

### 2.1 Transport / API Layer (`backend/app/api`)
- Handles HTTP requests, CORS validation, header parsing, and Server-Sent Events (SSE).
- Converts raw payloads into validated Pydantic DTOs (`app/schemas`).
- Calls Application Services. Contains zero direct SQL queries or AI model invocations.

### 2.2 Application Services Layer (`backend/app/services`)
- Orchestrates use cases and business transaction boundaries.
- Coordinates database queries via Repository interfaces and triggers AI engine workflows.
- Contains zero web server dependencies (e.g., no direct FastAPI Request/Response references).

### 2.3 Domain & Persistence Layer (`backend/app/models` & `backend/app/repositories`)
- Defines domain entities (`User`, `Document`, `Chunk`, `Conversation`, `Message`).
- Uses Repository Pattern (`app/repositories`) to decouple database queries from business services.

### 2.4 AI Engine Layer (`backend/app/ai`)
- Completely decoupled AI processing package.
- Houses document parsers (`loaders/`), semantic splitters (`chunking/`), embedding strategy wrappers (`embeddings/`), vector database adapters (`vectorstores/`), and stateful LangGraph workflows (`pipelines/`).
