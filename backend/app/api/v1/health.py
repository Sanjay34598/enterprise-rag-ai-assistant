"""System Health Endpoint Router.

Provides health checks for system monitoring and container readiness probes.
"""

from typing import Any
from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.database.session import check_database_connection

router = APIRouter(tags=["Health"])


@router.get(
    "/health",
    summary="System Health Probe",
    status_code=status.HTTP_200_OK,
)
async def health_check() -> Any:
    """Check backend service and PostgreSQL database health.

    Returns:
        JSON response with health status, database connection status, and service version.
    """
    is_db_healthy = await check_database_connection()

    db_status = "connected" if is_db_healthy else "disconnected"
    overall_status = "healthy" if is_db_healthy else "unhealthy"

    response_payload = {
        "status": overall_status,
        "database": db_status,
        "version": settings.VERSION,
    }

    if not is_db_healthy:
        return JSONResponse(
            status_code=status.HTTP_533_SERVICE_UNAVAILABLE if hasattr(status, "HTTP_533_SERVICE_UNAVAILABLE") else status.HTTP_503_SERVICE_UNAVAILABLE,
            content=response_payload,
        )

    return response_payload
