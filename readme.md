# Backend Learning

This repository contains three small JavaScript projects for learning Express, MongoDB, and React.

## Projects

### 1. `firstBackend_js`

A basic Express server using CommonJS. It provides simple text, HTML, and JSON responses.

Routes:

- `GET /` - Welcome message
- `GET /rahul` - Profile link response
- `GET /login` - Login message
- `GET /github` - GitHub profile data

Run it:

```bash
cd firstBackend_js
npm install
```

Set a port before starting the server:

```bash
# Windows PowerShell
$env:PORT=3000
npm start
```

The server is available at `http://localhost:3000`.

### 2. `second_backend`

A notes REST API built with Express, MongoDB, and Mongoose.

Routes:

- `GET /` - Health check
- `POST /notes` - Create a note
- `GET /notes` - Fetch all notes
- `PATCH /notes/:id` - Update a note description
- `DELETE /notes/:id` - Delete a note

Create a `.env` file inside `second_backend`:

```env
MONGODB_URL=mongodb://127.0.0.1:27017
DB_NAME=notes_db
```

Run it:

```bash
cd second_backend
npm install
npm start
```

The API is available at `http://localhost:5001`.

Example PATCH request:

```http
PATCH http://localhost:5001/notes/<note-id>
Content-Type: application/json

{
	"description": "Updated description"
}
```

### 3. `fullstack`

A simple full-stack example with an Express backend and a React/Vite frontend.

Backend routes:

- `GET /` - Health check
- `GET /api/jokes` - Returns a list of jokes as JSON

Start the backend:

```bash
cd fullstack/backend
npm install
npm start
```

The backend runs on `http://localhost:4000` by default.

Start the frontend in a second terminal:

```bash
cd fullstack/frontend
npm install
npm run dev
```

Open the local URL printed by Vite.

## Requirements

- Node.js and npm
- MongoDB for `second_backend`
- A modern browser
