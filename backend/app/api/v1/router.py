"""Central V1 Router Aggregator.

Aggregates all API v1 domain sub-routers into a single router.
"""

from fastapi import APIRouter

from app.api.v1 import auth, chat, documents, health

api_v1_router = APIRouter()

# Register Health Router
api_v1_router.include_router(health.router)

# Register Feature Router Stubs with TODO comments
# TODO: Implement Auth router endpoints (login, register, token refresh) in Auth milestone
api_v1_router.include_router(auth.router)

# TODO: Implement Documents router endpoints (upload, list, delete) in Document milestone
api_v1_router.include_router(documents.router)

# TODO: Implement Chat router endpoints (query, stream, history) in RAG Chat milestone
api_v1_router.include_router(chat.router)
