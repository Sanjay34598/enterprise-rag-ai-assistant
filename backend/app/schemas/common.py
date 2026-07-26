"""Generic Response Envelope Schemas (Placeholder)."""

from typing import Generic, TypeVar
from pydantic import BaseModel

T = TypeVar("T")

class ResponseEnvelope(BaseModel, Generic[T]):
    """Standardized API envelope."""
    success: bool = True
    data: T | None = None
    error: str | None = None
