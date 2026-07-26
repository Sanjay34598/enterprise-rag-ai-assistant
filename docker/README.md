# Docker Containers & Proxy Configurations

This directory contains multi-stage container build definitions and reverse proxy web server configuration files.

## Files
- `Dockerfile.backend`: Multi-stage Python 3.12 build definition for the FastAPI application.
- `Dockerfile.frontend`: Multi-stage Node.js build definition producing an optimized Nginx container serving static frontend bundle.
- `nginx.conf`: Production Nginx reverse proxy configuration supporting SSL, WebSocket upgrades, and SSE header routing.
