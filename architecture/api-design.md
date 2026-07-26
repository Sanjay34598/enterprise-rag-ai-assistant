# API Specification & Design Guidelines

The API layer is built using FastAPI and follows RESTful architectural patterns, returning standardized JSON response envelopes and supporting Server-Sent Events (SSE) for streaming AI chat completions.

---

## Standard Response Envelope

```json
{
  "success": true,
  "data": {},
  "error": null,
  "meta": {
    "timestamp": "2026-07-26T12:00:00Z",
    "version": "v1"
  }
}
```

---

## Primary V1 Endpoint Registry

### Authentication (`/api/v1/auth`)
- `POST /api/v1/auth/register`: Create new user account.
- `POST /api/v1/auth/login`: Authenticate credentials, return JWT Access & Refresh tokens.
- `POST /api/v1/auth/refresh`: Issue new access token via valid refresh token.

### Document Management (`/api/v1/documents`)
- `POST /api/v1/documents/upload`: Upload PDF, DOCX, or Excel file for background parsing and vector indexing.
- `GET /api/v1/documents`: List uploaded documents and status for current user.
- `GET /api/v1/documents/{document_id}`: Fetch detailed document status and chunk metrics.
- `DELETE /api/v1/documents/{document_id}`: Remove document and purge vector embeddings.

### RAG Chat & History (`/api/v1/chat`)
- `POST /api/v1/chat/query`: Standard synchronous RAG prompt completion with source citations.
- `GET /api/v1/chat/stream`: SSE endpoint (`text/event-stream`) for streaming token responses.
- `GET /api/v1/chat/conversations`: Retrieve user chat conversation threads.
- `GET /api/v1/chat/conversations/{conversation_id}/messages`: Fetch message history with citations.

### System Health (`/api/v1/health`)
- `GET /api/v1/health`: System health probe checking Database & VectorStore status.
