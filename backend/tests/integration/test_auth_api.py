"""Integration Tests for Authentication REST Endpoints."""

import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health_check_endpoint() -> None:
    """Verify health probe returns status."""
    response = client.get("/api/v1/health")
    assert response.status_code in (200, 503)
    data = response.json()
    assert "status" in data
    assert "version" in data


def test_auth_me_unauthorized_without_token() -> None:
    """Verify GET /api/v1/auth/me returns 401 Unauthorized when no Bearer token is sent."""
    response = client.get("/api/v1/auth/me")
    assert response.status_code == 401
