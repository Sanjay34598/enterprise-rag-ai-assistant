# Enterprise Coding Standards & Conventions

All contributors must adhere to these coding standards to maintain consistency across the codebase.

---

## 1. General Principles
- **SOLID Principles**: Enforce Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion across all modules.
- **Clean Architecture**: Never import web-layer models or framework specific code inside domain or application service modules.
- **Explicit > Implicit**: Avoid magic strings, global state mutations, or hidden dynamic attribute assignments.

---

## 2. Backend (Python 3.12 & FastAPI)
- **Code Style**: Strictly follow PEP 8. Formatting enforced via `ruff format` and `ruff check`.
- **Type Annotations**: 100% type hint coverage required on function parameters and return types (`mypy --strict`).
- **Async Execution**: Always use `async def` for I/O bound database and HTTP operations. Avoid blocking synchronous libraries inside async endpoints.
- **Error Handling**: Raise domain-specific custom exceptions (`app/core/exceptions.py`) rather than generic `HTTPException` inside service modules.

---

## 3. Frontend (React + TypeScript)
- **Feature-Sliced Structure**: Keep domain logic inside dedicated feature folders (`src/features/<feature_name>`).
- **Component Design**: Keep UI components pure and stateless wherever possible. Move business data fetching logic into custom hooks (`src/hooks`) or TanStack Query hooks.
- **Type Safety**: Never use `any`. Always define explicit interfaces or use imported schemas from `src/types`.
- **File Naming**:
  - Components & Pages: `PascalCase.tsx` (e.g., `ChatWindow.tsx`)
  - Hooks: `camelCase.ts` starting with `use` (e.g., `useAuth.ts`)
  - Utilities & Services: `camelCase.ts` (e.g., `formatters.ts`)
