"""User Repository for Database Persistence Operations.

Encapsulates SQL queries for User entities using Async SQLAlchemy.
"""

from uuid import UUID
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.user import User
from app.schemas.auth import UserCreate


class UserRepository:
    """User Data Access Repository."""

    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def create_user(self, user_in: UserCreate, hashed_password: str) -> User:
        """Create and persist a new User entity in PostgreSQL."""
        db_user = User(
            email=user_in.email.lower().strip(),
            username=user_in.username.strip(),
            full_name=user_in.full_name.strip() if user_in.full_name else None,
            hashed_password=hashed_password,
            is_active=True,
            is_superuser=False,
        )
        self.db.add(db_user)
        await self.db.commit()
        await self.db.refresh(db_user)
        return db_user

    async def get_by_email(self, email: str) -> User | None:
        """Query user by email address."""
        result = await self.db.execute(
            select(User).where(User.email == email.lower().strip())
        )
        return result.scalar_one_or_none()

    async def get_by_username(self, username: str) -> User | None:
        """Query user by username."""
        result = await self.db.execute(
            select(User).where(User.username == username.strip())
        )
        return result.scalar_one_or_none()

    async def get_by_id(self, user_id: UUID) -> User | None:
        """Query user by primary key UUID."""
        result = await self.db.execute(
            select(User).where(User.id == user_id)
        )
        return result.scalar_one_or_none()

    async def update_last_login(self, user_id: UUID) -> None:
        """Update last login timestamp placeholder.

        TODO: Update user's last login column in future audit tracking milestone.
        """
        pass
