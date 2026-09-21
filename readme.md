# Backend Learning

A collection of small JavaScript projects for learning Express, MongoDB, Mongoose, React, file uploads, and external storage services. Each project is independent and has its own `package.json`.

## Repository structure

```text
firstBackend_js/       Basic Express server
second_backend/        Notes REST API with MongoDB
fullstack/              Express API with a React/Vite frontend
T_COMPLETE_BACKEND/    Post creation API with image uploads
```

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

### 4. `T_COMPLETE_BACKEND`

An Express API that accepts a post image, uploads it to ImageKit, and uses the MongoDB connection configured by `second_backend`.

Routes:

- `GET /` - Health check
- `POST /create-post` - Upload a post image using the `image` form field

Create a `.env` file inside `T_COMPLETE_BACKEND`:

```env
MONGODB_URL=mongodb://127.0.0.1:27017
DB_NAME=posts_db
Imagekit_key=your-imagekit-private-key
```

Run it:

```bash
cd T_COMPLETE_BACKEND
npm install
npm start
```

The API is available at `http://localhost:8000`.

Example upload with `curl`:

```bash
curl -X POST http://localhost:8000/create-post -F "image=@path/to/image.jpg"
```

## General setup

Install dependencies separately in the project you want to run:

```bash
cd <project-directory>
npm install
npm start
```

Only `second_backend` and `T_COMPLETE_BACKEND` require a running MongoDB instance. Do not commit `.env` files or private API keys.

## Requirements

- Node.js and npm
- MongoDB for `second_backend`
- A modern browser
