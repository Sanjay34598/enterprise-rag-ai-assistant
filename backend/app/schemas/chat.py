"""Chat Schemas (Placeholder)."""

from pydantic import BaseModel

class ChatQueryRequest(BaseModel):
    """Chat prompt request payload."""
    prompt: str
    conversation_id: str | None = None
