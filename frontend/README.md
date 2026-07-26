# Enterprise RAG AI Assistant - Frontend Application

Built with React 18, TypeScript, Vite, Tailwind CSS, React Router v6, TanStack Query, and Zustand.

## Architecture

Follows **Feature-Sliced Design (FSD)** patterns:

```text
src/
├── api/          # HTTP Client instance & route definitions
├── components/   # Atomic UI primitives & domain layout components
├── features/     # Feature-sliced modules (Chat, Documents, Auth)
├── hooks/        # Custom React hooks
├── pages/        # Page-level routed views
├── routes/       # React Router setup & protected route guards
├── services/     # TanStack Query server-state query hooks
├── store/        # Zustand client-state stores
├── styles/       # Global CSS & Tailwind design tokens
├── types/        # TypeScript type interfaces
└── utils/        # Formatters & validators
```

## Directory Structure
- `public/`: Static browser assets.
- `src/components/ui/`: Atomic design primitives (Button, Modal, Input).
- `src/components/layout/`: Page shells, Headers, Sidebars.
- `src/components/chat/`: Interactive Chat UI, Citations preview drawers.
- `src/components/documents/`: Drag-and-drop document uploaders & status lists.
- `src/pages/`: Main application pages (Dashboard, Chat, Documents, Login, Settings).
- `src/hooks/`: Custom state and window hooks.
- `src/services/`: API services and React Query hooks.
- `src/store/`: Zustand client state management stores.
- `src/routes/`: React Router routing table.
- `src/types/`: Centralized TypeScript contracts.
