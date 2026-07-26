"""Document Schemas (Placeholder)."""

from pydantic import BaseModel

class DocumentResponse(BaseModel):
    """Document metadata payload."""
    id: str
    filename: str
    status: str
