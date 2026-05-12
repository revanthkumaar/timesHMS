# Enterprise Multi-tenant HMS SaaS Monorepo

This repository contains a production-oriented, modular foundation for a multi-tenant Hospital Management System (HMS) SaaS platform.

## What is included in this initial delivery

- Complete implementation plan and phased roadmap
- System architecture and module dependency graph
- Multi-tenant database ERD and Prisma schema
- API design contracts (v1)
- Turborepo + pnpm monorepo bootstrap
- NestJS backend bootstrap with security, versioning, Swagger, and health endpoint
- Shared TypeScript packages for config, types, and design tokens
- Docker, docker-compose, CI workflow, Kubernetes and Terraform-ready infrastructure skeleton

## Monorepo

- Package manager: `pnpm`
- Orchestration: `turbo`
- Language: `TypeScript`

## Quick start

```bash
pnpm install
pnpm dev
```

## Quality gates

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

See `docs/` for architecture, ERD, API contracts, and phased implementation details.
