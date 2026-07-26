"""Async SQLAlchemy Engine & Session Pool Manager (Placeholder)."""

from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from app.core.config import settings

engine = create_async_engine(settings.DATABASE_URL, echo=False)

async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    """Yield async DB session context."""
    async with AsyncSession(engine) as session:
        yield session
