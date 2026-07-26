"""FastAPI Dependency Injection Utilities (Placeholder)."""

from typing import AsyncGenerator

async def get_db_session() -> AsyncGenerator[None, None]:
    """Dependency provider for Async SQLAlchemy session."""
    yield None
