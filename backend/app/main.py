"""FastAPI Application Entrypoint & Lifespan Configuration.

Initializes FastAPI application instance, CORS middleware, structured logging,
and lifespan startup/shutdown event handlers.
"""

from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.router import api_v1_router
from app.core.config import settings
from app.core.logging import logger, setup_logging
from app.database.session import check_database_connection


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Application Lifespan Event Handler.

    Manages startup and shutdown events for application resources.
    """
    # Startup Sequence
    setup_logging()
    logger.info(
        "Starting application",
        project_name=settings.PROJECT_NAME,
        version=settings.VERSION,
        environment=settings.ENVIRONMENT,
    )

    db_connected = await check_database_connection()
    if db_connected:
        logger.info("Database connection successfully established")
    else:
        logger.warning("Database connection failed during startup initialization")

    # TODO: Initialize Redis client, Celery task workers, or VectorStore connections here in future milestones

    yield

    # Shutdown Sequence
    logger.info("Shutting down application")
    # TODO: Close external connections or background task pools here in future milestones


def create_application() -> FastAPI:
    """FastAPI Application Factory."""
    app = FastAPI(
        title=settings.PROJECT_NAME,
        version=settings.VERSION,
        description="Production-ready Enterprise RAG AI Assistant API",
        openapi_url=f"{settings.API_V1_STR}/openapi.json",
        docs_url="/docs",
        redoc_url="/redoc",
        lifespan=lifespan,
    )

    # Configure CORS Middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # Restrict origins in production settings
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Include V1 API Router
    app.include_router(api_v1_router, prefix=settings.API_V1_STR)

    return app


app = create_application()
