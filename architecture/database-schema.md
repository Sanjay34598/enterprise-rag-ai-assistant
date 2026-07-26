# Database Schema Design

The PostgreSQL database utilizes relational tables for core entity state management paired with the **PGVector** extension for dense vector embedding storage.

---

## Entity Relationship Diagram (ERD)

```text
  +------------------+         1:N         +--------------------+
  |      users       | <------------------ |     documents      |
  +------------------+                     +--------------------+
  | id (UUID, PK)    |                             | 1:N
  | email (VARCHAR)  |                             v
  | password_hash    |                     +--------------------+
  | created_at       |                     |       chunks       |
  +------------------+                     +--------------------+
           | 1:N                                   | id (UUID, PK)
           v                                       | document_id (FK)
  +------------------+                             | content (TEXT)
  |  conversations   |                             | embedding (VECTOR)
  +------------------+                             +--------------------+
  | id (UUID, PK)    |                                     ^
  | user_id (FK)     |                                     | 1:N (Citations)
  | title (VARCHAR)  |                             +--------------------+
  +------------------+                             |      messages      |
           | 1:N                                   +--------------------+
           +-------------------------------------> | id (UUID, PK)      |
                                                   | conversation_id    |
                                                   | role (user/assistant)
                                                   | content (TEXT)     |
                                                   +--------------------+
```

---

## Table Definitions

### 1. `users`
- `id` (UUID, Primary Key, Default: `gen_random_uuid()`)
- `email` (VARCHAR(255), Unique, Not Null)
- `hashed_password` (VARCHAR(255), Not Null)
- `full_name` (VARCHAR(255))
- `is_active` (BOOLEAN, Default: `true`)
- `created_at` (TIMESTAMP WITH TIME ZONE, Default: `NOW()`)
- `updated_at` (TIMESTAMP WITH TIME ZONE, Default: `NOW()`)

### 2. `documents`
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key -> `users.id` ON DELETE CASCADE)
- `filename` (VARCHAR(255), Not Null)
- `file_path` (VARCHAR(512), Not Null)
- `file_size` (INTEGER, Not Null)
- `mime_type` (VARCHAR(100), Not Null)
- `status` (VARCHAR(50), Default: `'PENDING'`) -- PENDING, PROCESSING, INDEXED, FAILED
- `created_at` (TIMESTAMP WITH TIME ZONE, Default: `NOW()`)

### 3. `chunks`
- `id` (UUID, Primary Key)
- `document_id` (UUID, Foreign Key -> `documents.id` ON DELETE CASCADE)
- `chunk_index` (INTEGER, Not Null)
- `content` (TEXT, Not Null)
- `embedding` (VECTOR(384) / VECTOR(1536)) -- Dimensions depend on HuggingFace / OpenAI model
- `metadata_json` (JSONB)
- `created_at` (TIMESTAMP WITH TIME ZONE, Default: `NOW()`)

### 4. `conversations`
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key -> `users.id` ON DELETE CASCADE)
- `title` (VARCHAR(255), Not Null)
- `created_at` (TIMESTAMP WITH TIME ZONE, Default: `NOW()`)
- `updated_at` (TIMESTAMP WITH TIME ZONE, Default: `NOW()`)

### 5. `messages`
- `id` (UUID, Primary Key)
- `conversation_id` (UUID, Foreign Key -> `conversations.id` ON DELETE CASCADE)
- `role` (VARCHAR(20), Not Null) -- 'user' or 'assistant'
- `content` (TEXT, Not Null)
- `citations_json` (JSONB) -- List of referenced chunk_ids and document metadata
- `created_at` (TIMESTAMP WITH TIME ZONE, Default: `NOW()`)
