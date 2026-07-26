"""FastAPI Dependency Injection Helpers.

Provides reusable dependencies for route handlers.
"""

from collections.abc import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession
from app.database.session import get_db_session


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Dependency provider for database sessions.

    TODO: Extend with Auth / Current User / Tenant Scoping dependencies
    in future feature milestones.
    """
    async for session in get_db_session():
        yield session
