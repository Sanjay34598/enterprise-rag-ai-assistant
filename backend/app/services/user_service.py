"""User Management Domain Service.

Provides business logic for user profile retrieval and management.
"""

from uuid import UUID
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import EntityNotFoundError
from app.models.user import User
from app.repositories.user_repo import UserRepository


class UserService:
    """User Domain Service."""

    def __init__(self, db: AsyncSession) -> None:
        self.db = db
        self.user_repo = UserRepository(db)

    async def get_user_by_id(self, user_id: UUID) -> User:
        """Fetch user by ID or raise EntityNotFoundError."""
        user = await self.user_repo.get_by_id(user_id)
        if not user:
            raise EntityNotFoundError(f"User with ID {user_id} not found")
        return user
