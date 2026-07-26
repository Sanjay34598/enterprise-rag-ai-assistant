"""Authentication & User Pydantic v2 Schemas (DTOs).

Defines validation models for registration, login, user profile, and JWT token payloads.
"""

from datetime import datetime
from uuid import UUID
from pydantic import BaseModel, ConfigDict, EmailStr, Field


class UserCreate(BaseModel):
    """User registration request schema."""

    email: EmailStr
    username: str = Field(..., min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_-]+$")
    password: str = Field(..., min_length=8, max_length=128)
    full_name: str | None = Field(None, max_length=255)


class UserLogin(BaseModel):
    """User login request schema."""

    username_or_email: str
    password: str


class UserResponse(BaseModel):
    """User profile response schema."""

    id: UUID
    email: EmailStr
    username: str
    full_name: str | None = None
    is_active: bool
    is_superuser: bool
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class Token(BaseModel):
    """JWT Token pair response schema."""

    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class TokenPayload(BaseModel):
    """Decoded JWT payload schema."""

    sub: str
    exp: int
    type: str


class RefreshTokenRequest(BaseModel):
    """Token refresh request schema."""

    refresh_token: str
