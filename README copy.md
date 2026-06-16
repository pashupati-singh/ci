# Simple User API

A minimal Express + MongoDB CRUD API for users.

## Setup

1. Add your MongoDB URL to `.env`:
   ```
   MONGO_URL=your_mongodb_connection_string
   PORT=3000
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

| Method | Endpoint           | Description    |
|--------|--------------------|----------------|
| POST   | `/api/users`       | Create user    |
| GET    | `/api/users`       | Get all users  |
| GET    | `/api/users/:id`   | Get one user   |
| PUT    | `/api/users/:id`   | Update user    |
| DELETE | `/api/users/:id`   | Delete user    |

### Example

**Create user**
```json
POST /api/users
{
  "name": "John",
  "email": "john@example.com"
}
```

**Update user**
```json
PUT /api/users/:id
{
  "name": "Jane"
}
```

## Docker

```
docker-compose up --build
```

## Tests

```
npm test
```
