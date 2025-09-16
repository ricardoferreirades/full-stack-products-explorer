# Full‑Stack Products Explorer

A full‑stack demo application for exploring a small product catalog and basic analytics.

## Modules & Technologies

### Backend
- Express 4
- CORS
- Morgan
- Dotenv
- Axios (server-side HTTP client)
- Request (legacy HTTP client)
- SQLite3 (local DB dependency present; dataset is file-based in this demo)
- Jest + Supertest (tests)
- Nodemon (dev)

### Frontend
- React 18
- React Router DOM 6
- React Scripts 5 (Create React App tooling)
- Cross-Env (dev)


## Quick Start

node version: 18.XX
```bash
nvm install 18
nvm use 18

# Terminal 1
cd backend
npm install
npm start

# Terminal 2
cd frontend
npm install
npm start
```

> The frontend proxies `/api` requests to `http://localhost:4001`.