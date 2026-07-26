"""Custom Application Exception Hierarchy (Placeholder)."""

class ApplicationError(Exception):
    """Base domain exception."""
    pass

class EntityNotFoundError(ApplicationError):
    """Raised when domain entity is not found."""
    pass

class AuthenticationError(ApplicationError):
    """Raised on authentication failure."""
    pass
