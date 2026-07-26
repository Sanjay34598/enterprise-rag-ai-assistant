"""Declarative Base Model for ORM Entities.

All database models inherit from this Base class.
"""

from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """Base ORM model class.

    TODO: Register ORM models (User, Document, Chunk, Conversation, Message)
    in future feature development milestones.
    """

    pass
