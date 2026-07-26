"""Unit Tests for Security & Cryptographic Utilities."""

import pytest
from app.core.exceptions import AuthenticationError
from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)


def test_password_hashing() -> None:
    """Verify password hashing and verification functionality."""
    plain_password = "SecretPassword123!"
    hashed = hash_password(plain_password)

    assert hashed != plain_password
    assert verify_password(plain_password, hashed) is True
    assert verify_password("WrongPassword!", hashed) is False


def test_jwt_access_token_creation_and_decoding() -> None:
    """Verify JWT Access token encoding and claim verification."""
    user_id = "123e4567-e89b-12d3-a456-426614174000"
    token = create_access_token(sub=user_id)

    payload = decode_token(token)
    assert payload["sub"] == user_id
    assert payload["type"] == "access"
    assert "exp" in payload


def test_jwt_refresh_token_creation_and_decoding() -> None:
    """Verify JWT Refresh token encoding and claim verification."""
    user_id = "123e4567-e89b-12d3-a456-426614174000"
    token = create_refresh_token(sub=user_id)

    payload = decode_token(token)
    assert payload["sub"] == user_id
    assert payload["type"] == "refresh"
    assert "exp" in payload


def test_invalid_jwt_token_decoding() -> None:
    """Verify exception handling for malformed or invalid JWT tokens."""
    invalid_token = "invalid.jwt.token.string"
    with pytest.raises(AuthenticationError):
        decode_token(invalid_token)
