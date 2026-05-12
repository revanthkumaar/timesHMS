# Enterprise Multi-tenant HMS SaaS Monorepo

This repository now includes a runnable backend API with multi-tenant-aware appointment APIs and JWT authentication.

> Tooling note: the repo pins `pnpm@9.12.2` (via `packageManager`) and CI uses the exact same version to avoid version-conflict failures.

> CI note: cache is disabled until `pnpm-lock.yaml` is committed; once lockfile is present, enable `setup-node` pnpm cache.

## Included applications

- `apps/api` — NestJS API (implemented)
- `apps/patient-web` — Next.js patient UI (workflow screens)
- `apps/admin-web` — Next.js admin UI (workflow screens)
- `apps/doctor-web` — Next.js doctor UI (workflow screens)
- `apps/mobile-app` — planned (Expo)

## Run locally

1. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
2. Start infrastructure:
   ```bash
   docker compose up -d postgres redis
   ```
3. Install dependencies and generate Prisma client:
   ```bash
   pnpm install
   pnpm --filter @apps/api prisma:generate
   ```
4. Run migrations and seed:
   ```bash
   pnpm --filter @apps/api prisma:migrate
   pnpm --filter @apps/api prisma:seed
   ```
5. Start API:
   ```bash
   pnpm --filter @apps/api dev
   ```

## Quick verification using Postman

- Health: `GET http://localhost:3000/v1/health`
- Login: `POST http://localhost:3000/v1/auth/login/password`
  ```json
  {"email":"patient@example.com","password":"Password@123"}
  ```
- Create appointment: `POST http://localhost:3000/v1/appointments`
  - Headers:
    - `Authorization: Bearer <token>`
    - `x-tenant-id: <tenant-id>`
- List appointments: `GET http://localhost:3000/v1/appointments`

## Quality gates

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```


## Linting note

API app currently uses TypeScript-compiler lint gate (`tsc --noEmit`) for CI stability.


## Run web portals

```bash
pnpm --filter @apps/patient-web dev
pnpm --filter @apps/admin-web dev
pnpm --filter @apps/doctor-web dev
```
