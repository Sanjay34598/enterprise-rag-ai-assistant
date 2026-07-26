# Enterprise RAG AI Assistant - Backend Application

The backend subsystem is built with Python 3.12, FastAPI, SQLAlchemy 2.0 (Async), Pydantic v2, PostgreSQL (PGVector), and LangChain / LangGraph.

## Architecture Overview

Dependencies follow strict **Clean Architecture** rules:

```text
  [ API / Transport Layer ] (app/api/)
             │
             ▼
  [ Application Services ]  (app/services/) ──► [ AI Subsystem ] (app/ai/)
             │
             ▼
  [ Domain Repositories ]   (app/repositories/)
             │
             ▼
  [ Database Models ]       (app/models/)
```

- Web transport logic strictly isolated in `app/api/`.
- Domain business logic encapsulated in `app/services/`.
- AI processing, splitters, embeddings, and LangGraph workflow pipelines isolated in `app/ai/`.
- Data persistence abstracted via Repository Pattern in `app/repositories/`.

## Directory Structure
- `app/api/`: HTTP REST & SSE streaming routers.
- `app/core/`: Application settings, structlog config, and exception handlers.
- `app/database/`: Async engine and DB session manager.
- `app/models/`: SQLAlchemy ORM database models.
- `app/schemas/`: Pydantic v2 DTO schemas.
- `app/repositories/`: Abstract and SQL data access repositories.
- `app/services/`: Business services logic.
- `app/ai/`: Decoupled AI loaders, chunkers, embeddings, vector stores, and LangGraph pipelines.
- `app/tasks/`: Asynchronous background task workers.
- `app/utils/`: Utility functions.
- `tests/`: Unit and integration test suites.
