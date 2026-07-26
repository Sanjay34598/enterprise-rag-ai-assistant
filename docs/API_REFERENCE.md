# OpenAPI & API Reference Manual

Interactive OpenAPI documentation is automatically served by FastAPI when running the backend server locally at `http://localhost:8000/docs`.

---

## Authentication API Endpoints (`/api/v1/auth`)

### 1. Register Account
`POST /api/v1/auth/register`
- **Request Body**:
  ```json
  {
    "email": "user@organization.com",
    "username": "johndoe",
    "password": "SecretPassword123!",
    "full_name": "John Doe"
  }
  ```
- **Response** (`201 Created`):
  ```json
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "email": "user@organization.com",
    "username": "johndoe",
    "full_name": "John Doe",
    "is_active": true,
    "is_superuser": false,
    "created_at": "2026-07-26T12:00:00Z"
  }
  ```

---

### 2. Login & Token Issuance
`POST /api/v1/auth/login`
- **Request Body**:
  ```json
  {
    "username_or_email": "johndoe",
    "password": "SecretPassword123!"
  }
  ```
- **Response** (`200 OK`):
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
    "token_type": "bearer"
  }
  ```

---

### 3. Refresh Access Token
`POST /api/v1/auth/refresh`
- **Request Body**:
  ```json
  {
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
  }
  ```
- **Response** (`200 OK`):
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
    "token_type": "bearer"
  }
  ```

---

### 4. Fetch Current User Profile
`GET /api/v1/auth/me`
- **Headers**: `Authorization: Bearer <access_token>`
- **Response** (`200 OK`): Returns `UserResponse` JSON object.

---

### 5. User Logout
`POST /api/v1/auth/logout`
- **Headers**: `Authorization: Bearer <access_token>`
- **Response** (`200 OK`): `{"message": "Successfully logged out user johndoe"}`
