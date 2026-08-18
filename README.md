# 🔥 PokéPump — Full-Stack Monorepo Platform

> **Where Every Reply Creates a Monster.**  
> A community-driven gaming platform built with Next.js 14 App Router, NestJS/Express API Gateway, Prisma ORM, and Dynamic Card Rendering.

---

## 🏗️ Monorepo Architecture

```
PokéPump/
├── apps/
│   ├── web/                     # Next.js 14+ (App Router) Frontend Dashboard
│   └── api/                     # Backend API Gateway (Endpoints, Battle Engine, Webhook)
├── packages/
│   ├── database/                # Prisma ORM Schema & PostgreSQL Client
│   ├── shared/                  # Shared Types, Advantage Matrices, & Leveling Math
│   └── renderer/                # Dynamic SVG & Card Compositor Engine
├── docker-compose.yml           # Local PostgreSQL & Redis containers
├── package.json                 # Root npm workspaces config
└── tsconfig.base.json           # Base TypeScript configuration
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Build Shared Packages
```bash
npm run build:shared
npm run build:db
npm run build:renderer
```

### 4. Run Development Servers
Start both Web and API concurrently:
```bash
# Start Next.js Frontend (port 3000)
npm run dev:web

# Start Backend API (port 3001)
npm run dev:api
```

---

## 📡 API Endpoints

- `GET /api/stats`: Dashboard global metrics (Pokémon born, trainers, battles).
- `GET /api/pokemon`: Filterable and searchable Pokémon collection.
- `GET /api/pokemon/:id`: Detailed stats for a single Pokémon.
- `GET /api/pokemon/:id/card.svg`: Dynamic SVG rendered card preview.
- `POST /api/pokemon/hatch`: Simulate hatching a monster from a tweet reply.
- `POST /api/battles/simulate`: Run a turn-based deterministic confrontation.
- `GET /api/battles`: Active and upcoming schedule.

---

## 🛡️ License
MIT © 2026 PokéPump Platform
