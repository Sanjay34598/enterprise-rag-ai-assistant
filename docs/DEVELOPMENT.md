# Developer Workflow & Testing Manual

## 1. Running Backend Tests

```bash
cd backend
pytest tests/unit -v
pytest tests/integration -v
```

---

## 2. Database Migrations (Alembic)

When modifying SQLAlchemy ORM entities inside `app/models`:

```bash
cd backend

# Generate revision script automatically
alembic revision --autogenerate -m "Add new field to document table"

# Upgrade local database schema
alembic upgrade head
```

---

## 3. Linting & Code Formatting

### Backend
```bash
cd backend
ruff check .
ruff format .
mypy app
```

### Frontend
```bash
cd frontend
npm run lint
npx tsc --noEmit
```
