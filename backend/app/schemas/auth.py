"""Authentication Schemas (Placeholder)."""

from pydantic import BaseModel, EmailStr

class UserRegisterRequest(BaseModel):
    """Registration request payload."""
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    """Auth token response."""
    access_token: str
    token_type: str = "bearer"
