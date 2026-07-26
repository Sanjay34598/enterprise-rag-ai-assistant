# OpenAPI & API Reference Manual

Interactive OpenAPI documentation is automatically served by FastAPI when running the backend server locally at `http://localhost:8000/docs`.

---

## Key API Endpoints Overview

| Endpoint | Method | Description | Auth Required |
| --- | --- | --- | --- |
| `/api/v1/health` | GET | System health & DB connection status | No |
| `/api/v1/auth/register` | POST | Register new user account | No |
| `/api/v1/auth/login` | POST | User authentication & token issuance | No |
| `/api/v1/documents/upload` | POST | Upload PDF/DOCX/XLSX for processing | Yes (Bearer JWT) |
| `/api/v1/documents` | GET | List user documents and status | Yes (Bearer JWT) |
| `/api/v1/chat/stream` | GET | SSE real-time token stream for RAG prompt | Yes (Bearer JWT) |
