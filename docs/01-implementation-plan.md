# HMS SaaS Complete Implementation Plan

## Phase 0 — Foundations
- Monorepo bootstrap (Turborepo + pnpm + TypeScript)
- Shared package baselines (`config`, `types`, `design-system`)
- Environment strategy and secret management patterns
- Quality gates and pre-commit standards

## Phase 1 — Architecture and Platform Core
- System context, container, and component architecture
- Tenant model and isolation policy
- Security baseline (OWASP ASVS + HIPAA-style controls)
- Audit model and observability plan

## Phase 2 — Data Layer
- Prisma schema with shared DB multi-tenancy using `tenantId`
- Migrations, seed strategy, indexes, unique constraints
- Soft delete and audit fields on major entities

## Phase 3 — Backend Core (NestJS)
- App bootstrap with secure defaults (helmet, CORS, rate limiting)
- Config module with env schema validation
- API versioning + Swagger/OpenAPI
- Health and readiness probes

## Phase 4 — Authentication & Sessions
- Password login, OTP login abstraction, refresh token rotation
- MFA-ready challenge/session architecture
- Social login provider abstraction

## Phase 5 — Authorization (RBAC + Permissions)
- Role catalog + permission matrix
- Route/API guards and policy decorators
- Tenant-scoped authorization checks

## Phase 6 — Scheduling & Slot Engine
- Doctor calendars, configurable slot intervals, blocks, holidays
- Double-booking prevention via transactional constraints
- Waiting list and auto-promotion workflows (BullMQ)

## Phase 7 — Appointment Domain
- Booking, confirmation, cancellation, reschedule
- Real-time slot updates using Socket.IO + Redis Pub/Sub

## Phase 8 — Payments & Billing
- Stripe + Razorpay provider adapters
- Webhook handling, invoices, reconciliation, refunds

## Phase 9 — Notifications
- Omni-channel notification service (SMS/WhatsApp/Email/Push)
- Template engine and event-driven triggers

## Phase 10 — EMR/EHR
- Vitals, diagnoses, prescriptions, files, timeline
- Secure object storage (S3) and signed URL patterns

## Phase 11 — Frontend Apps (Next.js)
- Admin, Patient, Doctor portals using shared design system
- Mobile-first responsive UX and accessibility compliance

## Phase 12 — Mobile App (Expo)
- Shared API client and auth/session handling
- Offline-ready caching for core records

## Phase 13 — Testing
- Unit/integration/e2e/API tests with Jest + Playwright
- Contract tests for critical modules

## Phase 14 — DevOps & Deployment
- Dockerfiles and docker-compose
- GitHub Actions CI/CD
- Kubernetes manifests and Terraform-ready structure
- Deployment runbooks for AWS/Azure/DO/Vercel
