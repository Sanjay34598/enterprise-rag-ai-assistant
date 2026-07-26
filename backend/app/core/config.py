"""Pydantic Environment Configuration Management (Placeholder)."""

from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    """Application Settings Schema."""
    PROJECT_NAME: str = "Enterprise RAG AI Assistant"
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/enterprise_rag"
    JWT_SECRET: str = "super-secret-key"

    class Config:
        env_file = ".env"

settings = Settings()
