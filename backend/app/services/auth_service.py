"""Authentication & Authorization Business Domain Service.

Orchestrates user registration, credential validation, token generation, and token refresh logic.
"""

from uuid import UUID
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.exceptions import ApplicationError, AuthenticationError
from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)
from app.models.user import User
from app.repositories.user_repo import UserRepository
from app.schemas.auth import RefreshTokenRequest, Token, UserCreate, UserLogin


class AuthService:
    """Authentication Domain Service."""

    def __init__(self, db: AsyncSession) -> None:
        self.db = db
        self.user_repo = UserRepository(db)

    async def register(self, user_in: UserCreate) -> User:
        """Register a new user account."""
        # Check email uniqueness
        existing_email = await self.user_repo.get_by_email(user_in.email)
        if existing_email:
            raise ApplicationError("User with this email already exists")

        # Check username uniqueness
        existing_username = await self.user_repo.get_by_username(user_in.username)
        if existing_username:
            raise ApplicationError("User with this username already exists")

        # Hash password and persist user
        hashed_password = hash_password(user_in.password)
        new_user = await self.user_repo.create_user(user_in, hashed_password)
        return new_user

    async def login(self, credentials: UserLogin) -> Token:
        """Authenticate user credentials and issue JWT Access & Refresh Token pair."""
        # Query by username or email
        login_input = credentials.username_or_email.strip()
        user = await self.user_repo.get_by_email(login_input)
        if not user:
            user = await self.user_repo.get_by_username(login_input)

        if not user or not verify_password(credentials.password, user.hashed_password):
            raise AuthenticationError("Invalid username/email or password")

        if not user.is_active:
            raise AuthenticationError("User account is inactive")

        # Generate JWT Token Pair
        access_token = create_access_token(sub=str(user.id))
        refresh_token = create_refresh_token(sub=str(user.id))

        await self.user_repo.update_last_login(user.id)

        return Token(
            access_token=access_token,
            refresh_token=refresh_token,
            token_type="bearer",
        )

    async def refresh_tokens(self, refresh_in: RefreshTokenRequest) -> Token:
        """Validate Refresh Token and issue a new JWT Token pair."""
        payload = decode_token(refresh_in.refresh_token)

        if payload.get("type") != "refresh":
            raise AuthenticationError("Invalid token type for refresh endpoint")

        user_id_str = payload.get("sub")
        if not user_id_str:
            raise AuthenticationError("Malformed token payload")

        try:
            user_id = UUID(user_id_str)
        except ValueError:
            raise AuthenticationError("Invalid user identification format in token")

        user = await self.user_repo.get_by_id(user_id)
        if not user or not user.is_active:
            raise AuthenticationError("User associated with token is inactive or not found")

        # Issue fresh Token pair
        access_token = create_access_token(sub=str(user.id))
        new_refresh_token = create_refresh_token(sub=str(user.id))

        return Token(
            access_token=access_token,
            refresh_token=new_refresh_token,
            token_type="bearer",
        )
