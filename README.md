# Field hockey outreach (Alabama)

Monorepo with a static Astro site and a small Hono API for future features (contact forms, server logic).

## Prerequisites

- Node.js 22+ (Astro 6 requirement for `wat-frontend`; `wat_backend` runs on Node 20+)

## Local development

Run two terminals from this directory.

**Frontend** (default [http://localhost:4321](http://localhost:4321)):

```bash
cd wat-frontend
npm install
npm run dev
```

**Backend** (default [http://localhost:3001](http://localhost:3001)):

```bash
cd wat_backend
npm install
npm run dev
```

Health checks: `GET /health` and `GET /api/health`.

Optional: set `CORS_ORIGIN` to your deployed static site origin (e.g. `https://your-site.pages.dev`) so browser calls from production are allowed when you add API usage later. Multiple origins: comma-separated list.

## Build outputs

| Package       | Build command   | Output                        |
| ------------- | --------------- | ----------------------------- |
| `wat-frontend` | `npm run build` | `wat-frontend/dist/` (static) |
| `wat_backend`  | `npm run build` | `wat_backend/dist/` (JS)      |

Preview the static site locally: `cd wat-frontend && npm run preview`.

## Deploy (GitHub connected)

Do this order so URLs and CORS line up.

### 1. Backend (Render + Docker)

1. Push this monorepo to GitHub.
2. In [Render](https://render.com): **New** → **Blueprint**, connect the repo, approve the `render.yaml` in the repo root.
3. After the first deploy, copy the service URL (e.g. `https://wat-backend.onrender.com`).
4. In that service → **Environment**: add **`CORS_ORIGIN`** = your **frontend** URL(s), comma-separated if needed (e.g. `https://your-site.netlify.app`). Render sets **`PORT`** automatically; do not hardcode it.

Other hosts: run the image from `wat_backend/Dockerfile`, or use `npm install && npm run build` then `npm start` with Node 20+.

### 2. Frontend (Netlify or Cloudflare Pages)

**Netlify:** **Add new site** → Import repo. Set **Base directory** to `wat-frontend` (build settings in `wat-frontend/netlify.toml` apply). Under **Environment variables**, set **`PUBLIC_WAT_API_URL`** to your backend URL (no trailing slash), e.g. `https://wat-backend.onrender.com`.

**Cloudflare Pages:** Connect repo, **Root directory** `wat-frontend`, build `npm run build`, output `dist`, Node 22. Add the same **`PUBLIC_WAT_API_URL`**.

Use `import { publicApiBaseUrl } from '../lib/publicApi'` (path as needed) when you call the API from the site.

### 3. Local env template

Copy `wat-frontend/.env.example` to `wat-frontend/.env` and adjust if your API is not on port 3001.

### CI

Pushes and PRs to `main`/`master` run `.github/workflows/ci.yml` to build both packages.

### Custom domain

Point DNS at your host; HTTPS is handled for you.
