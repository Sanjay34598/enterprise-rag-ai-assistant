# Local Development Setup Guide

Follow this guide to configure your local development environment for the Enterprise RAG AI Assistant.

---

## 1. Prerequisites
Ensure the following tools are installed on your machine:
- **Python**: `3.12.0` or higher
- **Node.js**: `v20.0.0` or higher (with `npm` or `pnpm`)
- **Docker**: Docker Desktop `v24+` with Docker Compose support
- **Git**: `2.40+`

---

## 2. Backend Local Setup

```bash
# 1. Navigate to backend directory
cd backend

# 2. Create virtual environment
python -m venv venv

# 3. Activate virtual environment
# On Linux/macOS:
source venv/bin/activate
# On Windows PowerShell:
.\venv\Scripts\Activate.ps1

# 4. Install dependencies
pip install -r requirements.txt

# 5. Environment configuration
cp .env.example .env
```

---

## 3. Frontend Local Setup

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

---

## 4. Running the Docker Stack

To launch all infrastructure services (PostgreSQL + PGVector, Ollama LLM, Backend, Frontend) simultaneously:

```bash
docker-compose up -d --build
```
