"""Authentication REST API Endpoints.

Handles user registration, login authentication, token refresh, current profile lookup, and logout.
"""

from typing import Any
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_current_user, get_db
from app.core.exceptions import ApplicationError, AuthenticationError
from app.models.user import User
from app.schemas.auth import (
    RefreshTokenRequest,
    Token,
    UserCreate,
    UserLogin,
    UserResponse,
)
from app.services.auth_service import AuthService

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Register new user account",
)
async def register(
    user_in: UserCreate,
    db: AsyncSession = Depends(get_db),
) -> Any:
    """Register a new user account."""
    auth_service = AuthService(db)
    try:
        new_user = await auth_service.register(user_in)
        return new_user
    except ApplicationError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )


@router.post(
    "/login",
    response_model=Token,
    status_code=status.HTTP_200_OK,
    summary="User authentication login",
)
async def login(
    credentials: UserLogin,
    db: AsyncSession = Depends(get_db),
) -> Any:
    """Authenticate credentials and issue JWT Access and Refresh Tokens."""
    auth_service = AuthService(db)
    try:
        token_pair = await auth_service.login(credentials)
        return token_pair
    except AuthenticationError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e),
            headers={"WWW-Authenticate": "Bearer"},
        )


@router.post(
    "/refresh",
    response_model=Token,
    status_code=status.HTTP_200_OK,
    summary="Refresh JWT Access Token",
)
async def refresh(
    refresh_in: RefreshTokenRequest,
    db: AsyncSession = Depends(get_db),
) -> Any:
    """Validate Refresh Token and issue fresh Access and Refresh tokens."""
    auth_service = AuthService(db)
    try:
        token_pair = await auth_service.refresh_tokens(refresh_in)
        return token_pair
    except AuthenticationError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e),
            headers={"WWW-Authenticate": "Bearer"},
        )


@router.get(
    "/me",
    response_model=UserResponse,
    status_code=status.HTTP_200_OK,
    summary="Fetch current user profile",
)
async def get_me(
    current_user: User = Depends(get_current_user),
) -> Any:
    """Fetch profile details for the currently authenticated user."""
    return current_user


@router.post(
    "/logout",
    status_code=status.HTTP_200_OK,
    summary="User logout",
)
async def logout(
    current_user: User = Depends(get_current_user),
) -> Any:
    """Logout user session.

    TODO: Invalidate token in Redis token blacklist in Redis cache milestone.
    """
    return {"message": f"Successfully logged out user {current_user.username}"}
