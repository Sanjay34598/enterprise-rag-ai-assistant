# Deployment Strategy & Containerization Runbook

## 1. Containerized Local Production Build

To build and execute production containers locally:

```bash
docker-compose -f docker-compose.yml up -d --build
```

---

## 2. Docker Architecture

- **Backend Container**: Built from `docker/Dockerfile.backend`. Multi-stage Python 3.12 slim runtime image executing Gunicorn + Uvicorn worker threads.
- **Frontend Container**: Built from `docker/Dockerfile.frontend`. Multi-stage Node 20 build output served via high-performance Nginx web server container.
- **Database Container**: Official `pgvector/pgvector:pg16` image providing PostgreSQL 16 with native vector index extensions.
